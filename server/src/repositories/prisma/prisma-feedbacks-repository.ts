import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackCreateData} from "../feedbacks-repository";

export class PrismaFeedabacksRepository implements FeedbackRepository {

    // implementação das operações
   //  com o banco de dados
   //----- desacoplanto  e abstraindo o método create (ctrl + espaço // atalho)
//    async create(data: FeedbackCreateData) {
   async create({ type, comment, screenshot }: FeedbackCreateData ) {
    await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })
   }
}