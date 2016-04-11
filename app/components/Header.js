
import React from 'react';
import { Link } from 'react-router';

import { headerStyle } from '../styles';

const Header = () => (
  <div>
    <div style={headerStyle}>
      <Link to="/"> Index </Link>
      <Link to="/users"> Users </Link>
    </div>
    <br />
  </div>
);

export default Header;
