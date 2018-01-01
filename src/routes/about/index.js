import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import about from './about.md';
import Footer from '../../components/Footer';

function action() {
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      <Layout>
        <Page {...about} />
        <Footer />
      </Layout>
    ),
  };
}

export default action;
