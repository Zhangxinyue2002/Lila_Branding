import type { NextApiRequest, NextApiResponse } from 'next';

interface NewsletterRequest {
  email: string;
}

interface NewsletterResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsletterResponse>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { email } = req.body as NewsletterRequest;

  // Validate email
  if (!email || !email.includes('@')) {
    res.status(400).json({ success: false, message: 'Invalid email address' });
    return;
  }

  try {
    // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
    // Example with Mailchimp:
    // const mailchimp = require("@mailchimp/mailchimp_marketing");
    // mailchimp.setConfig({
    //   apiKey: process.env.MAILCHIMP_API_KEY,
    //   server: process.env.MAILCHIMP_SERVER_PREFIX,
    // });
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: "pending",
    // });

    // For now, just log and return success
    console.log('Newsletter subscription:', email);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed! Check your email for a welcome message.',
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe' });
  }
}
