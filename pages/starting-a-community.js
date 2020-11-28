import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import { getContentBySlug } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const CommunityAdvice = ({ title, content }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {title}</title>
    </Head>
    <Layout>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  </>
);

export default CommunityAdvice;

export async function getStaticProps({ params }) {
  const { data, content: md } = getContentBySlug('pages', 'starting-a-community');
  const content = await markdownToHtml(md);

  return {
    props: {
      title: data.title,
      content,
    },
  };
}
