import { Resend } from 'resend';

const SERVICE_LABELS: Record<string, string> = {
  'site-work': 'Site Work',
  'flat-work': 'Flat Work',
  shell: 'Shell (Footers / Stem Wall / Tie Beam)',
  masonry: 'Masonry',
  'beam-forming': 'Beam Forming',
  framing: 'Framing',
  other: 'Other / Not Sure',
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey || !toEmail) {
    console.error('Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL');
    return Response.json(
      { error: 'The contact form is not configured yet. Please call (239) 984-2678 instead.' },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !phone || !email || !message) {
    return Response.json({ error: 'Please fill out all required fields.' }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const serviceLabel = SERVICE_LABELS[service] || service || 'Not specified';

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Channel Mark Shell Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New quote request from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Scope:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Project Details:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Something went wrong sending your message. Please call us instead.' }, { status: 502 });
    }
  } catch (err) {
    console.error('Contact form send failed:', err);
    return Response.json({ error: 'Something went wrong sending your message. Please call us instead.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
