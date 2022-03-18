import React from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { useRouter } from 'next/router';
import CheckoutButton from '../../components/Produtos/checkoutButton';
import Layout from '../../components/Layout';

import Stripe from 'stripe';
import stripeConfig from '../../config/stripe';

interface Props {
    product: Stripe.Product;
    price: Stripe.Price[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    });

    const products = await stripe.products.list();
    const produtoId = products.data.map(product => product.id);
    const paths = produtoId.map((item) => ({
        params: {
            id: item
        }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    });

    const { id }: any = params;

    const product = await stripe.products.retrieve(id as string);
    const price = await stripe.prices.list();

    return {
        props: {
            product,
            price: price.data
        },
    };
};

const Produtos: NextPage<Props> = (props) => {
    const router = useRouter();

    let num = 0

    if(router.query.id == 'prod_LAF395VzYJTvC8'){
        num = 1
    } else if(router.query.id == 'prod_LAF395VzYJTvC8'){
        num = 2
    }

    return (
        <Layout title='Checkout' >
            <h1>{props.product.name}</h1>
            <img src={props.product.images[0]} style={{width: "100px"}}></img>
            <button onClick={() => router.back()}>Voltar</button>
            <CheckoutButton priceId={props.price[num].id}/>
        </Layout>
    )
}

export default Produtos;