import React from "react";
import { NextPage } from "next";

import * as CgIcons from "react-icons/cg";

import styles from "./index.module.css"
import Data from "../../Data/Admin/Main"
import Cards from "../../Data/Admin/Cards";
import Charts from "../Charts";

const Main: NextPage = () => {
    return (
        <main>
            <div className={styles.mainContainer}>
                <div className={styles.mainTitle}>
                    <div className={styles.mainGreeting}>
                        <h1>Olá julio</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className={styles.mainCards}>
                    {Data.map((item, index) => 
                        <div key={index} className={styles.card}>
                            {item.icon}
                            <div className={styles.cardInner}>
                                <p className={styles.textPrimaryP}>{item.title}</p>
                                <span className={styles.textTitle}>{item.number}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.charts}>
                    <div className={styles.chartsLeft}>
                        <div className={styles.chartsLeftTitle}>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Brasília, Distrito Federal, BR</p>
                            </div>
                            <CgIcons.CgDollar/>
                        </div>
                        <Charts/>
                    </div>

                    <div className={styles.chartsRight}>
                        <div className={styles.chartsRightTitle}>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Brasília, Distrito Federal, BR</p>
                            </div>
                            
                        </div>

                        <div className={styles.chartsRightCards}>
                            {Cards.map((item, index) => 
                                <div key={index} className={item.style}>
                                    <h1>{item.title}</h1>
                                    <p>R$ {item.money.toFixed(2)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;