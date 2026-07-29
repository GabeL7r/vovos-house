import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Vovo's House — Stay like family.",
  description:
    "Vovo's House is a new kind of rental for families with little ones — every home is kid-ready before you arrive. Join the waitlist for early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
