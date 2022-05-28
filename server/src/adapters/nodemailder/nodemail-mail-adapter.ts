import { MailApater, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "82dd91de36d5f7",
      pass: "4a637e80c753e3"
    }
  });

export class NodeMailderAdapter implements MailApater {
    async sendMail({subject, body}: SendMailData ) {
        await transport.sendMail({
    from: 'Equipe Feedback <oi@feedback.com>',
    to: 'Palloma Dev <palloma.adolfi@gmail.com>',
    subject,
    html: body,
})
}
}