import React from 'react';
import type { NextPage } from 'next'

import Section from '../components/Contato/section1'
import Section2 from '../components/Contato/section2'
import Section3 from '../components/Contato/section3'
import Layout from '../components/Layout'

const Contato: NextPage = () => {
    return (
        <Layout title='Contato'>
            <Section></Section>
            <Section2></Section2>
            <Section3></Section3>
        </Layout>
    )
}

export default Contato;