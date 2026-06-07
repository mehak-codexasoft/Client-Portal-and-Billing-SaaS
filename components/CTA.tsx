import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to unify your client &amp; billing operations?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              See how LedgerLink can reduce your billing cycle time and recover
              missed revenue — book a tailored walkthrough for your firm.
            </p>

            <ContactForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
