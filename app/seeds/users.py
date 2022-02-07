from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    superAdmin = User(
        username='superAdmin', email='superAdmin@amigos.com', password='Password123',
        user_image='https://banner2.cleanpng.com/20180501/cee/kisspng-underwater-diving-scuba-diving-computer-icons-scub-social-rescue-5ae8659c11cd15.4641157515251798040729.jpg',
        role='admin', position=1, title='President', first_name='Super', last_name='Admin',
        about_me='I am the admin of Amigos and I like to eat tacos!')
    demo = User(
        username='Demo', email='demo@aa.io', password='password', role='member', position=0, title='Member',
        first_name='Demo', last_name='User', about_me='I am a demo user and I like to eat tacos!')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', role='member', position=0, title='Member',
        first_name='Marnie', last_name='User', about_me='I am a demo user and I like to eat tacos!')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', role='member', position=0, title='Member',
        first_name='Bobbie', last_name='User', about_me='I am a demo user and I like to eat tacos!')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(superAdmin)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
