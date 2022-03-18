import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from '@prisma/client';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default async function Login(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient();
    const KEY = '%%#$*0tufjcrifhin3o8qt24e@#$*%)RIf45ilskdyf834ir$#%R%9345eor8'

    try {
        if(req.method == 'POST'){
            const campos = JSON.parse(req.body);

            const login = await prisma.cadastro.findUnique({ 
                where: { 
                    email: campos.inputs.email 
                } 
            })

            if(login){
                if(bcrypt.compareSync(campos.inputs.password, login.password)){
                    res.status(201).json({token: jwt.sign({id: login.id}, KEY)})
                } else {
                    res.status(200).json({msg: 'Senha incorreta'})
                }
            } else {
                res.status(201).json({msg: 'Usuario incorreto'})
            }
        } else {
            res.status(404).json({err: `Method ${req.method} not found`});
        }
    } catch (err) {
        res.status(400).json({err});
    }
}