"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "./Icons";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Demo only: no real auth backend — route to the portal.
    setTimeout(() => router.push("/dashboard"), 600);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
          <input name="name" type="text" required placeholder="Jane Smith" className={inputCls} />
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">Work email</label>
        <input name="email" type="email" required placeholder="you@yourfirm.co.uk" className={inputCls} />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">Password</label>
          {mode === "login" && (
            <span className="text-xs font-medium text-brand-600">Forgot?</span>
          )}
        </div>
        <input name="password" type="password" required placeholder="••••••••" className={inputCls} />
      </div>

      {mode === "signup" && (
        <label className="flex items-start gap-2 text-xs text-slate-500">
          <input type="checkbox" required className="mt-0.5 accent-brand-600" />
          <span>
            I agree to the Terms of Service and Privacy Policy and consent to data
            handling in line with UK data protection.
          </span>
        </label>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700 disabled:opacity-60"
      >
        {loading ? "Signing in…" : mode === "login" ? "Sign in" : "Create account"}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Demo environment — any details will take you to the portal preview.
      </p>
    </form>
  );
}
