import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Database } from 'lucide-react';

export function Documentation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Developer Documentation</h1>
        
        <div className="space-y-12">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Contact Form Integration Guide</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Google Workspace Email Integration</h3>
              
              <div className="space-y-4">
                <p>To connect the contact form to your Google Workspace email:</p>
                
                <ol className="list-decimal list-inside space-y-2">
                  <li>Enable the Gmail API in Google Cloud Console</li>
                  <li>Create OAuth 2.0 credentials</li>
                  <li>Install required dependencies:
                    <pre className="bg-gray-800 text-white p-4 rounded-md mt-2">
                      npm install @google-cloud/local-auth googleapis
                    </pre>
                  </li>
                  <li>Implementation example:</li>
                </ol>

                <pre className="bg-gray-800 text-white p-4 rounded-md">
{`import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';

async function sendEmail(formData) {
  const auth = await authenticate({
    keyfilePath: 'path/to/credentials.json',
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
  });

  const gmail = google.gmail({ version: 'v1', auth });
  
  const message = {
    to: 'your-email@socopwa.com',
    subject: 'New Contact Form Submission',
    text: \`
      Name: \${formData.name}
      Email: \${formData.email}
      Message: \${formData.message}
    \`
  };

  // Encode the message
  const encodedMessage = Buffer.from(
    Object.entries(message)
      .map(([key, value]) => \`\${key}: \${value}\`)
      .join('\\n')
  ).toString('base64');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });
}`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Contact Form Endpoint</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
{`POST /api/contact

Request Body:
{
  "name": string,
  "email": string,
  "message": string
}

Response:
{
  "success": boolean,
  "messageId": string
}`}
                </pre>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Error Handling</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
{`{
  "error": string,
  "code": number,
  "details": object
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}