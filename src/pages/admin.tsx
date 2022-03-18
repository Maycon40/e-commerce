import React from 'react';
import type { GetServerSideProps, NextPage } from "next";
import PropTypes from 'prop-types';

import Cookies from "js-cookie";

import { useContext } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from '../components/Layout';
import style from '../styles/Home.module.css';
import styles from '../styles/admin.module.css';

import { AuthContext } from "../provider/auth";
import Data from '../components/Data/Login';
import LeftBar from '../components/Admin/LeftBar';
import Navbar from '../components/Admin/Navbar';
import Main from '../components/Admin/Main';

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
    let children = 'Não está logado';
    const token = context.req.cookies.token

    if(token){
        children = 'Está logado';
    };

    return {
        props: {
            children
        }
    }
}

const Admin: NextPage = ({ children }) => {
    const [inputs, setInputs] = useState<Inputs>({msg: ''});
    const [user, setUser] = useState<[]>([])

    const { signIn } = useContext(AuthContext)

    const router = useRouter();

    useEffect(() => {
        const rodar = async () => {
            let res = await fetch('api/admin', {
                method: 'GET',
                headers: {'Content-type':'aplication/json'}
            }).then(res => res.json()).catch(err => console.error(err));
            setUser(res.result || []);
        }

        rodar();
    }, [])

    const handleChangeForm = async (event: {
        preventDefault: () => void
    }) => {
        event.preventDefault();
        let res = await fetch('api/admin', {
            method: 'POST',
            headers: {'Content-type':'aplication/json'},
            body: JSON.stringify({
                inputs
            })
        }).then(res => res.json()).catch(err => console.error(err));
        console.log(res)
        
        if(!res.msg && res.token){
            Cookies.set("token", res.token);
            router.reload();
            setInputs({...inputs, msg: ''});
        } else {
            setInputs({...inputs, msg: res.msg});
        };
    }

    const handleChangeInputs = (event: event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    if(children == 'Não está logado'){
        const cookie = Cookies.get();

        const logado = signIn(cookie);

        if(!logado){
            children == 'Não está logado';
        }
    }

    return (
        <Layout title='Admin'>
            { children == "Está logado" ?
                <div className={styles.container}>
                    <LeftBar/>
                    <Navbar/>
                    <Main/>
                </div>
            :
            <div className={style.formulario}>
                <h1 className={style.title}>Admin</h1>
                <form className={style.form} onSubmit={handleChangeForm}>
                    {Data.map((item, index) => 
                        <fieldset key={index}>
                            <label htmlFor={item.id}>{item.title}: </label>
                            <input type={item.type} id={item.id} name={item.id} placeholder={item.placeholder} onChange={handleChangeInputs}></input>
                        </fieldset>
                    )}
                    <button type='submit'>Logar</button>
                    <p>{inputs.msg}</p>
                </form>
            </div>
            }
        </Layout>
    )
}

export default Admin