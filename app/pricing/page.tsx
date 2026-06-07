import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing — LedgerLink",
  description:
    "Simple, per-firm pricing for LedgerLink — the client portal & billing platform for UK accounting firms.",
};

const tiers = [
  {
    name: "Starter",
    price: "£149",
    period: "/firm / month",
    blurb: "For small practices getting organised.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Up to 50 active client accounts",
      "Secure client portal",
      "Recurring & one-time invoicing",
      "Document sharing",
      "Email notifications",
      "Standard support",
    ],
  },
  {
    name: "Practice",
    price: "£399",
    period: "/firm / month",
    blurb: "For growing firms scaling client work.",
    cta: "Book a demo",
    featured: true,
    features: [
      "Up to 500 active client accounts",
      "Role-based access controls",
      "Automated payment reconciliation",
      "Configurable billing cycles per client",
      "Client activity audit logs",
      "Multi-client admin dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "For multi-office firms with bespoke needs.",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Unlimited client accounts",
      "Dedicated tenant isolation",
      "Custom billing logic & integrations",
      "Advanced audit & compliance exports",
      "SSO & custom roles",
      "Dedicated success manager",
    ],
  },
];

const faqs = [
  {
    q: "Is each firm's data isolated?",
    a: "Yes. LedgerLink uses a tenant-isolated architecture — every firm operates in a secure, independent environment with no data crossing tenant boundaries.",
  },
  {
    q: "Can billing cycles differ per client?",
    a: "Absolutely. Billing cadence is configurable per client agreement, so recurring invoices match how each engagement actually works.",
  },
  {
    q: "How are payments reconciled?",
    a: "Background workers track and reconcile payments automatically, reducing manual follow-up and keeping collection rates high.",
  },
  {
    q: "Do you handle UK data protection requirements?",
    a: "The platform is designed around careful, deliberate data handling aligned with UK data protection expectations, with full activity audit logs.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-grid pt-36 pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            Pricing
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            One platform. <span className="gradient-text">Predictable pricing.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Per-firm pricing that scales with your client portfolio — no
            per-seat surprises. All plans include secure portals and billing
            automation.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                t.featured
                  ? "border-brand-500 bg-ink-900 text-white shadow-2xl shadow-brand-900/20 lg:-mt-4 lg:mb-4"
                  : "border-slate-200 bg-white"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${t.featured ? "text-white" : "text-ink-900"}`}>
                {t.name}
              </h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-slate-300" : "text-slate-500"}`}>
                {t.blurb}
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${t.featured ? "text-white" : "text-ink-900"}`}>
                  {t.price}
                </span>
                <span className={`text-sm ${t.featured ? "text-slate-400" : "text-slate-500"}`}>
                  {t.period}
                </span>
              </div>

              <Link
                href="/#contact"
                className={`mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  t.featured
                    ? "bg-brand-500 text-white hover:bg-brand-400"
                    : "border border-slate-300 text-slate-700 hover:border-brand-300 hover:text-brand-600"
                }`}
              >
                {t.cta}
              </Link>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon
                      className={`mt-0.5 h-5 w-5 flex-none ${
                        t.featured ? "text-brand-300" : "text-brand-600"
                      }`}
                    />
                    <span className={`text-sm ${t.featured ? "text-slate-200" : "text-slate-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-6">
                <dt className="font-semibold text-ink-900">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Footer />
    </main>
  );
}
