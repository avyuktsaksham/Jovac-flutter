# Serverless Functions for Portfolio

This directory contains serverless functions used by the portfolio website.

## `send-email.js`

This function handles submissions from the contact form.

### Endpoint

The function is typically accessed via a rewritten URL:

-   **`/api/send-email`**

This is configured in `netlify.toml` (for Netlify deployments) or would be the standard if using Vercel with the function directly in an `/api` directory.

### Functionality

1.  Receives `name`, `email`, and `message` from the contact form (POST request).
2.  Performs basic server-side validation.
3.  **Currently simulates email sending.** For actual email sending, a service like SendGrid is intended.

### Setup for Actual Email Sending (e.g., SendGrid)

1.  **Install Dependencies:**
    If you haven't already, navigate to this `functions/` directory and install the required email library:
    ```bash
    npm install @sendgrid/mail
    # or
    # yarn add @sendgrid/mail
    ```
    This will add it to the `dependencies` in `functions/package.json`.

2.  **Configure Environment Variable:**
    Set the `SENDGRID_API_KEY` environment variable in your deployment platform (e.g., Netlify, Vercel). This key is obtained from your SendGrid account.

3.  **Update `send-email.js`:**
    -   Uncomment the `require('@sendgrid/mail')` line.
    -   Uncomment the `sgMail.setApiKey(process.env.SENDGRID_API_KEY);` line.
    -   Uncomment the `await sgMail.send(msg);` line to enable actual email dispatch.
    -   Ensure your "From" email address (`from` field in `msg`) is a verified sender in your SendGrid account. Often, you cannot use the user's submitted email directly in the `from` field due to anti-spam (DMARC) policies. Instead, use an email address you own and have verified with SendGrid, and set the `replyTo` field to the user's email.

### Local Development

-   If using Netlify Dev CLI (`netlify dev`), it will typically run the functions locally and apply the redirect rules from `netlify.toml`.
-   Ensure any required environment variables (like `SENDGRID_API_KEY` for actual sending) are available in your local environment if testing the full functionality (e.g., via a `.env` file that `netlify dev` can pick up).

### Dependencies

Any Node.js module dependencies for functions in this directory should be listed in `functions/package.json`. Run `npm install` or `yarn install` within this directory if you add new dependencies.
