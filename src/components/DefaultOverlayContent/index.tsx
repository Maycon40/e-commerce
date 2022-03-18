import { NextPage } from 'next';
import React from 'react';

import Image from 'next/image';

import styles from './index.module.css';

interface Props {
    label: string;
    description: string;
    image: string;
}

const DefaultOverlayContent: NextPage<Props> = ({ label, description, image }) => {
    console.log(label, description, image)
    return (
        <div className={styles.overlayContent}>
            <span className={styles.pelicula}></span>

            <header>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </header>

            <div className={styles.buttons}>
                <button>Custom Order</button>
                <button className={styles.white}>Existing Inventory</button>
            </div>
        </div>
    );
}

export default DefaultOverlayContent;