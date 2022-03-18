import React from 'react';
import type { NextPage } from 'next'

import styles from '../../styles/contato.module.css'

const Section: NextPage = () => {
    return(
        <>
            <section className={styles.section}>
                <h1>Como podemos te ajudar hoje?</h1>
            </section>
        </>
    );
}

export default Section