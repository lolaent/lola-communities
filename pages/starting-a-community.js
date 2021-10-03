import Head from 'next/head';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

import { getContentBySlug } from '../lib/cms';
import markdownToHtml from '../lib/markdownToHtml';

const CommunityAdvice = ({ title, content }) => (
  <>
    <Head>
      <title>Lola Tech Communities: {title}</title>
    </Head>
    <PageHeader title={title} />
    <Section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
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
