const stats = [
  { value: "40%", label: "Faster billing cycle time" },
  { value: "25%", label: "Higher invoice collection rate" },
  { value: "500+", label: "Active client accounts per firm" },
  { value: "<250ms", label: "Consistent system response" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-ink-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/5 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-ink-900 px-6 py-10 text-center">
            <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
