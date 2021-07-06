import Head from 'next/head';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CommunitiesGrid from '../components/CommunitiesGrid';
import EventsList from '../components/EventsList';
import { getContentBySlug, getContentCollection } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const Home = ({ pageTitle, smallTitle, title, intro, eventsTitle, events, copTitle, communities }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {pageTitle}</title>
    </Head>
    <PageHeader smallTitle={smallTitle} title={title} intro={intro} />
    <Section title={copTitle} titleColor={' linear-gradient(to right bottom, var(--primary), var(--secondary))'}>
      <CommunitiesGrid communities={communities} />
    </Section>
    <Section
      title={eventsTitle}
      bgColor={' linear-gradient(to right bottom, var(--primary-light), var(--secondary-light))'}
    >
      <EventsList events={events} />
    </Section>
  </>
);

export default Home;

export async function getStaticProps({ params }) {
  const { data } = getContentBySlug('pages', 'home');
  const intro = await markdownToHtml(data.intro);
  const communities = getContentCollection('communities');

  const events = [
    {
      title: 'Event 1',
      date: '10/12/20',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Event 2',
      date: '26/11/20',
      description: 'Aliquam et sollicitudin turpis, eget commodo felis',
    },
  ];

  return {
    props: {
      pageTitle: `${data.stitle} ${data.title}`,
      smallTitle: data.stitle,
      title: data.title,
      intro: intro,
      copTitle: data.copTitle,
      communities,
      eventsTitle: data.eventsTitle,
      events,
    },
  };
}
