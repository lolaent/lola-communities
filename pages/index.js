import Head from 'next/head';
import React, { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout';
import CommunitiesCarousel from '../components/CommunitiesCarousel';
import { getContentCollection } from '../lib/cms';

export default class Home extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Head>
          <title>Lola Tech Communities: {title}</title>
        </Head>
        <Layout>
          <article>
            <h1>{title}</h1>
            <HomeContent />
          </article>
          <CommunitiesCarousel communities={this.props.communities} />
        </Layout>
      </>
    );
  }
}

export async function getStaticProps({ params }) {
  const communities = getContentCollection('communities');

  return {
    props: {
      communities,
    },
  };
}
