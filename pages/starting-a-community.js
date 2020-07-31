import Head from 'next/head';
import React, { Component } from 'react';
import { attributes, react as Content } from '../content/starting-a-community.md';
import Layout from '../components/Layout';

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
            <Content />
          </article>
        </Layout>
      </>
    );
  }
}
