import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const emailBody = [
    "NEW CONTACT FORM SUBMISSION",
    "===========================",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : "",
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
    "",
    `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CST`,
  ].filter(Boolean).join("\n");

  console.log("=== CONTACT FORM RECEIVED ===");
  console.log(`To: apply@goodandplentyfoundation.org`);
  console.log(`Subject: Website Contact - ${data.subject}`);
  console.log(emailBody);
  console.log("=== END CONTACT ===");

  return NextResponse.json({ success: true });
}
