import React from 'react';

import { useRouter } from "next/router";
import { useState } from "react";
import { createContext } from "react";
import { AuthContextType, Children, Cookies } from '../types/ContextType';

export const AuthContext = createContext({} as AuthContextType);
 
const AuthProvider = ({ children } : Children) => {
    const [user, setUser] = useState([{ name: '', email:'' }])
    const [leftBar, setLeftBar] = useState(false)

    const isAuthenticated = !!user;

    async function signIn(cookies: Cookies) {
        let logado = false;
        if(cookies && cookies.token){
            let res = await fetch('api/token', {
                method: 'POST',
                headers: {'Content-type':'aplication/json'},
                body: JSON.stringify({
                    cookies
                })
            }).then(res => res.json()).catch(err => console.error(err));
            console.log(res)

            if(!res.err && !res.message){
                setUser(res);
                logado = true;
                return logado;
            } else {
                logado = false;
                return logado;
            }
        } else {
            logado = false;
            return logado;
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser, signIn, leftBar, setLeftBar }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;