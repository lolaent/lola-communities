import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import CommunitiesCarousel from '../components/CommunitiesCarousel';
import { getContentBySlug, getContentCollection } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const Home = ({ title, content, communities }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {title}</title>
    </Head>
    <Layout>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <CommunitiesCarousel communities={communities} />
    </Layout>
  </>
);

export default Home;

export async function getStaticProps({ params }) {
  const { data, content: md } = getContentBySlug('pages', 'home');
  const content = await markdownToHtml(md);
  const communities = getContentCollection('communities');

  return {
    props: {
      title: data.title,
      content,
      communities,
    },
  };
}
