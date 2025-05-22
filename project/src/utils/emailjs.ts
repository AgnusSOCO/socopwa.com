import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_2ji5yva';
const TEMPLATE_ID = 'template_y9e23kl';
const PUBLIC_KEY = 'ss4StGPi2x_epjRxS';

export const sendEmail = async (formData: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
};