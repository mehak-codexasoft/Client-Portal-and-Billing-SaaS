import {
  ShieldIcon,
  InvoiceIcon,
  SyncIcon,
  FolderLockIcon,
  LogIcon,
  ClockIcon,
  BellIcon,
  DashboardIcon,
} from "./Icons";

const features = [
  {
    icon: ShieldIcon,
    title: "Secure client portal",
    body: "Role-based access gives every user exactly the visibility they should have — nothing more.",
  },
  {
    icon: InvoiceIcon,
    title: "Recurring & one-time invoices",
    body: "Generate invoices on flexible schedules or on demand, tailored to each client agreement.",
  },
  {
    icon: SyncIcon,
    title: "Automated reconciliation",
    body: "Payments are tracked and reconciled automatically, reducing manual follow-up and errors.",
  },
  {
    icon: FolderLockIcon,
    title: "Access-controlled documents",
    body: "Share financial documents with granular, access-level restrictions per client and role.",
  },
  {
    icon: LogIcon,
    title: "Client activity audit logs",
    body: "Every interaction is recorded for full transparency, accountability and compliance.",
  },
  {
    icon: ClockIcon,
    title: "Configurable billing cycles",
    body: "Set billing cadence per client to match the way each engagement actually works.",
  },
  {
    icon: BellIcon,
    title: "Email notifications",
    body: "Clients and staff are kept in the loop on invoices, payments and document updates.",
  },
  {
    icon: DashboardIcon,
    title: "Multi-client dashboard",
    body: "Firm administrators get a single view across hundreds of client accounts.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Key features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Everything a firm needs, under one secure roof
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From billing automation to auditable document exchange — built to
            streamline operations while keeping clients informed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
