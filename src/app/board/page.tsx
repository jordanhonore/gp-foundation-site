import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors of the G&P Foundation for Wellness, providing oversight, accountability, and strategic direction for our mission.",
};

const boardMembers = [
  {
    name: "Brittaney Honore, LMFTA",
    role: "President & Founder",
    bio: "Brittaney Honore is the founder and President of the G&P Foundation for Wellness. A Licensed Marriage and Family Therapist Associate with a Master\u2019s degree from Houston Christian University, Brittaney brings both clinical expertise and lived experience to the Foundation\u2019s mission. She began her therapy career while pregnant with her first child and completed her graduate studies while carrying her second, giving her a deeply personal understanding of the gaps in mental health access facing mothers and families. Her clinical specialization in family systems, postpartum mental health, and trauma-informed care directly shapes every program the Foundation offers. Brittaney also serves as the founder of Good & Plenty Wellness, LLC, the Foundation\u2019s strategic facility partner.",
  },
  {
    name: "Jordan Honore",
    role: "Vice President & Treasurer",
    bio: "Jordan Honore serves as Vice President and Treasurer of the G&P Foundation for Wellness, bringing a professional background in finance and sales to the organization\u2019s leadership. In his role, Jordan oversees the Foundation\u2019s financial stewardship, budgeting, and fiscal accountability, ensuring that grant funds and donations are managed with transparency and directed toward maximum programmatic impact. His experience in revenue strategy and financial planning provides the Foundation with the operational discipline necessary to maintain its commitment to directing over 70% of all funds to direct program services.",
  },
  {
    name: "Alicia Collins",
    role: "Director",
    bio: "Alicia Collins serves as a Director on the Board of the G&P Foundation for Wellness. With over 25 years of experience in financial aid for educational institutions, Alicia currently serves as Financial Aid Director for Universal Education Institute. Her extensive career helping underserved students navigate financial barriers to education directly parallels the Foundation\u2019s mission of removing financial barriers to mental health care. Alicia\u2019s expertise in compliance, eligibility verification, and fund administration strengthens the Foundation\u2019s scholarship intake processes and ensures that resources reach the individuals who need them most.",
  },
  {
    name: "Stephanie Garner",
    role: "Secretary",
    bio: "Stephanie Garner serves as Secretary on the Board of Directors for the G&P Foundation for Wellness, where she plays a key role in maintaining accurate records, supporting organizational compliance, and ensuring effective communication across the board. Stephanie brings strong attention to detail, organizational excellence, and a commitment to community-centered work. She is passionate about supporting initiatives that promote mental wellness, family support, and access to holistic care. Her dedication to structure and accountability helps strengthen the Foundation\u2019s ability to serve individuals and families with integrity and compassion.",
  },
];

export default function BoardPage() {
  return (
    <main>
      <PageHero
        title="Board of Directors"
        subtitle="The leadership guiding our mission forward."
      />

      {/* Board Members */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-deep-brown text-center">
            Our Leadership
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mt-4 mb-10" />

          <div className="space-y-10">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="border-l-4 border-terracotta bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-deep-brown">
                  {member.name}
                </h3>
                <p className="text-terracotta font-semibold text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-warm-gray leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl italic text-warm-gray">
            &ldquo;Where Movement Meets Healing&rdquo;
          </p>
          <p className="text-sm text-warm-gray mt-4">
            G&P Foundation for Wellness | Missouri City, Texas
          </p>
          <p className="text-sm text-warm-gray">
            A 501(c)(3) Tax-Exempt Organization
          </p>
        </div>
      </section>
    </main>
  );
}
