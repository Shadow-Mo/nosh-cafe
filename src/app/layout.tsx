import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nosh Cafe - Coffee Shop",
  description: "Premium coffee shop offering quality brews and tasty treats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body className={`${roboto.className}`}>
        <Header />
        <main className="pt-[9.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
