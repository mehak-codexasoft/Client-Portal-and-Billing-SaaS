import { ArrowRightIcon, CheckIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid px-6 pt-28 pb-16 lg:pt-24"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Built for UK accounting firms
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.07] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Client portals &amp; billing,{" "}
            <span className="gradient-text">finally in one place.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            LedgerLink unifies client communication, recurring billing workflows
            and secure financial document exchange — so your firm stops juggling
            disconnected tools and starts billing with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              Book a demo
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {["Tenant-isolated", "UK data handling", "Audit-ready"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckIcon className="h-4 w-4 text-brand-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock app preview */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-500/20 to-brand-300/10 blur-2xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl shadow-brand-900/10">
            <div className="flex items-center gap-1.5 px-2 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">
                app.ledgerlink.co.uk/billing
              </span>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">Monthly recurring</p>
                  <p className="text-2xl font-bold text-ink-900">£184,920</p>
                </div>
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  +25% collected
                </span>
              </div>

              <div className="mt-4 flex items-end gap-1.5">
                {[40, 55, 48, 70, 62, 85, 78, 96].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-300"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { name: "Harrow & Co LLP", amt: "£2,400", status: "Paid", c: "green" },
                  { name: "Pennine Tax Ltd", amt: "£1,150", status: "Due", c: "amber" },
                  { name: "Brookfield Audit", amt: "£3,980", status: "Sent", c: "blue" },
                ].map((r) => (
                  <div
                    key={r.name}
                    className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 shadow-sm"
                  >
                    <span className="text-sm font-medium text-ink-900">{r.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-700">{r.amt}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          r.c === "green"
                            ? "bg-green-100 text-green-700"
                            : r.c === "amber"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-brand-100 text-brand-700"
                        }`}
                      >
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-[11px] font-medium text-slate-500">Avg. response</p>
            <p className="text-lg font-bold text-ink-900">&lt; 250ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
