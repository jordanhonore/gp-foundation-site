import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Apply for the G&P Foundation Care Scholarship. Free, confidential mental health support for Fort Bend and Harris County residents.",
};

export default function GetHelpPage() {
  return (
    <>
      <PageHero
        title="Get Help"
        subtitle="You don&apos;t have to carry this alone. We&apos;re here."
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-lg text-warm-gray leading-relaxed">
            The Care Scholarship connects individuals and families with licensed
            therapists &mdash; at no cost to you. Whether you&apos;re navigating
            grief, anxiety, depression, postpartum challenges, or simply feeling
            overwhelmed, our program is designed to remove the barriers that keep
            people from getting the help they deserve. Everything is
            confidential, and it&apos;s completely free to apply.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            Am I Eligible?
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10" />

          <ul className="mb-10">
            {[
              "Reside in Fort Bend or Harris County, Texas",
              "Household income at or below 200% of the Federal Poverty Guidelines",
              "Experiencing a mental health challenge such as depression, anxiety, trauma, grief, or family conflict",
              "Postpartum mothers experiencing perinatal mood disorders (priority consideration)",
              "Youth ages 12–18 experiencing trauma or behavioral challenges (priority consideration)",
            ].map((item) => (
              <li
                key={item}
                className="py-3 border-b border-light-warm pl-8 relative text-warm-gray"
              >
                <span className="absolute left-0 text-terracotta font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-deep-brown mb-4">
            What You&apos;ll Need to Apply
          </h3>
          <ul className="mb-6">
            {[
              "Proof of residency (utility bill, lease agreement, or ID with Fort Bend/Harris County address)",
              "Income verification (most recent tax return, pay stubs, or benefit letter)",
              "Brief description of your current mental health needs",
            ].map((item) => (
              <li
                key={item}
                className="py-3 border-b border-light-warm pl-8 relative text-warm-gray"
              >
                <span className="absolute left-0 text-terracotta font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-warm-gray italic text-sm">
            Your information is kept strictly confidential. We never share your
            personal details with anyone outside of the clinical care team
            assigned to your case.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                num: "1",
                title: "Apply Online",
                desc: "Complete our secure application form below. It takes about 10–15 minutes.",
              },
              {
                num: "2",
                title: "Verification",
                desc: "Our team reviews your application and verifies eligibility within 5–7 business days.",
              },
              {
                num: "3",
                title: "Matching",
                desc: "Once approved, we match you with a licensed therapist based on your needs and preferences.",
              },
              {
                num: "4",
                title: "Begin Healing",
                desc: "Your therapy sessions begin. The Foundation pays your therapist directly — you pay nothing.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 bg-terracotta text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-deep-brown mb-2">
                  {step.title}
                </h3>
                <p className="text-warm-gray text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            Care Scholarship Application
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-4" />
          <p className="text-center text-warm-gray mb-10">
            All fields marked with <span className="text-terracotta">*</span>{" "}
            are required. Your information is 100% confidential.
          </p>
          <ApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10" />

          {[
            {
              q: "How much does this cost me?",
              a: "Nothing. The Care Scholarship covers the full cost of your therapy sessions. There are no co-pays, hidden fees, or bills sent to your home.",
            },
            {
              q: "How many sessions will I receive?",
              a: "Each Care Scholarship covers 8 to 12 sessions of licensed therapy. If your clinician determines you need continued care and you still meet financial eligibility, your scholarship can be renewed.",
            },
            {
              q: "Is this really free? What's the catch?",
              a: "There is no catch. The G&P Foundation is a 501(c)(3) public charity funded by donations and grants. Our sole purpose is to connect you with the care you deserve.",
            },
            {
              q: "Will this affect my insurance or benefits?",
              a: "No. Care Scholarship services are provided independently of insurance. We do not bill your insurance or report to any benefits programs.",
            },
            {
              q: "Can I choose my therapist?",
              a: "We do our best to match you with a therapist who fits your needs. If you have preferences regarding gender, specialty, language, or cultural background, let us know in your application.",
            },
            {
              q: "I'm not sure I qualify. Should I still apply?",
              a: "Yes. If you're struggling and can't afford care, apply. We review every application individually and will work with you to explore all available options.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-light-warm py-6">
              <h4 className="text-deep-brown font-bold mb-2">{faq.q}</h4>
              <p className="text-warm-gray leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-terracotta-light text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              If You&apos;re in Crisis Right Now
            </h3>
            <p className="text-white/90 leading-relaxed">
              If you or someone you know is in immediate danger, call{" "}
              <strong className="underline">911</strong>. For mental health
              crisis support, contact the{" "}
              <strong className="underline">
                988 Suicide &amp; Crisis Lifeline
              </strong>{" "}
              by calling or texting <strong className="underline">988</strong>.
              You can also reach the{" "}
              <strong className="underline">Crisis Text Line</strong> by texting{" "}
              <strong className="underline">HOME to 741741</strong>. You are not
              alone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
