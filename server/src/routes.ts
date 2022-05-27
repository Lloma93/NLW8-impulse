import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "82dd91de36d5f7",
      pass: "4a637e80c753e3"
    }
  });

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
})

await transport.sendMail({
    from: 'Equipe Feedback <oi@feedback.com>',
    to: 'Palloma Dev <palloma.adolfi@gmail.com>',
    subject: 'Novo feedback',
    html: [
         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
         `<p>Tipo do feedback: ${type} </p>`,
         `<p>Comentário: ${comment} </p>`,
         `</div>`
    ].join('\n')
})
     return res.status(201).json({data: feedback});
})