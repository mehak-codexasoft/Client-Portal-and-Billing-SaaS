"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  BuildingIcon,
  ChatIcon,
  CheckIcon,
  MailIcon,
  SparklesIcon,
  SpinnerIcon,
  UserIcon,
  UsersIcon,
} from "./Icons";

type Variant = "compact" | "full";
type Status = "idle" | "loading" | "success" | "error";

const trustPoints = [
  "30-minute tailored walkthrough",
  "No commitment, no sales pressure",
  "SOC 2 Type II secure",
];

export default function ContactForm({ variant = "compact" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(json.message ?? "Thanks — we'll be in touch within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-8 flex max-w-md animate-fade-up flex-col items-center gap-3 rounded-3xl border border-green-400/30 bg-green-500/10 px-6 py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white ring-8 ring-green-500/15">
          <CheckIcon className="h-7 w-7" />
        </span>
        <p className="text-xl font-semibold text-white">You&apos;re all set</p>
        <p className="max-w-xs text-sm text-slate-300">{feedback}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
        >
          Send another request
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-brand-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500/40";
  const iconInputCls =
    "w-full rounded-xl border border-white/15 bg-white/[0.06] py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 transition focus:border-brand-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500/40";

  if (variant === "compact") {
    return (
      <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="you@yourfirm.co.uk"
              className={iconInputCls}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <SpinnerIcon className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Book a demo
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="mt-3 text-sm text-red-300">{feedback}</p>
        )}

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
          {trustPoints.map((point) => (
            <li key={point} className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <CheckIcon className="h-3.5 w-3.5 text-brand-300" />
              {point}
            </li>
          ))}
        </ul>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7 text-left">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
          <UserIcon className="h-4 w-4" />
          About you
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
            <div className="relative">
              <UserIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input name="name" type="text" placeholder="Jane Smith" className={iconInputCls} />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              Work email <span className="text-brand-300">*</span>
            </label>
            <div className="relative">
              <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                name="email"
                type="email"
                required
                placeholder="you@yourfirm.co.uk"
                className={iconInputCls}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
          <BuildingIcon className="h-4 w-4" />
          Your firm
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">Firm name</label>
            <div className="relative">
              <BuildingIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input name="firm" type="text" placeholder="Harrow & Co LLP" className={iconInputCls} />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">Active clients</label>
            <div className="relative">
              <UsersIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input name="clients" type="text" placeholder="e.g. 250" className={iconInputCls} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
          <ChatIcon className="h-4 w-4" />
          What can we help with?
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Primary focus</label>
          <select name="topic" defaultValue="" className={inputCls}>
            <option value="" disabled className="bg-ink-800">
              Select a focus area…
            </option>
            <option value="billing" className="bg-ink-800">Faster billing &amp; invoicing</option>
            <option value="clients" className="bg-ink-800">Client &amp; portfolio management</option>
            <option value="revenue" className="bg-ink-800">Recovering missed revenue</option>
            <option value="integrations" className="bg-ink-800">Integrations &amp; data sync</option>
            <option value="other" className="bg-ink-800">Something else</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Tell us more</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your current billing and client workflows…"
            className={inputCls}
          />
        </div>
      </div>

      {status === "error" && <p className="text-sm text-red-300">{feedback}</p>}

      <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
        <p className="inline-flex items-center gap-1.5 text-xs text-slate-400">
          <SparklesIcon className="h-4 w-4 text-brand-300" />
          We reply within one business day. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={isLoading}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 disabled:opacity-60 sm:w-auto"
        >
          {isLoading ? (
            <>
              <SpinnerIcon className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Request your demo
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
