import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Background = styled.div`
  background: radial-gradient(#fff, #f2f2f2);
  padding-top: 160px;
  padding-bottom: 80px;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: bold;
  background: linear-gradient(to right bottom, var(--primary), var(--secondary));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 60px;

  & span {
    display: block;
    font-size: 21px;
  }

  @media (min-width: 600px) {
    font-size: 72px;
    & span {
      font-size: 36px;
    }
  }
  @media (min-width: 800px) {
    font-size: 94px;
    & span {
      font-size: 42px;
    }
  }
  @media (min-width: 940px) {
    font-size: 140px;
    & span {
      font-size: 48px;
    }
  }
`;

const Intro = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;

  @media (min-width: 800px) {
    font-size: 1.4rem;
  }
`;

const PageHeader = ({ smallTitle, title, intro }) => (
  <Background>
    <Container>
      <PageTitle>
        <span>{smallTitle}</span>
        {title}
      </PageTitle>
      <Intro dangerouslySetInnerHTML={{ __html: intro }} />
    </Container>
  </Background>
);
export default PageHeader;
