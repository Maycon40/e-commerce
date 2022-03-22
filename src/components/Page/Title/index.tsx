import React from 'react';
import { NextPage } from "next";
import ReactDOM from 'react-dom';

import styles from './index.module.css'

interface Props {
    children: string;
}

const delay = (amount = 100) => new Promise(resolve => setTimeout(resolve, amount));

const Title: NextPage<Props> = ({ children }) => {
    function typeWrite(){        
        const textoArray = children.split("");
        children = ""
        
        textoArray.forEach((letra, index) => {
            setTimeout(() => {
                children += letra;
                const element = <h1 className={styles.title}>{children}</h1>;
                ReactDOM.render(element, document.getElementById('h1'));
            }, 100 * index)
        })
    }

    typeWrite()

    return (
        <div className={styles.container}>
            <h1 id="h1">{children}</h1>
        </div>
    )
}

export default Title;