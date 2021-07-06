import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.div`
  background: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  padding: 80px 0;
`;
const SectionHeading = styled.h2`
  color: transparent;
  text-align: center;
  margin-bottom: 40px;
  background: ${(props) => (props.titleColor ? props.titleColor : 'var(--text-color)')};
  background-clip: text;
  -webkit-background-clip: text;
`;

const Section = ({ bgColor, title, titleColor, ...props }) => (
  <Wrapper bgColor={bgColor}>
    <Container>
      {title && <SectionHeading titleColor={titleColor}>{title}</SectionHeading>}
      {props.children}
    </Container>
  </Wrapper>
);

export default Section;
