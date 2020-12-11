import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Nav from './Nav';

const Wrapper = styled.div`
  padding: 20px 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 150px;
  height: 40px;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: white;
  font-weight: bold;
`;

const NavBar = () => (
  <Wrapper>
    <Container wide>
      <Content>
        <Logo>LOLA</Logo>
        <Nav />
      </Content>
    </Container>
  </Wrapper>
);

export default NavBar;
