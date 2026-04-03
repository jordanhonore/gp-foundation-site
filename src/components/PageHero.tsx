export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-gradient-to-br from-deep-brown to-terracotta-dark text-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3">{title}</h2>
        <p className="text-lg text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
