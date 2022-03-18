import React from 'react';
import type { NextPage } from 'next';

import styles from './index.module.css'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Data from '../../Data/Menu';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import { useState } from 'react';

const Menu: NextPage = () => {
    const [response, setResponse] = useState(false)
    const [token, setToken] = useState<any>(null)

    const router = useRouter();
    const cookies = cookie.get();

    const sair = () => {
        cookie.remove('token')
        router.push('/login')
    }

    useEffect(() => {
        setToken(cookies.token)
    }, [])

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logos}>
                    <Image src='/logo.png' width={30} height={30}></Image>
                    <p><Link href='http://localhost:3000/'>SITE</Link></p>
                </div>
                <ul className={response ? styles.navbarActive : styles.navbar}>
                    {Data.map((item, index) =>
                        item.path == '/area-do-usuario' && !token ?
                        <span key={index} className={styles.none}></span>
                        : item.path == '/login' && token || item.path == '/cadastro' && token ?
                        <span key={index} className={styles.none}></span>
                        :
                        <li key={index}><Link href={item.link}><a className={router.pathname === item.path ? styles.principal : styles.e}>{item.title}</a></Link></li>
                    )}

                    { token &&
                        <button onClick={sair}>Sair</button>
                    }
                </ul>
                <div className={response ? styles.responsiveActive : styles.responsive} onClick={() => setResponse(!response)}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </nav>
        </header>
    )
}

export default Menu;