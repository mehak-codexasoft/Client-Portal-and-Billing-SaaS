import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About — LedgerLink by CodexaSoft",
  description:
    "Why CodexaSoft built LedgerLink — a centralized client portal & billing platform for UK accounting firms.",
};

const values = [
  {
    title: "Security first",
    body: "Tenant isolation, role-based access and full auditability are foundations, not afterthoughts.",
  },
  {
    title: "Built for scale",
    body: "Designed for concurrent usage across many firms and hundreds of clients without compromise.",
  },
  {
    title: "Outcomes that matter",
    body: "We measure success in faster billing cycles and higher collection rates — not vanity features.",
  },
];

const timeline = [
  { year: "Problem", text: "UK firms juggled communication, invoicing and documents across disconnected tools." },
  { year: "Approach", text: "We designed a tenant-isolated platform with a domain-driven billing engine." },
  { year: "Build", text: "Django services, PostgreSQL consistency and Celery workers powered async invoicing." },
  { year: "Impact", text: "40% faster billing cycles, 25% better collection, 500+ clients per firm." },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-grid pt-36 pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            About
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Engineered by <span className="gradient-text">CodexaSoft</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            LedgerLink was built to replace the fragmented stack of tools UK
            accounting firms relied on — uniting secure client portals with
            integrated billing workflows in one accountable system.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">How it came together</h2>
          <ol className="mt-10 space-y-6 border-l-2 border-brand-100 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-600">{t.year}</p>
                <p className="mt-1 text-slate-700">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="bg-ink-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
            <p className="mt-3 text-slate-300">
              Tell us about your firm and we&apos;ll tailor a walkthrough to your
              client portfolio.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <ContactForm variant="full" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
