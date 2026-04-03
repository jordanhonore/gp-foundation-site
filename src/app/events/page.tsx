import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Events",
  description:
    "Join GP Foundation for Wellness at our community wellness events. From maternal wellness circles to family wellness days, our events bring healing, connection, and support to families throughout the community.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHero
        title="Events"
        subtitle="Healing happens in community. Come as you are."
      />

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-deep-brown/80 leading-relaxed">
            Our events bring families together around shared experiences of
            healing, learning, and joy. Every gathering is open to the
            community&mdash;no membership required, no questions asked. Childcare
            is provided at all events so that every parent can show up fully
            present.
          </p>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 bg-cream px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown text-center mb-4">
            Recurring Events
          </h2>
          <div className="w-14 h-0.5 bg-terracotta mx-auto mb-10" />

          {/* Card 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-5 flex gap-6 items-start flex-col md:flex-row">
            <div className="bg-terracotta text-white rounded-lg p-4 text-center min-w-[80px]">
              <span className="block text-xs font-semibold tracking-wide uppercase">
                MONTHLY
              </span>
              <span className="block text-3xl font-bold leading-tight">
                1st
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-deep-brown mb-1">
                The Village Circle
              </h3>
              <p className="text-sm text-terracotta font-medium mb-3">
                First Saturday of Every Month | Free for All Mothers
              </p>
              <p className="text-deep-brown/80 leading-relaxed">
                A sacred space for mothers to gather, breathe, and be held. Each
                circle includes guided somatic practices, peer support, and
                time for honest conversation about the joys and challenges of
                motherhood. Whether you&apos;re expecting, postpartum, or
                raising teens&mdash;you belong here.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-5 flex gap-6 items-start flex-col md:flex-row">
            <div className="bg-terracotta text-white rounded-lg p-4 text-center min-w-[80px]">
              <span className="block text-xs font-semibold tracking-wide uppercase">
                BI-WKLY
              </span>
              <span className="block text-3xl font-bold leading-tight">
                &bull;
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-deep-brown mb-1">
                Community Somatic Wellness Workshop
              </h3>
              <p className="text-sm text-terracotta font-medium mb-3">
                Every Other Week | Free for Scholarship Recipients, $15 for
                Public
              </p>
              <p className="text-deep-brown/80 leading-relaxed">
                Learn practical, body-based tools for managing stress, releasing
                tension, and building resilience. These workshops are grounded
                in trauma-informed somatic practices and are designed for
                people of all experience levels. No prior wellness knowledge
                needed&mdash;just a willingness to show up.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-5 flex gap-6 items-start flex-col md:flex-row">
            <div className="bg-terracotta text-white rounded-lg p-4 text-center min-w-[80px]">
              <span className="block text-xs font-semibold tracking-wide uppercase">
                QTRLY
              </span>
              <span className="block text-3xl font-bold leading-tight">
                &bull;
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-deep-brown mb-1">
                Family Wellness Day
              </h3>
              <p className="text-sm text-terracotta font-medium mb-3">
                Quarterly | Free Community Event
              </p>
              <p className="text-deep-brown/80 leading-relaxed">
                A full day of wellness activities for the whole family. Past
                events have included yoga for kids, nutrition workshops,
                community art projects, live music, and free health screenings.
                Family Wellness Day is our way of celebrating the strength and
                beauty of the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
            Host an Event With Us
          </h2>
          <div className="w-14 h-0.5 bg-terracotta mx-auto mb-10" />
          <p className="text-lg text-deep-brown/80 leading-relaxed mb-8">
            We bring our workshops and wellness programming to churches,
            schools, community centers, and other gathering spaces. If you
            have a group that could benefit from somatic wellness education,
            maternal health support, or family-centered programming&mdash;let&apos;s
            talk. We&apos;ll work with you to create an experience that meets
            your community where they are.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-terracotta text-white font-semibold px-8 py-3 rounded-lg hover:bg-terracotta-dark transition-colors"
          >
            Request an Event
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-terracotta text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Sign up for our newsletter in the footer below to get event updates
            delivered to your inbox.
          </p>
        </div>
      </section>
    </main>
  );
}
