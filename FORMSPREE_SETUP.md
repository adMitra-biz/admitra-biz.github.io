# Formspree Setup Instructions

Your contact form has been configured to use Formspree for handling form submissions. Follow these steps to complete the setup:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" and create a free account
3. The free plan allows 50 submissions per month, which should be sufficient for most use cases

## Step 2: Create a New Form

1. After signing up, click "New Form" on your dashboard
2. Give your form a name (e.g., "AdMitra Contact Form")
3. Copy the form endpoint URL - it will look like: `https://formspree.io/f/xpzgkjqw`

## Step 3: Update Your Contact Form

1. Open `contact.html`
2. Find line 204 where it says: `action="https://formspree.io/f/YOUR_FORM_ID"`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID from step 2

## Step 4: Configure Form Settings (Optional)

In your Formspree dashboard, you can:

- Set up email notifications to receive submissions
- Configure auto-reply messages
- Set up spam protection
- Add custom thank you pages

## Step 5: Test Your Form

1. Deploy your changes to GitHub Pages
2. Visit your contact page and submit a test form
3. Check your Formspree dashboard to see if the submission appears

## Form Fields Included

Your form submits the following fields:

- `name` - Full Name
- `email` - Work Email
- `phone` - Phone Number
- `company` - Company Name
- `message` - Optional Message

## Troubleshooting

- If submissions aren't appearing, check your browser's developer console for errors
- Make sure your form action URL exactly matches your Formspree endpoint
- Verify that your site is deployed and accessible

## Upgrade Options

If you need more than 50 submissions per month, Formspree offers paid plans starting at $10/month for unlimited submissions.

---

**Note:** Remember to delete this file before deploying to production, or add it to your `.gitignore` file.
