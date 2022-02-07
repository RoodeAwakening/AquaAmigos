from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    user_image = db.Column(db.String(255), nullable=True, default='https://banner2.cleanpng.com/20180501/cee/kisspng-underwater-diving-scuba-diving-computer-icons-scub-social-rescue-5ae8659c11cd15.4641157515251798040729.jpg')
    role = db.Column(db.String(40), nullable=False, default='member')
    position = db.Column(db.Integer, nullable=False, default=0)
    title = db.Column(db.String(40), nullable=False, default='member')
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    about_me = db.Column(db.String(140))

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def is_role_valid(self, role):
        return role in ['admin', 'editor', 'member']
    
    def is_title_valid(self, title):
        return title in ['President', 'Vice-President', 'Treasurer', 'Secretary', 'Member', 'Trustee', 'Committee Chairman']

    def is_position_valid(self, position):
        return position in [0, 1, 2, 3, 4, 5, 6]

    def is_valid(self, role, title, position):
        return self.is_role_valid(role) and self.is_title_valid(title) and self.is_position_valid(position)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'user_image': self.user_image,
            'role': self.role,
            'position': self.position,
        }
