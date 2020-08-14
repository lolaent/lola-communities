import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: lightblue;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const NavBarItem = styled.a`
  color: white;
`;

const NavBar = () => (
  <NavBarContainer>
    <Link href="/" passHref>
      <NavBarItem>Home</NavBarItem>
    </Link>
    <Link href="/starting-a-community" passHref>
      <NavBarItem>Starting a Community</NavBarItem>
    </Link>
    <Link href="/admin/index.html" passHref>
      <NavBarItem>Log In</NavBarItem>
    </Link>
  </NavBarContainer>
);
export default NavBar;
