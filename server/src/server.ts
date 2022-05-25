import express from 'express'
import { prisma } from './prisma';

const app = express();

//não esquecer antes das rotas, sem ele não interpreta o JSON 
app.use(express.json());

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
app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
})
     return res.status(201).json({data: feedback});
})


app.listen(5000, () => {
    console.log('HTTP server running!');
})

