import React from 'react';
import type { NextPage } from 'next'

import styles from '../../styles/contato.module.css'
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const Section: NextPage = () => {
    return(
        <>
            <section className={styles.section2}>
                <div className={styles.info}>
                    <BiIcons.BiMap className={styles.icon} />
                    <h3>Endereço</h3>
                    <p>25/13 Avenida Nova Novo Céu, 45Y 73J Inglaterra, Grã-Bretanha</p>
                </div>
                <div className={styles.info}>
                    <AiIcons.AiOutlineMail className={styles.icon} />
                    <h3>Central de Atendimento</h3>
                    <p>Central de atendimento rápido com 5 estrelas de satisfação dos clientes</p>
                    <p>+99 555 444 333</p>
                </div>
                <div className={styles.info}>
                    <BiIcons.BiMap className={styles.icon} />
                    <h3>Suporte eletrônico</h3>
                    <p>Sinta-se à vontade para nos escrever um e-mail ou usar nosso sistema de emissão de bilhetes eletrônicos</p>
                    <p>info@sell.com</p>
                    <p>support@sell.com</p>
                </div>
            </section>
        </>
    );
}

export default Section