import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the GP Foundation for Wellness, our mission to bring affordable mental health care to families in Fort Bend and Harris Counties, and the values that guide our work.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="About the Foundation"
        subtitle="A healing space for the families who need it most."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-10" />

          <p className="text-warm-gray leading-relaxed mb-6">
            The GP Foundation for Wellness was born from a simple truth: too
            many families struggling with mental health challenges simply cannot
            afford the care they need. Every day, parents, children, and couples
            fall through the cracks of a system that wasn&apos;t designed with
            them in mind.
          </p>
          <p className="text-warm-gray leading-relaxed mb-6">
            In Fort Bend and Harris Counties, the gap between those who need
            therapy and those who can access it continues to widen. Wait lists
            grow longer, insurance barriers multiply, and families in crisis are
            told to hold on just a little longer. We believe that&apos;s not
            good enough.
          </p>
          <p className="text-warm-gray leading-relaxed mb-6">
            That&apos;s why we fund therapy directly. No red tape. No endless
            referrals. We connect families with licensed therapists and cover the
            cost so that healing can begin when it&apos;s needed most &mdash;
            not months from now, but today.
          </p>
          <p className="text-warm-gray leading-relaxed">
            Our founder, a Licensed Marriage and Family Therapist (LMFT), has
            spent years witnessing firsthand the transformative power of
            accessible mental health care &mdash; and the devastating
            consequences when it&apos;s out of reach. The GP Foundation for
            Wellness is the answer to a calling that couldn&apos;t wait any
            longer.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-sage-light border border-sage rounded-lg p-8">
            <h3 className="text-2xl font-bold text-deep-brown mb-4">
              Our Mission
            </h3>
            <p className="text-warm-gray italic leading-relaxed text-lg">
              &ldquo;To remove the financial barriers that keep families from
              receiving the mental health care they deserve, funding therapy for
              those in Fort Bend and Harris Counties who need it most.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-terracotta bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                Access Over Everything
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Mental health care is not a luxury. We prioritize removing every
                barrier &mdash; financial, logistical, and cultural &mdash; that
                stands between a family and the help they need.
              </p>
            </div>

            <div className="border-l-4 border-terracotta bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                The Whole Person
              </h3>
              <p className="text-warm-gray leading-relaxed">
                We see the full picture. Healing isn&apos;t just about
                individual symptoms; it&apos;s about supporting individuals,
                couples, and families within the context of their lives,
                relationships, and communities.
              </p>
            </div>

            <div className="border-l-4 border-terracotta bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                Community as Medicine
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Isolation deepens suffering. We believe that connection,
                belonging, and shared support are just as vital as any
                therapeutic technique. We invest in the community because the
                community is part of the cure.
              </p>
            </div>

            <div className="border-l-4 border-terracotta bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                Every Dollar to Care
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Donors trust us with their generosity, and we honor that trust.
                Our lean model ensures that the maximum amount of every
                contribution goes directly to funding therapy sessions for
                families in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Model */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-deep-brown">
            How We Maximize Every Dollar
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-10" />

          <p className="text-warm-gray leading-relaxed mb-6 text-left">
            The GP Foundation for Wellness operates through a unique
            LLC/Foundation partnership designed to keep overhead low and impact
            high. Our partnering clinical practice donates office space and
            administrative support to the Foundation, meaning your contributions
            aren&apos;t eaten up by rent or back-office costs.
          </p>
          <p className="text-warm-gray leading-relaxed mb-6 text-left">
            Because of this model, over 70% of every dollar raised goes directly
            to funding therapy sessions for families in need. That&apos;s not an
            aspiration &mdash; it&apos;s how we&apos;re structured from day one.
          </p>
          <p className="text-warm-gray leading-relaxed text-left">
            An independent board of directors provides full oversight of the
            Foundation&apos;s finances, grant decisions, and strategic
            direction, ensuring transparency, accountability, and the highest
            ethical standards in everything we do.
          </p>
        </div>
      </section>
    </main>
  );
}
