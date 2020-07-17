import Head from 'next/head'
import React, { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/aPage.md'
import Layout from '../../components/Layout'

export default class Home extends Component {
  render() {
    let { title, cats } = attributes
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <Layout>
          <article>
            <h1>{title}</h1>
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                  <p>{cat.age}</p>
                </li>
              ))}
            </ul>
          </article>
        </Layout>
      </>
    )
  }
}
