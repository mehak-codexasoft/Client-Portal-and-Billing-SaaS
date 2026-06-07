const stack = [
  { name: "Next.js", role: "Frontend & secure client access" },
  { name: "Django", role: "Domain-driven backend services" },
  { name: "PostgreSQL", role: "Transactional billing data" },
  { name: "Celery", role: "Async invoicing & reconciliation" },
  { name: "Redis", role: "Queues & caching layer" },
  { name: "AWS", role: "Scalable, secure infrastructure" },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            A pragmatic, production-grade stack
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Chosen for consistency, throughput and the ability to scale across
            multiple firms without compromising isolation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-ink-900 text-sm font-bold text-white">
                {t.name.slice(0, 2)}
              </span>
              <div>
                <p className="font-semibold text-ink-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
