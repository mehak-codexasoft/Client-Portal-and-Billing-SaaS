import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — LedgerLink",
  description: "The terms governing use of the LedgerLink platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="The terms governing your firm's use of the LedgerLink platform."
      updated="7 June 2026"
      sections={[
        {
          heading: "Your account",
          body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your firm's tenant.",
            "You must configure role-based access appropriately and ensure users only have the permissions they require.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree to use LedgerLink only for lawful purposes related to managing client communication, billing and document exchange for your accounting practice.",
          ],
        },
        {
          heading: "Billing & subscriptions",
          body: [
            "Subscriptions are billed per firm on a monthly basis according to your selected plan. Fees are non-refundable except where required by law.",
            "You may upgrade, downgrade or cancel at any time; changes take effect at the start of the next billing cycle.",
          ],
        },
        {
          heading: "Availability & liability",
          body: [
            "We aim for high availability and consistent performance, but the service is provided on an 'as is' basis. Our liability is limited to the fees paid in the preceding twelve months.",
          ],
        },
      ]}
    />
  );
}
