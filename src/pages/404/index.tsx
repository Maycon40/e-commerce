import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import styles from "./index.module.css"

const Custom404: NextPage = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <div className={styles.buttons}>
                <button onClick={() => router.back()}>Voltar</button>
                <button onClick={() => router.push('/')}>Pagina inicial</button>
            </div>
            <div className={styles.hexagonos}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
                <div className={styles.four}></div>
                <div className={styles.five}></div>
            </div>
        </div>
    )
}

export default Custom404;