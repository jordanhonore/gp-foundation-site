import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-brown to-terracotta-dark text-white py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Every Mother Deserves a Village.
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-terracotta-light mb-5">
            Every Family Deserves to Thrive.
          </h3>
          <p className="text-lg text-white/90 mb-9 max-w-2xl mx-auto leading-relaxed">
            The G&P Foundation for Wellness removes the financial barriers
            standing between underserved families and the mental health care they
            need. Because healing should never depend on what you can afford.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/programs"
              className="bg-terracotta border-2 border-terracotta text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark hover:border-terracotta-dark transition-colors"
            >
              Learn About Our Programs
            </Link>
            <Link
              href="/get-help"
              className="border-2 border-white text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-terracotta transition-colors"
            >
              Apply for a Care Scholarship
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-deep-brown mb-4">
            Where Healing Begins
          </h2>
          <div className="w-14 h-0.5 bg-terracotta mx-auto mb-8" />
          <p className="text-warm-gray leading-relaxed mb-5 text-lg">
            We believe that every mother navigating the weight of postpartum
            depression, every child carrying the burden of trauma, and every
            family struggling to hold it together deserves access to real,
            licensed, compassionate care — regardless of income.
          </p>
          <p className="text-warm-gray leading-relaxed text-lg">
            The G&P Foundation for Wellness funds therapy. Not someday. Now.
            Through our Care Scholarship Program, we pay licensed therapists
            directly so that families in Fort Bend and Harris Counties can
            receive the support they need without the impossible burden of
            out-of-pocket costs.{" "}
            <strong className="text-deep-brown">
              We don&apos;t just believe healing is possible. We fund it.
            </strong>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-brown mb-4">
              How It Works
            </h2>
            <div className="w-14 h-0.5 bg-terracotta mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Apply",
                text: "Families facing financial hardship apply for a Care Scholarship. We verify need based on household income at or below 200% of the Federal Poverty Guidelines.",
              },
              {
                icon: "🤝",
                title: "Match",
                text: "We match each recipient with a licensed clinical therapist who specializes in their specific needs — whether that's postpartum depression, childhood trauma, family conflict, or anxiety.",
              },
              {
                icon: "💚",
                title: "Heal",
                text: "The Foundation pays the therapist directly for 8–12 sessions of care. No bills. No co-pays. No barriers. Just the space and support to begin healing.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg p-10 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-deep-brown mb-3">
                  {card.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-deep-brown text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "30–50", label: "Care Scholarships in our first year" },
              {
                number: "8–12",
                label: "Therapy sessions funded per recipient",
              },
              { number: "70%+", label: "Of every dollar goes directly to care" },
              { number: "$0", label: "Dollars families pay out of pocket" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl md:text-5xl font-bold text-terracotta-light mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 bg-sage-light rounded-lg flex items-center justify-center text-warm-gray">
              Founder Photo
            </div>
            <div>
              <h2 className="text-3xl font-bold text-deep-brown mb-5">
                Born from a Mother&apos;s Journey
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Our founder began her therapy career while pregnant with her
                first child and graduated while carrying her second. She
                didn&apos;t just study the gaps in our mental health system — she
                lived them.
              </p>
              <blockquote className="border-l-4 border-terracotta pl-5 my-6 italic text-deep-brown leading-relaxed">
                &ldquo;I created this Foundation because no mother should have to
                choose between feeding her family and getting the help she needs.
                Healing isn&apos;t a luxury. It&apos;s a right.&rdquo;
              </blockquote>
              <Link
                href="/about"
                className="text-terracotta font-semibold hover:text-terracotta-dark transition-colors"
              >
                Read Her Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-terracotta text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            You Can Be Part of Someone&apos;s Healing
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Every dollar you give funds real therapy sessions for real families
            in our community. No overhead bloat. No bureaucracy. Just care.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/get-involved"
              className="bg-deep-brown border-2 border-deep-brown text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-deep-brown/80 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-terracotta transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
