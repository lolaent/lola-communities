import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  text-decoration: none;
  & + & {
    margin-left: 40px;
  }
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const NavBar = () => (
  <NavWrapper>
    <Link href="/" passHref>
      <NavItem>Home</NavItem>
    </Link>
    <Link href="/starting-a-community" passHref>
      <NavItem>Starting a Community</NavItem>
    </Link>
    <Link href="/admin/index.html" passHref>
      <NavItem>Log In</NavItem>
    </Link>
  </NavWrapper>
);
export default NavBar;
