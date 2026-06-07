import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Sign in — LedgerLink",
  description: "Sign in to your LedgerLink firm portal.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your firm portal."
      footer={
        <>
          New to LedgerLink?{" "}
          <Link href="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
            Create an account
          </Link>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
