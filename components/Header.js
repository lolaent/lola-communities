import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const HeaderContainer = styled.div`
  background-color: lightBlue;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
`;

const Header = () => (
  <HeaderContainer>
    <NavBar />
  </HeaderContainer>
);

export default Header;
