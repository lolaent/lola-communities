import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventCard = styled.div`
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 560px;
  background: white;
  margin: 40px;
  &:hover {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Header = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  padding: 10px 20px;
  color: white;
  background: linear-gradient(to right bottom, var(--primary), var(--secondary));
  border-radius: 10px 10px 0 0;
  min-height: 50px;
`;

const Content = styled.div`
  min-height: 120px;
  padding: 20px 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.div`
  color: var(--secondary);
  margin-bottom: 15px;
`;

const EventsList = ({ events }) => (
  <Wrapper>
    {events.map((evnt) => {
      return (
        <EventCard>
          <Header>{evnt.title}</Header>
          <Content>
            <Date>{evnt.date}</Date>
            <div>{evnt.description}</div>
          </Content>
        </EventCard>
      );
    })}
  </Wrapper>
);

export default EventsList;
