import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import CommunitiesCarousel from '../components/CommunitiesCarousel';
import { getContentBySlug, getContentCollection } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const Home = ({ pageTitle, smallTitle, title, intro, eventsTitle, events, copTitle, communities }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {pageTitle}</title>
    </Head>
    <Layout>
      <div>
        <span>{smallTitle}</span>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: intro }} />
      </div>
      <div>
        <h2>{copTitle}</h2>
        <CommunitiesCarousel communities={communities} />
      </div>
      <div>
        <h2>{eventsTitle}</h2>
      </div>
    </Layout>
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
