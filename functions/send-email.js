// Placeholder for SendGrid (or similar) email sending integration
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// NOTE: SENDGRID_API_KEY would need to be set as an environment variable in the deployment platform.
// NOTE: To use @sendgrid/mail, you would need to install it: npm install @sendgrid/mail or yarn add @sendgrid/mail
// and include a package.json in the functions directory or project root.

exports.handler = async function(event, context) {
    // Log the event for debugging (especially for HTTP method and body)
    // console.log('Received event:', JSON.stringify(event, null, 2));

    // Default to an error if the method is not POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ error: 'Method Not Allowed' }),
            headers: { 'Allow': 'POST' }
        };
    }

    let payload;
    try {
        payload = JSON.parse(event.body);
    } catch (error) {
        console.error('Error parsing JSON body:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Bad request: Invalid JSON format.' })
        };
    }

    const { name, email, message } = payload;

    // Basic server-side validation
    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing required fields: name, email, and message are required.' })
        };
    }

    // Log API key presence (it will be undefined if not set, which is expected for now)
    console.log('Attempting to use SendGrid API Key (should be undefined locally unless set):', process.env.SENDGRID_API_KEY);

    // Construct the email message (conceptual)
    const msg = {
        to: 'kashyap.manas.glams@gmail.com', // Your email address
        from: 'noreply@yourportfolio.com', // A verified sender on SendGrid (or your own email if verified)
        replyTo: email, // User's email from the form
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
               <hr>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    // Simulate email sending
    console.log('Simulating email sending with SendGrid...');
    console.log('Email data:', msg);

    try {
        // Placeholder for actual email sending:
        // await sgMail.send(msg);
        // console.log('Email would have been sent successfully.');

        // For now, just return a success message
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Server: Form data received. Email sending simulated successfully!' })
        };
    } catch (error) {
        console.error('Error in simulated email sending:', error);
        // If sgMail.send(msg) was used and failed:
        // if (error.response) {
        //     console.error(error.response.body);
        // }
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error during simulated email sending.' })
        };
    }
};
