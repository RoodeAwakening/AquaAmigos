export default (title, n) => {
  return title?.length > n ? `${title.substr(0, n)}...` : title;
};
