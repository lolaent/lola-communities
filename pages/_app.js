import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FullHeightPage, { ExpandingContent } from '../components/FullHeightPage';

// Import slick css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/normalize.css';
import '../styles/generalstyles.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Lola Communities</title>
          <meta
            name="Description"
            content="Lola communities is a place to keep in touch with your favourite tech community"
          />
        </Head>
        <FullHeightPage>
          <NavBar />
          <ExpandingContent>
            <main>
              <Component {...pageProps} />
            </main>
          </ExpandingContent>
          <Footer />
        </FullHeightPage>
      </>
    );
  }
}

export default MyApp;
