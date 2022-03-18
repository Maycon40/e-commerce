import type { NextPage } from 'next'
import React from 'react'

import Layout from '../components/Layout/index'
import Page from '../components/Page'

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <Page/>
    </Layout>
  )
}

export default Home
