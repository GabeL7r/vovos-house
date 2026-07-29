export interface PriceSensitivity {
  tooCheap: number;
  bargain: number;
  gettingExpensive: number;
  tooExpensive: number;
}

export interface WaitlistSubmission {
  email: string;
  city: string;
  numKids: number;
  kidAges: number[];
  priceSensitivity: PriceSensitivity | null;
}

export async function postWaitlistToSlack(submission: WaitlistSubmission) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL is not configured");
  }

  const { email, city, numKids, kidAges, priceSensitivity } = submission;
  const agesText = numKids === 0 ? "None" : kidAges.map((age) => `${age}yo`).join(", ");

  const blocks: object[] = [
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
  ];

  if (priceSensitivity) {
    blocks.push({
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Cut corners on safety below:*\n$${priceSensitivity.tooCheap}/night` },
        { type: "mrkdwn", text: `*A great find at:*\n$${priceSensitivity.bargain}/night` },
        { type: "mrkdwn", text: `*Gives them pause at:*\n$${priceSensitivity.gettingExpensive}/night` },
        { type: "mrkdwn", text: `*Off the table above:*\n$${priceSensitivity.tooExpensive}/night` },
      ],
    });
  }

  const payload = {
    text: `New Vovo's House waitlist signup: ${email}`,
    blocks,
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
