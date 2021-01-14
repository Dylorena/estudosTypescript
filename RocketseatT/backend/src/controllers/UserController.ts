import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Diana',
    email: 'dianabsdt@gmail.com'
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail({
      to: { name: 'Deusenita', email: 'aloambev@dobraaproducaoai.com' },
      message: { subject: 'Bem-vindo ao sistema', content: 'Seja bem-vindo ao curso' }
    });

    return res.send();
  }
};