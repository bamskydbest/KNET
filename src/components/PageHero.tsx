interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-knetBlue py-4 md:py-5 text-center text-white">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-center">
        <h3 className="text-2xl md:text-2xl font-semibold">{title}</h3>
        {subtitle && (
          <>
            {/* Hide "|" on small screens */}
            <span className="hidden sm:inline text-white opacity-70">|</span>
            <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
          </>
        )}
      </div>
    </section>
  );
}
