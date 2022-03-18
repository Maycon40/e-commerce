import React from 'react';
import { NextPage } from "next";

import * as IoIcons from "react-icons/io";

import styles from "./index.module.css";

const Navbar: NextPage = () => {    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <a href='#'>Produtos</a>
                <a href='#'>Usuários</a>
                <a href='#' className={styles.active}>Admin</a>
            </div>

            <div className={styles.navbarRight}>
                <a href='#'>
                    <IoIcons.IoIosSearch/>
                </a>
                <a href='#'>
                    <IoIcons.IoIosClock/>
                </a>
                <a href='#'>
                    <IoIcons.IoIosPerson className={styles.user}/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;