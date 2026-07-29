export interface WaitlistSubmission {
  email: string;
  city: string;
  numKids: number;
  kidAges: number[];
}

export async function postWaitlistToSlack(submission: WaitlistSubmission) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL is not configured");
  }

  const { email, city, numKids, kidAges } = submission;
  const agesText = numKids === 0 ? "—" : kidAges.map((age) => `${age}yo`).join(", ");

  const payload = {
    text: `New Vovo's House waitlist signup: ${email}`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "🏡 New waitlist signup", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Email:*\n${email}` },
          { type: "mrkdwn", text: `*Wants us to launch in:*\n${city}` },
          { type: "mrkdwn", text: `*Kids:*\n${numKids}` },
          { type: "mrkdwn", text: `*Ages:*\n${agesText}` },
        ],
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Slack webhook responded with ${res.status}: ${body}`);
  }
}
