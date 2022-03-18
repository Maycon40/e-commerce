import React from 'react';
import type { GetServerSideProps, NextPage } from "next";

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

import Data from '../components/Data/Login';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import cookie from 'js-cookie';

interface Inputs {
    msg: string,
}

type event = {
    target: { 
        value: string, 
        name: string 
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = context.req.cookies.token

    if(token){
        return {
            redirect: {
                destination: '/area-do-usuario',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Login: NextPage = () => {
    const [inputs, setInputs] = useState<Inputs>({msg: ''});
    const router = useRouter();

    const handleChangeForm = async (event: {
        preventDefault: () => void
    }) => {
        event.preventDefault();
        let res = await fetch('api/login', {
            method: 'POST',
            headers: {'Content-type':'aplication/json'},
            body: JSON.stringify({
                inputs
            })
        }).then(res => res.json()).catch(err => console.error(err));
        
        if(!res.msg && res.token){
            cookie.set("token", res.token);
            router.push("area-do-usuario")
            setInputs({...inputs, msg: ''});
        } else {
            setInputs({...inputs, msg: res.msg});
        };
    }

    const handleChangeInputs = (event: event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    return (
        <Layout title='Login'>
            <div className={styles.formulario}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} onSubmit={handleChangeForm}>
                    {Data.map((item, index) => 
                        <fieldset key={index}>
                            <label htmlFor={item.id}>{item.title}: </label>
                            <input type={item.type} id={item.id} name={item.id} placeholder={item.placeholder} onChange={handleChangeInputs}></input>
                        </fieldset>
                    )}
                    <button type='submit'>Logar</button>
                    <p>Ainda não possui uma conta? <Link href='http://localhost:3000/cadastro'>Cadastre-se</Link></p>
                    <p>{inputs.msg}</p>
                </form>
            </div>
        </Layout>
    )
}

export default Login;