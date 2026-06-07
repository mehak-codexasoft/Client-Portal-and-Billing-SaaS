import { CheckIcon } from "./Icons";

const metrics = [
  { value: "40%", label: "Reduction in billing cycle time" },
  { value: "25%", label: "Improvement in invoice collection rate" },
  { value: "50%", label: "Less manual coordination across teams" },
];

const outcomes = [
  "Supported over 500 active client accounts per firm",
  "Consistent system response times under 250ms",
  "Streamlined operations with transparency and accountability",
  "Reliable recurring billing across hundreds of accounts",
];

export default function Results() {
  return (
    <section id="results" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              The results
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Measurable impact, from day one
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              By consolidating communication, billing and documents into one
              platform, firms cut friction and recovered revenue that was slipping
              through the cracks.
            </p>

            <ul className="mt-8 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-slate-700">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`rounded-2xl border border-slate-200 p-7 ${
                  i === 0 ? "sm:col-span-2 bg-brand-600 text-white" : "bg-slate-50"
                }`}
              >
                <p
                  className={`text-4xl font-extrabold ${
                    i === 0 ? "text-white" : "text-brand-600"
                  }`}
                >
                  {m.value}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    i === 0 ? "text-brand-100" : "text-slate-600"
                  }`}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
