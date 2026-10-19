type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero__inner">
        <div className="page-hero__copy">
          <h1 id="page-hero-title">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
