import React from 'react';
import PropTypes from 'prop-types';

function NavLinkTitle({ linkName }) {
  return <h2>{linkName}</h2>;
}

export default NavLinkTitle;

NavLinkTitle.propTypes = {
  linkName: PropTypes.string.isRequired,
};
