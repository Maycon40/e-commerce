import React from 'react';
import type { GetStaticProps, NextPage } from 'next'

import Link from "next/link";

import Stripe from 'stripe';
import stripeConfig from '../../config/stripe';

import Layout from '../../components/Layout'
import styles from "../../styles/Home.module.css";
import style from "../../styles/produtos.module.css";

interface Props {
    products: Stripe.Product[];
}

export const getStaticProps: GetStaticProps = async () => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    });

    const products = await stripe.products.list();
    
    return {
        props: {
            products: products.data
        }
    };
};

const Produtos: NextPage<Props> = ({ products }) => {
    return (
        <Layout title='Produtos'>
            <main className={style.main}>
                <section>
                    {products.map((item, index) => 
                        <div key={index} className={style.card}>
                            <img src={item.images[0]} width={100} height={70} className={style.image}></img>
                            <p>{item.name}</p>
                            <Link href={`http://localhost:3000/produtos/${item.id}`}><button>Comprar</button></Link>
                        </div>
                    )}
                </section>
            </main>
        </Layout>
    )
}

export default Produtos;