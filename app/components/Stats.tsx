type Stat = { value: string; label: string };

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <section className="business-stats" aria-label="Northstar Countertops at a glance">
      <dl className="business-stats__grid">
        {items.map(({ value, label }) => (
          <div className="business-stats__item" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
