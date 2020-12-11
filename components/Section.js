import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.div`
  background: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  padding: 80px 0;
`;
const SectionHeading = styled.h2`
  color: ${(props) => (props.titleColor ? props.titleColor : 'var(--text)')};
  text-align: center;
  margin-bottom: 40px;
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
