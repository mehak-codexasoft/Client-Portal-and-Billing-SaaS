import Navbar from "./Navbar";
import Footer from "./Footer";

export type LegalSection = { heading: string; body: string[] };

export default function LegalLayout({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <Navbar />

      <section className="bg-grid pt-36 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{intro}</p>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updated}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-ink-900">
                <span className="mr-2 text-brand-400">{i + 1}.</span>
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <p className="text-sm text-slate-600">
              Questions about this document? Email{" "}
              <a href="mailto:legal@ledgerlink.co.uk" className="font-semibold text-brand-600">
                legal@ledgerlink.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
