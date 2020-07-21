import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import Nav from '../components/Header'
import Footer from '../components/Footer'

import '../styles/normalize.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Lola Communities</title>
          <meta
            name="Description"
            content="Lola communities is a place to keep in touch with your favourite tech community"
          />
        </Head>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}

export default MyApp
