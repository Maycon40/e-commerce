import React from 'react';
import type { NextPage } from 'next'

import { useState } from 'react';

import style from '../../styles/Home.module.css'
import styles from '../../styles/contato.module.css'
import Data from '../Data/Contato'

const Section: NextPage = () => {
    const [inputs, setInputs] = useState<object>({});

    type event = {
        target: { 
            value: string;
            name: string;
        };
    }

    const handleChangeInputs = (event: event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleChangeForm = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        let res = await fetch('api/mensage', {
            method: 'POST',
            headers: {'Content-type':'aplication/json'},
            body: JSON.stringify({
                inputs
            })
        }).then(res => res.json()).catch(err => console.error(err));
    }

    return(
        <>
            <section className={styles.section3}>
                <div className={style.formulario}>
                    <h2>Formulario de contato</h2>
                    <form className={style.form} onSubmit={handleChangeForm}>
                        {Data.map((item, index) => 
                            <fieldset key={index}>
                                <label htmlFor={item.id}>{item.title}: </label>
                                <input type={item.type} id={item.id} name={item.id} placeholder={item.placeholder} onChange={handleChangeInputs} required={true}></input>
                            </fieldset>
                        )}
                        <fieldset>
                            <label htmlFor='mensage'>Mensagem</label><br/>
                            <textarea id='mensage' name='mensage' onChange={handleChangeInputs} required={true}></textarea>
                        </fieldset>
                        <button type='submit' >Enviar sua mensagem</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Section