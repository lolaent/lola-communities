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

export default () => (
  <NavBarContainer>
    <div>
      <Link href="/">
        <NavBarItem title="Home">
          <h2>Home</h2>
        </NavBarItem>
      </Link>
    </div>
  </NavBarContainer>
);
