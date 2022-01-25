import verifyTeamMember from '../AboutUs/helper/sortTeamMembers';
import Users from '../../../mocks/Users';

describe('verifyTeamMembers', () => {
  it('should return an array of team members with a position number greater than 0', () => {
    const positionedMembers = Users.filter(member => member.position > 0);
    const members = verifyTeamMember(Users);
    expect(members.length).toEqual(positionedMembers.length);
  });
});
