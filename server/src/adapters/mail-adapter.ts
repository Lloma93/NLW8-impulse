export interface SendMailData {
    subject: string;
    body: string;
}

export interface MailApater{
    sendMail: ( data: SendMailData) => Promise<void>;
}