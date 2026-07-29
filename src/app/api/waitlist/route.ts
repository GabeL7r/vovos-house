import { NextRequest, NextResponse } from "next/server";
import { postWaitlistToSlack } from "@/lib/slack";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_KIDS = 8;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, city, numKids, kidAges } = body as Record<string, unknown>;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  if (typeof city !== "string" || city.trim().length === 0) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }
  if (typeof numKids !== "number" || !Number.isInteger(numKids) || numKids < 0 || numKids > MAX_KIDS) {
    return NextResponse.json({ error: "numKids must be an integer between 0 and " + MAX_KIDS }, { status: 400 });
  }
  if (
    !Array.isArray(kidAges) ||
    kidAges.length !== numKids ||
    !kidAges.every((age) => typeof age === "number" && Number.isInteger(age) && age >= 0 && age <= 17)
  ) {
    return NextResponse.json({ error: "kidAges must match numKids, each between 0 and 17" }, { status: 400 });
  }

  try {
    await postWaitlistToSlack({ email: email.trim(), city: city.trim(), numKids, kidAges });
  } catch (err) {
    console.error("Failed to post waitlist submission to Slack", err);
    return NextResponse.json({ error: "Could not submit right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
