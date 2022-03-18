import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export default async function Cadastre(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  
  try{
    if(req.method == 'POST'){
      const campos = JSON.parse(req.body);
      if(campos.inputs.confirmPassword == campos.inputs.password){
        campos.inputs.password = bcrypt.hashSync(campos.inputs.password, 10);

        const cadastro = await prisma.cadastro.create({
          data: {
            name: campos.inputs.name,
            email: campos.inputs.email,
            password: campos.inputs.password,
            admin: false
          }
        });

        res.status(201).json({cadastro})
      } else {
        res.status(404).json({err: `The password and confirm password fields are different`});
      }
    } else {
      res.status(404).json({err: `Method ${req.method} not found`});
    };
  } catch (err) {
    res.status(400).json({err});
  };
};
