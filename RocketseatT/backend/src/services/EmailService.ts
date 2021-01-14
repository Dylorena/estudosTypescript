interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  content: string;
  attachment?: string[];
  // o "?" garenate que o attachment será opcional.
  // Por serem vários teremos então um array, existem duas formas de representar como array
  // attachment?: Array<string>; ou string[]
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendEmail(request: IMessageDTO): void;
}

class EmailService {
  sendEmail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}.`)
  }
}

export default EmailService;