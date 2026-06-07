import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "UK Data Protection — LedgerLink",
  description: "How LedgerLink aligns with UK data protection expectations.",
};

export default function DataProtectionPage() {
  return (
    <LegalLayout
      title="UK Data Protection"
      intro="How LedgerLink is designed around UK data protection expectations."
      updated="7 June 2026"
      sections={[
        {
          heading: "Lawful, careful handling",
          body: [
            "Compliance with UK data protection expectations shaped the platform from the ground up. Personal and financial data is handled deliberately, only for the purposes of operating your firm's portal and billing.",
          ],
        },
        {
          heading: "Data minimisation",
          body: [
            "We collect only the data needed to deliver the service, and we restrict access through role-based controls and tenant isolation.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Individuals can request access to, correction of, or deletion of their personal data. Firms can fulfil data subject requests using the platform's records and audit logs.",
          ],
        },
        {
          heading: "Data location & processing",
          body: [
            "Data is processed on secure cloud infrastructure with appropriate safeguards. We maintain audit trails so processing activity remains transparent and accountable.",
          ],
        },
      ]}
    />
  );
}
