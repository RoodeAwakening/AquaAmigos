import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavLinkTitle from '../../atoms/NavLinkTitle/NavLinkTitle';


function NavLinks({ link, linkName }) {
  return (
    <Link to={link}>
      <NavLinkTitle linkName={linkName} />
    </Link>
  );
}

NavLinks.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};


export default NavLinks;
