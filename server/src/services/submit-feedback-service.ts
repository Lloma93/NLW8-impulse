// interface, quais dados eu preciso para o envio de um feedback

import { MailApater } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";


// camada da aplicação 
interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
       private feedbacksRepository: FeedbackRepository,
       private mailAdapter: MailApater
    ){}


    async execute(request: SubmitFeedbackServiceRequest) {
        // executa a submissao de um novo feedback
    const { type, comment, screenshot } = request;

    // regra campo existe
    if (!type) {
        throw new Error('Type is required')
    }
    
    if (!comment) {
        throw new Error('Type is required')
    }

    // realiza a validação do tipo do screenshot
    if (screenshot && !screenshot.startsWith('data:image/png;base64')){
        throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })
        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                         `<p>Tipo do feedback: ${type} </p>`,
                         `<p>Comentário: ${comment} </p>`,
                         `<p>Comentário: ${screenshot} </p>`,
                         ` <img src="${screenshot}" alt="image bug" />`,
                         `</div>`
                    ].join('\n')
        })
    }

}

// private feedbacksRepository: FeedbackRepository
// constructor(
//     feedbacksRepository: PrismaFeedabacksRepository =====> colocar um private diminuio mt o código
// ){
//     this.feedbacksRepository = feedbacksRepository
// }