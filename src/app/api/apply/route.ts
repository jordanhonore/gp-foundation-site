import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  // Build email body from application data
  const lines = [
    "NEW CARE SCHOLARSHIP APPLICATION",
    "================================",
    "",
    "APPLICANT INFORMATION",
    `Name: ${data.firstName} ${data.lastName}`,
    `Date of Birth: ${data.dob}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Preferred Contact: ${data.preferredContact}`,
    "",
    "ADDRESS",
    `${data.address}`,
    `${data.city}, ${data.state} ${data.zip}`,
    `County: ${data.county}`,
    "",
    "HOUSEHOLD INFORMATION",
    `Household Size: ${data.householdSize}`,
    `Annual Household Income: ${data.income}`,
    `Employment Status: ${data.employment}`,
    `Insurance Status: ${data.insurance}`,
    "",
    "APPLICANT TYPE",
    `Applying For: ${data.applicantType}`,
    data.childName ? `Child/Youth Name: ${data.childName}` : "",
    data.childAge ? `Child/Youth Age: ${data.childAge}` : "",
    data.relationship ? `Relationship: ${data.relationship}` : "",
    "",
    "MENTAL HEALTH NEEDS",
    `Primary Concerns: ${(data.concerns || []).join(", ")}`,
    data.otherConcern ? `Other: ${data.otherConcern}` : "",
    `Currently in Crisis: ${data.inCrisis}`,
    `Previous Therapy: ${data.previousTherapy}`,
    "",
    "THERAPIST PREFERENCES",
    data.genderPref ? `Gender Preference: ${data.genderPref}` : "Gender Preference: No preference",
    data.languagePref ? `Language: ${data.languagePref}` : "",
    data.culturalPref ? `Cultural Considerations: ${data.culturalPref}` : "",
    "",
    "ADDITIONAL INFORMATION",
    data.referralSource ? `How They Heard About Us: ${data.referralSource}` : "",
    data.additionalInfo ? `Additional Info: ${data.additionalInfo}` : "",
    "",
    "CONSENT & AGREEMENTS",
    `Information is Truthful: ${data.consentTruthful ? "Yes" : "No"}`,
    `Consent to Contact: ${data.consentContact ? "Yes" : "No"}`,
    `Consent to Confidentiality Policy: ${data.consentConfidential ? "Yes" : "No"}`,
    "",
    `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CST`,
  ].filter(Boolean);

  const emailBody = lines.join("\n");

  // Build mailto fallback — in production, integrate with an email service
  // For now, we log and return success so the form works immediately
  console.log("=== APPLICATION RECEIVED ===");
  console.log(`To: apply@goodandplentyfoundation.org`);
  console.log(`Subject: Care Scholarship Application - ${data.firstName} ${data.lastName}`);
  console.log(emailBody);
  console.log("=== END APPLICATION ===");

  // Send via fetch to an email API (e.g., Resend, SendGrid, Mailgun)
  // When ready, add your email service integration here:
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "applications@goodandplentyfoundation.org",
  //     to: "apply@goodandplentyfoundation.org",
  //     subject: `Care Scholarship Application - ${data.firstName} ${data.lastName}`,
  //     text: emailBody,
  //   }),
  // });

  return NextResponse.json({ success: true });
}
