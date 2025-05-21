// api/quote.js - Serverless function to handle quote form submissions

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, lastName, email, hobby, address, 
      state, age, bestTime, policy, contribution, 
      ira401k, comments 
    } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !hobby || !address || 
        !state || !age || !bestTime || !policy || !comments) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }
    
    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please enter a valid email address' 
      });
    }
    
    // Validate age
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 120) {
      return res.status(400).json({ 
        success: false, 
        error: 'Age must be between 18 and 120' 
      });
    }
    
    // Validate conditional fields for specific policies
    if ((policy === 'annuities' || policy === 'iul') && 
        (!contribution || !ira401k)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Contribution method and IRA/401K selection are required for this policy type' 
      });
    }
    
    // In a production environment, you would:
    // 1. Store the quote request in a database
    // 2. Send an email notification
    // 3. Potentially trigger a CRM workflow
    
    /*
    // Example email sending with nodemailer:
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'quotes@nyohaki.com',  // Your quotes department email
      subject: `New Quote Request: ${policy} from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Policy Type:</strong> ${policy}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${state}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
        <p><strong>Hobby:</strong> ${hobby}</p>
        ${policy === 'annuities' || policy === 'iul' ? `
          <p><strong>Contribution Method:</strong> ${contribution}</p>
          <p><strong>IRA/401K:</strong> ${ira401k}</p>
        ` : ''}
        <p><strong>Additional Comments:</strong> ${comments}</p>
      `,
    });
    */
    
    // For now, we'll just log the submission and return success
    console.log('Quote request received:', { 
      firstName, lastName, email, policy 
    });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}
