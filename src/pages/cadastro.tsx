import React from 'react';
import type { NextPage } from "next"

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import Data from '../components/Data/Cadastro'

import { useState } from "react"
import Link from "next/link"

const Cadastro: NextPage = () => {
    const [inputs, setInputs] = useState<object>({});

    const handleChangeForm = async (event: {preventDefault: () => void}) => {
        event.preventDefault();
        let res = await fetch('api/cadastre', {
            method: 'POST',
            headers: {'Content-type':'aplication/json'},
            body: JSON.stringify({
                inputs
            })
        }).then(res => res.json()).catch(err => console.error(err));
    }

    type event = {
        target: { 
            value: string, 
            name: string 
        }
    }

    const handleChangeInputs = (event: event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    return (
        <Layout title='Cadastro'>
            <div className={styles.formulario}>
                <h1 className={styles.title}>Cadastro</h1>
                <form className={styles.form} onSubmit={handleChangeForm}>
                    {Data.map((item, index) => 
                        <fieldset key={index}>
                            <label htmlFor={item.id}>{item.title}: </label>
                            <input type={item.type} id={item.id} name={item.id} placeholder={item.placeholder} onChange={handleChangeInputs} required={true}></input>
                        </fieldset>
                    )}
                    <button type='submit'>Cadastrar</button>
                    <p>Já possui uma conta? <Link href='http://localhost:3000/login'>Faça Login</Link></p>
                </form>
            </div>
        </Layout>
    )
}

export default Cadastro;