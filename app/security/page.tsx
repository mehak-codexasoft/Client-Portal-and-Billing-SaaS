import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Security — LedgerLink",
  description: "How LedgerLink protects firm and client data.",
};

export default function SecurityPage() {
  return (
    <LegalLayout
      title="Security"
      intro="The controls and architecture that keep firm and client data protected."
      updated="7 June 2026"
      sections={[
        {
          heading: "Tenant isolation",
          body: [
            "Every accounting firm operates within a secure, independent environment. Data is logically isolated so that no firm can access another firm's information.",
          ],
        },
        {
          heading: "Access controls",
          body: [
            "Role-based access ensures users see only what they are authorised to. Document sharing is governed by access-level restrictions you define per client.",
          ],
        },
        {
          heading: "Auditability",
          body: [
            "Client activity audit logs capture interactions across the platform, giving firms full transparency and a clear record for accountability and compliance.",
          ],
        },
        {
          heading: "Infrastructure",
          body: [
            "The platform runs on hardened cloud infrastructure with encrypted data in transit. Background processing is isolated from the request path to keep the portal fast and resilient.",
          ],
        },
      ]}
    />
  );
}
