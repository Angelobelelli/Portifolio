import emailjs from '@emailjs/browser';

// Configurações do EmailJS
const EMAIL_CONFIG = {
  serviceId: 'service_your_id', // Substitua pelo seu Service ID
  templateId: 'template_your_id', // Substitua pelo seu Template ID
  publicKey: 'your_public_key', // Substitua pela sua Public Key
};

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    message: data.message,
    to_name: 'Angelo Belelli',
    reply_to: data.email,
  };

  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
    
    if (response.status !== 200) {
      throw new Error('Falha no envio do email');
    }
    
    return response;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

// Função para inicializar o EmailJS (opcional, mas recomendada)
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.publicKey);
};