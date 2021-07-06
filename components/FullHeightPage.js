import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ExpandingContent = styled.div`
  flex-grow: 1;
`;

const FullHeightPage = (props) => <PageWrapper>{props.children}</PageWrapper>;

export default FullHeightPage;
