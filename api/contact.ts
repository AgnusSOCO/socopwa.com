import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
  service?: string;
  source?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    const { firstName, lastName, email, phone, company, message, service, source } = formData;

    if (!firstName || !lastName || !email || !company || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    const slackMessage = {
      text: '🔔 New Contact Form Submission',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🔔 New Contact Form Submission',
            emoji: true
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${firstName} ${lastName}`
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`
            },
            {
              type: 'mrkdwn',
              text: `*Company:*\n${company}`
            },
            {
              type: 'mrkdwn',
              text: `*Phone:*\n${phone || 'Not provided'}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${message}`
          }
        }
      ]
    };

    if (service) {
      slackMessage.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Service Interest:*\n${service}`
        }
      });
    }

    if (source) {
      slackMessage.blocks.push({
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Source: ${source}`
          }
        ]
      });
    }

    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'An error occurred while processing your request. Please try again later.',
    });
  }
}
