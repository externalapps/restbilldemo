// Simple email API endpoint
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, text, html } = req.body;

    // For now, just log the email (you can integrate with any email service)
    console.log('📧 EMAIL TO SEND:');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Text:', text);
    console.log('HTML:', html);

    // You can integrate with:
    // 1. SendGrid (free tier available)
    // 2. Mailgun (free tier available)
    // 3. Resend (free tier available)
    // 4. Or just use console.log for now

    return res.status(200).json({ 
      success: true, 
      message: 'Email logged successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
}
