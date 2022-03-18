import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

const Mensage = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    type Campos = {
        inputs: {
            name: string,
            lastName: string,
            email: string,
            mensage: string
        }
    }

    const campos: Campos = JSON.parse(req.body);
    const html = `
        Dados do cliente:

        Nome: ${campos.inputs.name},<br/>
        SobreNome: ${campos.inputs.lastName},<br/>
        Email: ${campos.inputs.email},<br/>
        Mensagem: ${campos.inputs.mensage}
    `;

    const tranporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.LOGIN, pass: process.env.SENHA}
    });

    tranporter.sendMail({
        from: `Maycon <${process.env.LOGIN}>`,
        to: process.env.LOGIN,
        subject: `Contato do cliente ${campos.inputs.name}`,
        html
    })

    res.status(201).json({campos: campos.inputs})
}

export default Mensage