import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Create account — LedgerLink",
  description: "Start your LedgerLink free trial for your accounting firm.",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Start your free trial"
      subtitle="Set up your firm in minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
            Sign in
          </Link>
        </>
      }
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
