import express from 'express'
import { routes } from './routes';

const app = express();
// usar o aruivo routes 
app.use(express.json());
app.use(routes)

//não esquecer antes das rotas, sem ele não interpreta o JSON 

// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "82dd91de36d5f7",
//       pass: "4a637e80c753e3"
//     }
//   });

app.listen(5000, () => {
    console.log('HTTP server running!');
})



// // app.get('/users', (req, res) => {
// // // app.get('/users', (request, response) => {
// //     return res.send('Hello World')
// // })

// // salvando um feedback na tabela de feedbacks
// app.post('/feedbacks', (req, res) => {
//     // // console.log(req.body)

//     // // trocar console pelo prima
//     // prisma.feedback.create({
//     //     //infos do dado
//     //     data: {
//     //         type: req.body.type,
//     //         comment: req.body.comment,
//     //         screeshot: req.body.Screenshot
//     //     }
//     //     // select dados de criação
//     // })

//     // desestruturando 
//     const { type, comment, screenshot } = req.body;
//     prisma.feedback.create({
//         data: {
//             type: type,
//             comment,
//             screenshot
//         }
//     })


// // app.get('/users', (request, response) => {
//     return res.send('Hello feedabcks')
// })

// transformando a função para aguardar a resposta
// esperar a operação do banco de dados ser finalizada para devolver uma resposta 

// mudou de arquivo
// app.post('/feedbacks', async (req, res) => {
//     const { type, comment, screenshot } = req.body;
//     const feedback = await prisma.feedback.create({
//         data: {
//             type,
//             comment,
//             screenshot
//         }
// })

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
//      return res.status(201).json({data: feedback});
// })


