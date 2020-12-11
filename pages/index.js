import Head from 'next/head';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CommunitiesGrid from '../components/CommunitiesGrid';
import { getContentBySlug, getContentCollection } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const Home = ({ pageTitle, smallTitle, title, intro, eventsTitle, events, copTitle, communities }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {pageTitle}</title>
    </Head>
    <PageHeader smallTitle={smallTitle} title={title} intro={intro} />
    <Section title={copTitle} titleColor={'var(--secondary)'}>
      <CommunitiesGrid communities={communities} />
    </Section>
    <Section
      title={eventsTitle}
      bgColor={' linear-gradient(to right bottom, var(--primary-light), var(--secondary-light))'}
    ></Section>
  </>
);

export default Home;

export async function getStaticProps({ params }) {
  const { data } = getContentBySlug('pages', 'home');
  const intro = await markdownToHtml(data.intro);
  const communities = getContentCollection('communities');

  return {
    props: {
      pageTitle: `${data.stitle} ${data.title}`,
      smallTitle: data.stitle,
      title: data.title,
      intro: intro,
      copTitle: data.copTitle,
      communities,
      eventsTitle: data.eventsTitle,
    },
  };
}
