// test('sum 2+2', () => {
//     expect(2 +2).toBe(4)
// })

import { SubmitFeedbackService } from "./submit-feedback-service"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        // teste unitário não testa dependencia
          await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        // teste unitário não testa dependencia
          await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();

    });
    it('should not be able to submit a feedback without comment', async () => {
        // teste unitário não testa dependencia
          await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();

    });
    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        // teste unitário não testa dependencia
          await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example bug',
            screenshot: 'test.jpg'
        })).rejects.toThrow();

    });
});