import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from '@prisma/client';

import jwt from 'jsonwebtoken';

export default async function Token(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient();

    //try{
        if(req.method == "POST"){
            const campos = JSON.parse(req.body);

            let { id } : any = jwt.verify(campos.cookies.token, "%%#$*0tufjcrifhin3o8qt24e@#$*%)RIf45ilskdyf834ir$#%R%9345eor8");

            const result = await prisma.cadastro.findUnique({ where: { id } });

            res.status(201).json({...result});
        } else {
            res.status(404).json({err: `Method ${req.method} not allowed`});
        }
    /*} catch (err) {
        res.status(400).json(err);
    }*/
}