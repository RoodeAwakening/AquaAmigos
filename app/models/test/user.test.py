import unittest
from user import User


class TestUser(unittest.TestCase):
    def setUp(self):
        self.user = User(
            username='testUser', email='test1@amigos.com', password='Password123',
            user_image='https://banner2.cleanpng.com/20180501/cee/kisspng-underwater-diving-scuba-diving-computer-icons-scub-social-rescue-5ae8659c11cd15.4641157515251798040729.jpg',
            role='admin', position=1, title='President', first_name='Super', last_name='Admin',
            about_me='I am the admin of Amigos and I like to eat tacos!')
        
    def test_user_creation(self):
        self.assertTrue(self.user.username == 'testUser')
        self.assertTrue(self.user.email == 'test1@amigos.com')
        self.assertTrue(self.user.password == 'Password123')
        self.assertTrue(self.user.user_image == 'https://banner2.cleanpng.com/20180501/cee/kisspng-underwater-diving-scuba-diving-computer-icons-scub-social-rescue-5ae8659c11cd15.4641157515251798040729.jpg')
        self.assertTrue(self.user.role == 'admin')
        self.assertTrue(self.user.position == 1)
        self.assertTrue(self.user.title == 'President')
        self.assertTrue(self.user.first_name == 'Super')
        self.assertTrue(self.user.last_name == 'Admin')
        self.assertTrue(self.user.about_me == 'I am the admin of Amigos and I like to eat tacos!')

    def test_allowed_roles(self):
        self.assertTrue(self.user.is_admin())
        self.assertFalse(self.user.is_member())
        self.assertFalse(self.user.is_moderator())
        self.assertFalse(self.user.is_banned())

if __name__ == '__main__':
    unittest.main()