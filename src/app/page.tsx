import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_8frpv68frpv68frp.png"
            alt="Supportive community with 'My Mental Health Matters' sign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-deep/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-sage-deep/90 via-sage-deep/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Healing is a Right, Not a Luxury
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Families through <br className="hidden md:block" />
            <span className="text-sage-light">Compassionate Mental Health Care.</span>
          </h2>
          <p className="text-xl text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We remove financial barriers so mothers and families can access the 
            licensed therapy they need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto bg-terracotta text-white px-10 py-4 rounded font-bold text-base uppercase tracking-wide hover:bg-terracotta-dark transition-all shadow-lg hover:shadow-terracotta/20"
            >
              Donate Now
            </Link>
            <Link
              href="/get-help"
              className="w-full sm:w-auto bg-white text-deep-brown px-10 py-4 rounded font-bold text-base uppercase tracking-wide hover:bg-cream transition-all shadow-lg"
            >
              Apply for Care
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-6">
                Where Healing Begins
              </h2>
              <div className="w-16 h-1.5 bg-terracotta mb-8" />
              <p className="text-warm-gray leading-relaxed mb-6 text-lg">
                We believe that every mother navigating the weight of postpartum
                depression, every child carrying the burden of trauma, and every
                family struggling to hold it together deserves access to real,
                licensed, compassionate care — regardless of income.
              </p>
              <p className="text-warm-gray leading-relaxed text-lg mb-8">
                The G&P Foundation for Wellness funds therapy. Not someday. Now.
                Through our Care Scholarship Program, we pay licensed therapists
                directly so that families in Fort Bend and Harris Counties can
                receive the support they need without the impossible burden of
                out-of-pocket costs.
              </p>
              <div className="p-6 bg-sage-light/30 border-l-4 border-sage rounded-r-lg">
                <p className="text-deep-brown font-semibold italic text-lg">
                  &ldquo;We don&apos;t just believe healing is possible. We fund it.&rdquo;
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage-light/50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-terracotta-light/30 rounded-full blur-3xl -z-10"></div>
              <img
                src="/priscilla-du-preez-aPa843frIzI-unsplash.jpg"
                alt="Supportive community hand"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
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
            <div className="relative">
              <img
                src="/headshot.webp"
                alt="Founder of GP Foundation"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light/40 rounded-full -z-10"></div>
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
      <section className="py-24 bg-sage-deep text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Can Be Part of Someone&apos;s Healing
          </h2>
          <p className="text-lg text-cream/80 mb-10 leading-relaxed">
            Every dollar you give funds real therapy sessions for real families
            in our community. No overhead bloat. No bureaucracy. Just care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto bg-terracotta text-white px-10 py-4 rounded font-bold text-base uppercase tracking-wide hover:bg-terracotta-dark transition-all shadow-lg hover:shadow-terracotta/20"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded font-bold text-base uppercase tracking-wide hover:bg-white hover:text-sage-deep transition-all"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
