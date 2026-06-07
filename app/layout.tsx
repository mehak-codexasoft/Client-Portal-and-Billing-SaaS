import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LedgerLink — Client Portal & Billing for UK Accounting Firms",
  description:
    "A tenant-isolated SaaS platform that unifies secure client portals, recurring billing workflows, and financial document exchange for UK accounting firms.",
  keywords: [
    "accounting SaaS",
    "client portal",
    "billing software",
    "UK accounting firms",
    "recurring invoicing",
    "document exchange",
  ],
  openGraph: {
    title: "LedgerLink — Client Portal & Billing for UK Accounting Firms",
    description:
      "Unify client communication, billing workflows and secure document exchange in one system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
