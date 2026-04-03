import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Our Programs",
  description:
    "Explore the programs offered by GP Foundation for Wellness — from therapy scholarships to community workshops, maternal wellness, and youth resilience.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Healing that meets families where they are."
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-lg text-warm-gray leading-relaxed">
            Every program we offer is designed around what families actually
            need — not what looks good on paper. From one-on-one therapy
            scholarships to community gatherings that restore connection, our
            work is rooted in dignity, accessibility, and real impact.
          </p>
        </div>
      </section>

      {/* Program 1 — Care Scholarship */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-terracotta to-terracotta-dark text-white rounded-t-lg p-8">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-xs uppercase tracking-wide mb-4">
                Flagship Program
              </span>
              <h3 className="text-3xl font-bold mb-2">The Care Scholarship</h3>
              <p className="text-white/80">
                Removing the financial barrier between families and the therapy
                they deserve.
              </p>
            </div>
            <div className="bg-white rounded-b-lg p-8 shadow-sm">
              <p className="text-warm-gray leading-relaxed mb-6">
                The Care Scholarship covers 8–12 therapy sessions for
                individuals and families who cannot afford mental health care. We
                pay the therapist directly — so families never see a bill, never
                navigate insurance, and never have to choose between healing and
                groceries.
              </p>
              <h4 className="text-lg font-semibold text-deep-brown mb-3">
                Who It&apos;s For
              </h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Families experiencing financial hardship
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Individuals without insurance or with inadequate coverage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Parents and caregivers navigating burnout, grief, or trauma
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Young people who need support but can&apos;t access it on
                    their own
                  </span>
                </li>
              </ul>
              <Link
                href="/get-help"
                className="inline-block bg-terracotta text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition-colors"
              >
                Apply for a Scholarship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program 2 — Community Wellness Workshops */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-sage to-sage-light text-white rounded-t-lg p-8">
              <h3 className="text-3xl font-bold mb-2">
                Community Wellness Workshops
              </h3>
              <p className="text-white/80">
                When the body moves, the mind follows.
              </p>
            </div>
            <div className="bg-white rounded-b-lg p-8 shadow-sm">
              <p className="text-warm-gray leading-relaxed mb-6">
                Our workshops bring somatic wellness into community spaces —
                Pilates, mindful movement, breathwork, and body-based healing
                practices designed to help people reconnect with themselves.
                These aren&apos;t fitness classes. They&apos;re invitations to
                feel safe in your own body again.
              </p>
              <h4 className="text-lg font-semibold text-deep-brown mb-3">
                Workshop Focus Areas
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Somatic awareness and stress release
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Pilates for mental health and mobility
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Breathwork and mindful movement sessions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  <span className="text-warm-gray">
                    Community connection and group healing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program 3 — Maternal Wellness Circle */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-sage to-sage-light text-white rounded-t-lg p-8">
              <h3 className="text-3xl font-bold mb-2">
                The Village Circle
              </h3>
              <p className="text-white/80">
                Because motherhood was never meant to be done alone.
              </p>
            </div>
            <div className="bg-white rounded-b-lg p-8 shadow-sm">
              <p className="text-warm-gray leading-relaxed mb-6">
                A monthly gathering for mothers to rest, reflect, and be held by
                community. The Village Circle creates space for honest
                conversation about the joys and struggles of raising a family —
                without judgment, without rushing, and without having to perform
                strength. Childcare and refreshments are always included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program 4 — Youth Resilience Initiative */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-warm-gray to-gray-600 text-white rounded-t-lg p-8">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-xs uppercase tracking-wide mb-4">
                Coming 2027
              </span>
              <h3 className="text-3xl font-bold mb-2">
                Youth Resilience Initiative
              </h3>
              <p className="text-white/80">
                Helping young people heal before the hurt becomes their story.
              </p>
            </div>
            <div className="bg-white rounded-b-lg p-8 shadow-sm">
              <p className="text-warm-gray leading-relaxed mb-6">
                Designed for young people ages 12–18, the Youth Resilience
                Initiative will bring therapeutic support directly into schools
                and community centers. Through partnerships with local
                educators, we&apos;re building a pipeline of care that reaches
                kids before crisis — giving them tools to process pain, build
                identity, and imagine futures worth showing up for.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-warm-gray text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-brown transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
