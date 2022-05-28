import express from 'express'
import { SubmitFeedbackService } from './services/submit-feedback-service';
import { PrismaFeedabacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodeMailderAdapter } from './adapters/nodemailder/nodemail-mail-adapter';

export const routes = express.Router()

  routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

      const prismaFeedabacksRepository = new PrismaFeedabacksRepository()
      const nodemailerMailAdapter = new NodeMailderAdapter()

      // exemplo inversão de dependência 
      const submitFeedbackService = new SubmitFeedbackService(
          prismaFeedabacksRepository, 
          nodemailerMailAdapter
        )
    
      await submitFeedbackService.execute({
          type,
          comment,
          screenshot
      })
      return res.status(201).send();
    });

    
// await transport.sendMail({
//     from: 'Equipe Feedback <oi@feedback.com>',
//     to: 'Palloma Dev <palloma.adolfi@gmail.com>',
//     subject: 'Novo feedback',
//     html: [
//          `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//          `<p>Tipo do feedback: ${type} </p>`,
//          `<p>Comentário: ${comment} </p>`,
//          `</div>`
//     ].join('\n')
// })
  //  return res.status(201).json({data: feedback});