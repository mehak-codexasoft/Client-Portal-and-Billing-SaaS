import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  firm?: string;
  clients?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory store for demo purposes. Swap for a DB / CRM / email service later.
const leads: (ContactPayload & { receivedAt: string })[] = [];

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";

  if (!email || !emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  const lead = {
    name: body.name?.trim() || "",
    email,
    firm: body.firm?.trim() || "",
    clients: body.clients?.trim() || "",
    message: body.message?.trim() || "",
    receivedAt: new Date().toISOString(),
  };

  leads.push(lead);
  // Visible in the server console so you can confirm submissions land.
  console.log("[contact] new demo request:", lead);

  return NextResponse.json(
    { ok: true, message: "Thanks — we'll be in touch shortly." },
    { status: 200 }
  );
}
