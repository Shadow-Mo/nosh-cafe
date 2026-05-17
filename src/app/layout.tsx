import type { Metadata } from "next";
import "../styles.css";
import { Toaster } from "@/components/ui/sonner";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  ),
  title: "Nosh Cafe - Aundh, Pune | Slow brews. Loud flavours.",
  description:
    "Nosh Cafe in Aundh, Pune - small-batch coffee, all-day breakfast, wood-fired pizzas and bold plates. Open 9:30 AM - 11:30 PM daily.",
  authors: [{ name: "Nosh Cafe" }],
  openGraph: {
    title: "Nosh Cafe - Brewed with love in Aundh",
    description:
      "All-day breakfast, signature mains and small-batch coffee in Aundh, Pune.",
    type: "website",
    images: [heroCoffee.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosh Cafe - Brewed with love in Aundh",
    description:
      "All-day breakfast, signature mains and small-batch coffee in Aundh, Pune.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
