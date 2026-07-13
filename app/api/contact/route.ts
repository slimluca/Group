import { NextResponse } from "next/server";

const topics = new Set(["General", "Correction", "Country suggestion", "Partnership", "Media", "Technical issue"]);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid message payload." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = clean(payload.name);
  const email = clean(payload.email);
  const subject = clean(payload.subject);
  const topic = topics.has(clean(payload.topic)) ? clean(payload.topic) : "General";
  const message = clean(payload.message, 4000);

  if (!name || !email || !subject || message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid name, email, subject, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@doghavengroup.com";
  if (!apiKey) {
    return NextResponse.json({ error: "Message delivery is not configured yet." }, { status: 503 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Dog Haven Group <website@doghavengroup.com>",
      to,
      reply_to: email,
      subject: `[Dog Haven Group] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    })
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Message delivery failed. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function clean(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
