import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support the GP Foundation for Wellness by donating, volunteering, or partnering with us to bring healing to families in need.",
};

const donationTiers = [
  { amount: "$50", description: "Sponsors one therapy session for a family member in need" },
  { amount: "$200", description: "Funds a full month of weekly therapy for one recipient" },
  { amount: "$600", description: "Covers a complete 12-session therapy scholarship" },
  { amount: "$5,000", description: "Supports an entire cohort of 8\u201310 scholarship recipients" },
];

const volunteerOpportunities = [
  {
    category: "Event Support",
    description:
      "Help plan and staff wellness workshops, community gatherings, and fundraising events.",
  },
  {
    category: "Administrative Support",
    description:
      "Assist with data entry, donor communications, scheduling, and day-to-day operations.",
  },
  {
    category: "Professional Services",
    description:
      "Lend your expertise in marketing, graphic design, legal counsel, or accounting.",
  },
  {
    category: "Clinical Volunteers",
    description:
      "Licensed therapists and counselors who can offer pro-bono or reduced-rate sessions.",
  },
  {
    category: "Community Ambassadors",
    description:
      "Spread the word in your neighborhood, faith community, or workplace and connect families to resources.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="Get Involved"
        subtitle="Healing is a community effort. Here&apos;s how you can help."
      />

      {/* Donate Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Fund a Family&apos;s Healing
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-center text-warm-gray mb-12">
            Seventy cents of every dollar go directly to care&mdash;covering
            therapist fees, client stipends, and wraparound support. Your
            generosity removes the financial barrier that keeps families from
            getting the help they deserve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-white border-2 border-light-warm rounded-lg p-8 text-center hover:border-terracotta hover:-translate-y-1 transition-all"
              >
                <p className="text-4xl font-bold text-terracotta mb-3">
                  {tier.amount}
                </p>
                <p className="text-warm-gray text-sm">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/donate"
              className="inline-block bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition-colors"
            >
              Give Today
            </Link>
          </div>

          <div className="bg-sage-light border border-sage rounded-lg p-5 text-center text-sm max-w-2xl mx-auto mt-8">
            <p className="text-deep-brown">
              GP Foundation for Wellness is a registered 501(c)(3) nonprofit
              organization. All donations are tax-deductible to the fullest
              extent allowed by law.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Bring Your Gifts to the Village
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-center text-warm-gray mb-12">
            Whether you have an hour a month or a skill to share, there&apos;s a
            place for you in our village. Volunteers are the backbone of
            everything we do.
          </p>

          <div className="max-w-2xl mx-auto mb-10">
            {volunteerOpportunities.map((opp) => (
              <div
                key={opp.category}
                className="border-b border-light-warm py-3 flex items-start gap-3"
              >
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
                <p className="text-deep-brown">
                  <strong>{opp.category}</strong> &mdash; {opp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/volunteer"
              className="inline-block bg-sage text-white px-8 py-3 rounded-lg font-semibold hover:bg-sage/90 transition-colors"
            >
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Institutional &amp; Corporate Partnerships
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-center text-warm-gray mb-8">
            We partner with hospitals, schools, faith-based organizations, and
            corporations to expand access to mental-health resources in
            underserved communities. Together, we can build sustainable pathways
            to wellness that outlast any single program.
          </p>

          <p className="max-w-3xl mx-auto text-center text-warm-gray mb-10">
            Partnership opportunities include sponsored therapy cohorts,
            workplace wellness workshops, co-branded community events, and
            employee giving campaigns. We tailor every collaboration to align
            with your mission and impact goals.
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition-colors"
            >
              Explore a Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-terracotta text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Every Act of Generosity Creates a Ripple
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Whether you give your time, your talent, or your treasure, you are
            helping a family move from crisis to calm. The ripple you start today
            will be felt for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
