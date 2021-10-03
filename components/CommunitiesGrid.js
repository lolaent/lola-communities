import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Grid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CommunityCard = styled.div`
  height: 90px;
  width: 80%;
  margin: 10px;
  border: 2px solid var(--primary-light);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  max-width: 220px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 600px) {
    width: calc(50% - 30px);
    max-width: 280px;
  }

  @media (min-width: 800px) {
    height: 120px;
    width: calc(30% - 20px);
    margin: 20px;
  }
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  text-transform: lowercase;
  text-align: center;
  line-height: 1;
  color: var(--dark-secondary);
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const CommunitiesGrid = ({ communities }) => (
  <Grid>
    {communities.map(({ slug, data }) => (
      <Link href={'/communities/' + slug} passHref>
        <CommunityCard>
          <Name>{data.name}</Name>
        </CommunityCard>
      </Link>
    ))}
  </Grid>
);

export default CommunitiesGrid;
