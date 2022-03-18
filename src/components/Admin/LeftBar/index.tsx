import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { useContext, useRef } from "react";

import * as IoIcons from "react-icons/io";

import { AuthContext } from "../../../provider/auth";
import styles from "../../../styles/admin.module.css";
import Data from "../../Data/Admin";


const Leftbar: NextPage = () => {
    const { leftBar, setLeftBar } = useContext(AuthContext);
    const myRef = useRef<HTMLDivElement>();

    return (
        <>
            <div className={styles.leftBar}>
                <div className={styles.title}>
                    <button><IoIcons.IoMdMenu/></button>

                    <div className={styles.img}>
                        <Link href="http://localhost:3000/admin"><h1>JFSolu</h1></Link>
                    </div>
                </div>
                <div ref={myRef} className={styles.menu}>
                    {Data.map((item, index) =>
                        <div key={index} className={styles.leftBarLink}>
                            <h2>{item.h2}</h2>
                            <i>{item.icon}</i>
                            <a>{item?.title && <Link href="http://localhost:3000/admin">{item.title}</Link>}</a>
                        </div>
                    )}
                    <button className={styles.logout}>Sair</button>
                </div>

            </div>
        </>
    )
}

export default Leftbar;