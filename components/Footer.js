import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const FooterSection = styled.div`
  padding: 20px 0;
  background: #eee;
`;

const Footer = () => (
  <FooterSection>
    <Container wide>Footer</Container>
  </FooterSection>
);

export default Footer;
