export default function verifyTeamMember(allMembers) {
  //  only display the members with a position number grate than 0
  const members = allMembers.filter(member => member.position > 0);
  // sort members from lowest to highest position number
  members.sort((a, b) => a.position - b.position);

  return members;
}
