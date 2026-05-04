export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-gradient-to-br from-sage-deep to-sage-dark text-white py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
        <p className="text-xl text-sage-light/90 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
