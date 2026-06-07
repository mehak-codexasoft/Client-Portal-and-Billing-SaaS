const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Solution", href: "/#solution" },
      { label: "Pricing", href: "/pricing" },
      { label: "Results", href: "/#results" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About CodexaSoft", href: "/about" },
      { label: "Contact", href: "/#contact" },
      { label: "Book a demo", href: "/#contact" },
      { label: "Technology", href: "/#stack" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "UK data protection", href: "/data-protection" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-ink-900">
                Ledger<span className="text-brand-600">Link</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Client portal &amp; billing SaaS purpose-built for UK accounting
              firms. Engineered by CodexaSoft.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-ink-900">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-500 transition hover:text-brand-600">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CodexaSoft. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">Made in the UK · GDPR-aware by design</p>
        </div>
      </div>
    </footer>
  );
}
