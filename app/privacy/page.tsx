import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — LedgerLink",
  description: "How LedgerLink collects, uses and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How we collect, use and safeguard personal data across the LedgerLink platform."
      updated="7 June 2026"
      sections={[
        {
          heading: "Data we collect",
          body: [
            "We collect account details (name, work email, firm), billing data required to operate invoicing workflows, and documents you choose to share through the portal.",
            "We also record activity for audit purposes — who accessed what, and when — to support accountability and compliance.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "Personal data is used solely to provide the service: authenticating users, generating invoices, reconciling payments and enabling secure document exchange.",
            "We do not sell personal data, and we do not use client financial documents for any purpose beyond delivering the platform to your firm.",
          ],
        },
        {
          heading: "Tenant isolation",
          body: [
            "Each firm operates within an isolated tenant. Data does not cross tenant boundaries, and access is governed by role-based controls you configure.",
          ],
        },
        {
          heading: "Retention & your rights",
          body: [
            "We retain data for as long as your firm maintains an active account, or as required by law. You may request access, correction or deletion of personal data in line with UK data protection rights.",
          ],
        },
      ]}
    />
  );
}
