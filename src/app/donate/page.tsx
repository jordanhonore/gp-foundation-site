import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DonateInquiryForm from "./DonateInquiryForm";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the G&P Foundation for Wellness with a one-time gift, recurring donation, corporate sponsorship, or planned gift. 501(c)(3) — EIN 41-3463875.",
};

const GOFUNDME_URL = "https://gofund.me/4a8252b8e";

const otherWaysToGive = [
  {
    title: "Mail a check",
    body: (
      <>
        Make checks payable to <strong>G&amp;P Foundation for Wellness</strong>{" "}
        and mail to:
        <br />
        <span className="block mt-2 text-deep-brown font-medium">
          G&amp;P Foundation for Wellness
          <br />
          [Street Address — to be added]
          <br />
          Missouri City, TX 77459
        </span>
      </>
    ),
  },
  {
    title: "Wire transfer or ACH",
    body: (
      <>
        For wire, ACH, or stock transfers, contact us at{" "}
        <a
          href="mailto:info@gpfoundationforwellness.org"
          className="text-terracotta hover:text-terracotta-dark"
        >
          info@gpfoundationforwellness.org
        </a>{" "}
        and we&rsquo;ll send routing instructions and our W-9.
      </>
    ),
  },
  {
    title: "Donor-advised fund (DAF)",
    body: (
      <>
        Recommend a grant to G&amp;P Foundation for Wellness through your DAF
        sponsor (Fidelity Charitable, Schwab Charitable, Vanguard Charitable,
        and others). Use our EIN <strong>41-3463875</strong>.
      </>
    ),
  },
  {
    title: "Employer matching gifts",
    body: (
      <>
        Many employers will match your donation, often dollar-for-dollar. Ask
        your HR or giving portal whether the G&amp;P Foundation for Wellness
        qualifies &mdash; we&rsquo;re happy to provide documentation.
      </>
    ),
  },
  {
    title: "Stock, securities & crypto",
    body: (
      <>
        Gifts of appreciated stock can offer significant tax advantages. Reach
        out and we&rsquo;ll connect you with our finance team to coordinate the
        transfer.
      </>
    ),
  },
  {
    title: "Planned giving & bequests",
    body: (
      <>
        Include the foundation in your will, trust, or beneficiary designation
        to leave a lasting legacy of healing. We&rsquo;re glad to work with you
        and your advisor on language and intent.
      </>
    ),
  },
];

export default function DonatePage() {
  return (
    <main>
      <PageHero
        title="Donate"
        subtitle="Your gift removes the financial barrier between a family and the care they need."
      />

      {/* Two paths: small donors (GoFundMe) + major-gift inquiry */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* GoFundMe — quick give */}
            <div className="bg-cream border-2 border-light-warm rounded-lg p-8 flex flex-col">
              <div className="text-xs uppercase tracking-wide text-terracotta font-bold mb-2">
                Quick Give
              </div>
              <h2 className="text-2xl font-bold text-deep-brown mb-3">
                Give in a few clicks
              </h2>
              <p className="text-warm-gray mb-6 flex-1">
                Found us on social media or just want to send a gift right now?
                Our GoFundMe is the fastest way to support a family&rsquo;s
                healing today &mdash; any amount makes a difference.
              </p>
              <a
                href={GOFUNDME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-terracotta text-white text-center px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors"
              >
                Donate via GoFundMe
              </a>
              <p className="text-xs text-warm-gray mt-3 text-center">
                Opens GoFundMe in a new tab
              </p>
            </div>

            {/* Major-gift inquiry */}
            <div className="bg-white border-2 border-terracotta rounded-lg p-8 flex flex-col">
              <div className="text-xs uppercase tracking-wide text-terracotta font-bold mb-2">
                Major Gifts &amp; Partnerships
              </div>
              <h2 className="text-2xl font-bold text-deep-brown mb-3">
                Talk to us about a larger gift
              </h2>
              <p className="text-warm-gray mb-6 flex-1">
                Considering a sponsorship, foundation grant, donor-advised fund
                grant, stock transfer, or planned gift? Tell us a little about
                what you have in mind and a member of our team will follow up
                personally within two business days.
              </p>
              <a
                href="#major-gift-form"
                className="inline-block bg-deep-brown text-white text-center px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-deep-brown/90 transition-colors"
              >
                Start a Conversation
              </a>
              <p className="text-xs text-warm-gray mt-3 text-center">
                Or email{" "}
                <a
                  href="mailto:info@gpfoundationforwellness.org"
                  className="text-terracotta hover:text-terracotta-dark"
                >
                  info@gpfoundationforwellness.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / why give */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-deep-brown">
            Where Your Gift Goes
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-8 rounded-full" />
          <p className="text-warm-gray mb-10">
            Seventy cents of every dollar go directly to care &mdash; covering
            therapist fees, client stipends, and wraparound support for families
            in Fort Bend and Harris Counties.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 border border-light-warm">
              <p className="text-3xl font-bold text-terracotta mb-2">$200</p>
              <p className="text-sm text-warm-gray">
                Funds a full month of weekly therapy for one recipient.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-light-warm">
              <p className="text-3xl font-bold text-terracotta mb-2">$600</p>
              <p className="text-sm text-warm-gray">
                Covers a complete 12-session therapy scholarship.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-light-warm">
              <p className="text-3xl font-bold text-terracotta mb-2">$5,000</p>
              <p className="text-sm text-warm-gray">
                Supports an entire cohort of 8&ndash;10 scholarship recipients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major-gift form */}
      <section id="major-gift-form" className="py-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Major Gift &amp; Partnership Inquiry
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-warm-gray text-center mb-10">
            For gifts of $1,000 or more, corporate sponsorships, foundation
            grants, DAF recommendations, or planned giving. We&rsquo;ll follow
            up personally to answer questions and provide any documentation you
            need.
          </p>
          <DonateInquiryForm />
        </div>
      </section>

      {/* Other ways to give */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Other Ways to Give
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {otherWaysToGive.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-light-warm"
              >
                <h3 className="text-lg font-bold text-deep-brown mb-2">
                  {item.title}
                </h3>
                <div className="text-warm-gray text-sm leading-relaxed">
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax / EIN block */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-sage-light border border-sage rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-deep-brown mb-3">
              Your Gift Is Tax-Deductible
            </h3>
            <p className="text-deep-brown/80 mb-2">
              G&amp;P Foundation for Wellness is a registered 501(c)(3) public
              charity. All donations are tax-deductible to the fullest extent
              allowed by law.
            </p>
            <p className="text-deep-brown font-semibold">
              EIN: 41-3463875
            </p>
            <p className="text-deep-brown/70 text-sm mt-4">
              Need a receipt, W-9, or acknowledgment letter? Email{" "}
              <a
                href="mailto:info@gpfoundationforwellness.org"
                className="text-terracotta hover:text-terracotta-dark"
              >
                info@gpfoundationforwellness.org
              </a>
              .
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/get-involved"
              className="text-terracotta hover:text-terracotta-dark font-semibold text-sm uppercase tracking-wide"
            >
              Other ways to get involved &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
