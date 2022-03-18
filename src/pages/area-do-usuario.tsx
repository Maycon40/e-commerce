import React from 'react';
import type { GetServerSideProps, NextPage } from 'next'

import Layout from '../components/Layout'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = context.req.cookies.token

    if(!token){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const AreaDoUsuario: NextPage = () => {

    return (
        <Layout title='Area do usuario'>
            <h1>Area do usuario</h1>
        </Layout>
    )
}

export default AreaDoUsuario;