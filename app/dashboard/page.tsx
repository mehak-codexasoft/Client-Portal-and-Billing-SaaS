import type { Metadata } from "next";
import Link from "next/link";
import {
  DashboardIcon,
  InvoiceIcon,
  FolderLockIcon,
  LogIcon,
  BellIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Portal — LedgerLink",
  description: "LedgerLink firm portal preview.",
};

const nav = [
  { label: "Overview", icon: DashboardIcon, active: true },
  { label: "Invoices", icon: InvoiceIcon },
  { label: "Documents", icon: FolderLockIcon },
  { label: "Audit log", icon: LogIcon },
  { label: "Notifications", icon: BellIcon },
];

const kpis = [
  { label: "Monthly recurring", value: "£184,920", delta: "+8.2%", up: true },
  { label: "Collection rate", value: "92%", delta: "+25%", up: true },
  { label: "Active clients", value: "517", delta: "+34", up: true },
  { label: "Avg. response", value: "238ms", delta: "-12ms", up: true },
];

const invoices = [
  { client: "Harrow & Co LLP", ref: "INV-2041", amt: "£2,400", due: "On time", status: "Paid", c: "green" },
  { client: "Pennine Tax Ltd", ref: "INV-2042", amt: "£1,150", due: "in 3 days", status: "Due", c: "amber" },
  { client: "Brookfield Audit", ref: "INV-2043", amt: "£3,980", due: "Sent today", status: "Sent", c: "blue" },
  { client: "Meridian Partners", ref: "INV-2044", amt: "£860", due: "Overdue 2d", status: "Overdue", c: "red" },
  { client: "Oakline Advisory", ref: "INV-2045", amt: "£5,220", due: "Scheduled", status: "Draft", c: "slate" },
];

const activity = [
  { who: "Pennine Tax Ltd", what: "downloaded Year-End Accounts.pdf", when: "12m ago" },
  { who: "System", what: "generated 14 recurring invoices", when: "1h ago" },
  { who: "Harrow & Co LLP", what: "paid invoice INV-2041", when: "3h ago" },
  { who: "Admin", what: "updated billing cycle for Oakline Advisory", when: "Yesterday" },
];

const badge: Record<string, string> = {
  green: "bg-green-100 text-green-700",
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-brand-100 text-brand-700",
  red: "bg-red-100 text-red-700",
  slate: "bg-slate-200 text-slate-600",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-[1400px]">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-white p-5 lg:flex">
          <Link href="/" className="flex items-center gap-2.5 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight text-ink-900">
              Ledger<span className="text-brand-600">Link</span>
            </span>
          </Link>

          <nav className="mt-8 space-y-1">
            {nav.map((n) => (
              <button
                key={n.label}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  n.active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <n.icon className="h-5 w-5" />
                {n.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-xl bg-ink-900 p-4 text-white">
            <p className="text-sm font-semibold">Harrow & Co LLP</p>
            <p className="text-xs text-slate-400">Firm administrator</p>
            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 hover:text-brand-200"
            >
              Sign out
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 px-5 py-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Overview</p>
              <h1 className="text-2xl font-bold tracking-tight text-ink-900">
                Good morning, Jane 👋
              </h1>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700"
            >
              <InvoiceIcon className="h-4 w-4" />
              New invoice
            </Link>
          </div>

          {/* KPIs */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">{k.label}</p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-2xl font-extrabold text-ink-900">{k.value}</span>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                    {k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* Invoices */}
            <div className="xl:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <h2 className="font-semibold text-ink-900">Recent invoices</h2>
                  <span className="text-sm font-medium text-brand-600">View all</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                        <th className="px-5 py-3 font-medium">Client</th>
                        <th className="px-5 py-3 font-medium">Ref</th>
                        <th className="px-5 py-3 font-medium">Amount</th>
                        <th className="px-5 py-3 font-medium">Due</th>
                        <th className="px-5 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((inv) => (
                        <tr key={inv.ref} className="border-t border-slate-100">
                          <td className="px-5 py-3.5 font-medium text-ink-900">{inv.client}</td>
                          <td className="px-5 py-3.5 text-slate-500">{inv.ref}</td>
                          <td className="px-5 py-3.5 font-semibold text-ink-900">{inv.amt}</td>
                          <td className="px-5 py-3.5 text-slate-500">{inv.due}</td>
                          <td className="px-5 py-3.5">
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge[inv.c]}`}>
                              {inv.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-ink-900">Activity audit log</h2>
              <ul className="mt-4 space-y-4">
                {activity.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-500" />
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold text-ink-900">{a.who}</span> {a.what}
                      </p>
                      <p className="text-xs text-slate-400">{a.when}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            This is an interactive product preview with sample data.{" "}
            <Link href="/#contact" className="font-semibold text-brand-600">
              Book a demo
            </Link>{" "}
            to see it with your firm&apos;s data.
          </p>
        </main>
      </div>
    </div>
  );
}
