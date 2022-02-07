import verifyMemberPosition from '../verifyMemberPosition';

// test
describe('verifyMemberPosition', () => {
  it('should return true if user is member with a position above 0', () => {
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'testUser@amigos.com',
      username: 'testUser',
      position: 1,
    };
    expect(verifyMemberPosition(user)).toBe(true);
  });

  it('should return false if user is just a member', () => {
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'testUser@amigos.com',
      username: 'testUser',
      position: 0,
    };
    expect(verifyMemberPosition(user)).toBe(false);
  });

  it('should return null if user is not logged in', () => {
    const user = {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      username: null,
      position: null,
    };
    expect(verifyMemberPosition(user)).toBe(false);
  });
});
