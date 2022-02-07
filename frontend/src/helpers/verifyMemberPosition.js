export default ({ user }) => {
  if (!user) {
    return null;
  } if (user.position >= 1) {
    return true;
  }
  return false;
};
