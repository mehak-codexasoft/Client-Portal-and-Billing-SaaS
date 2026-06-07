const challenges = [
  {
    title: "Fragmented tooling",
    body: "Communication, invoicing and document sharing lived in disconnected tools — causing inconsistent client interactions and billing delays.",
  },
  {
    title: "Inflexible recurring billing",
    body: "Every client agreement was different. Recurring invoicing needed configuration that off-the-shelf tools couldn't accommodate.",
  },
  {
    title: "Sensitive document exchange",
    body: "Sharing financial documents demanded strict access controls and full auditability — not email attachments and shared drives.",
  },
  {
    title: "Concurrent multi-firm usage",
    body: "The system had to serve many firms and hundreds of clients at once without performance or data-isolation compromises.",
  },
  {
    title: "UK data protection",
    body: "Compliance with UK data protection expectations required careful, deliberate handling of every piece of client data.",
  },
];

export default function Challenge() {
  return (
    <section id="challenge" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            The challenge
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Disconnected tools were costing firms time &amp; revenue
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            UK accounting firms were managing client communication, invoicing and
            document sharing across separate systems — leading to inefficiencies
            and missed billing opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-900/5"
            >
              <span className="text-sm font-bold text-brand-300 transition group-hover:text-brand-500">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
