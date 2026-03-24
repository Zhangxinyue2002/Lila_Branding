import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body as ContactRequest;

  // Validate input
  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: 'Missing required fields' });
    return;
  }

  try {
    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // Example with nodemailer:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.EMAIL_TO,
    //   subject: `New contact from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });

    // For now, just log and return success
    console.log('Contact form submission:', { name, email, message });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully. We will get back to you soon!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
