import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = (props) => (
  <LayoutContainer>
    <Content>{props.children}</Content>
  </LayoutContainer>
);

export default Layout;
