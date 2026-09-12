// Cloudflare Pages Function — RFQ form handler
// POST /rfq/submit → forward submission → redirect to thank-you page
export async function onRequestPost({ request, env }) {
  const redirect = () => Response.redirect(new URL('/rfq/thanks/', request.url), 302);
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // Forward to configured endpoint (Formspree / webhook / email service)
    const endpoint = env.FORM_WEBHOOK;
    if (endpoint) {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
    } else {
      // Fallback: log to console so submissions are never silently lost in dev
      console.log('[rfq submission]', JSON.stringify(data));
    }
    return redirect();
  } catch (e) {
    console.error('[rfq error]', e);
    return redirect();
  }
}
