// Single source of truth for the Etsy listing URL.
// Replace this once the listing is live and every CTA across the site updates.
export const ETSY_URL = "https://edennelife.etsy.com";

// MailerLite account ID (Universal script is loaded in __root.tsx)
export const MAILERLITE_ACCOUNT = "2352996";

// MailerLite embedded form endpoint (form "Lead Magnet — 5-Day Reset").
// Submitting here adds the subscriber to MailerLite, assigns the group
// configured on the form, and triggers the automation.
export const MAILERLITE_FORM_ACTION =
  "https://assets.mailerlite.com/jsonp/2352996/forms/189082540247614883/subscribe";