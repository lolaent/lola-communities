import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${(props) => (props.wide ? '1440px' : '940px')};

  @media (min-width: ${(props) => (props.wide ? '1480px' : '980px')}) {
    padding: 0;
  }
`;

const Container = ({ wide, ...props }) => <ContentWrapper wide={wide}>{props.children}</ContentWrapper>;

export default Container;
