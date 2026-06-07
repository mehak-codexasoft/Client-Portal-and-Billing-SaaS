import { LayersIcon, BoltIcon, ShieldIcon } from "./Icons";

const pillars = [
  {
    icon: LayersIcon,
    title: "Tenant-isolated architecture",
    body: "Each accounting firm operates inside a secure, independent environment — data never crosses tenant boundaries.",
  },
  {
    icon: BoltIcon,
    title: "Domain-driven billing engine",
    body: "Backend services are structured around billing and client-management domains, supporting complex invoicing logic without tight coupling.",
  },
  {
    icon: ShieldIcon,
    title: "Asynchronous & reliable",
    body: "Background workers generate invoices and reconcile payments off the request path, keeping the portal fast and responsive.",
  },
];

const flow = [
  { step: "Onboard", desc: "Firm provisioned into an isolated tenant with its own clients, roles and billing rules." },
  { step: "Configure", desc: "Per-client billing cycles and agreements set up once, applied automatically." },
  { step: "Automate", desc: "Celery workers generate invoices and reconcile payments in the background." },
  { step: "Collaborate", desc: "Clients log in to a secure portal to view documents, invoices and updates." },
];

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-ink-900 py-24 text-white">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            The solution
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A centralized platform engineered for scale &amp; trust
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            CodexaSoft built a single system that combines secure client portals
            with integrated billing workflows — supporting multi-client
            environments under strict access controls.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flow.map((f, i) => (
            <div key={f.step} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="font-semibold">{f.step}</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
