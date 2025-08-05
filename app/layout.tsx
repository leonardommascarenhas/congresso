import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { WhatsAppFloatingButton } from "./WhatsappButton";

export const metadata: Metadata = {
  title: "Congresso de Odontologia Digital • 6 de setembro • Salvador",
  description:
    "Participe do Congresso de Odontologia Digital em Salvador! Um dia de inovação, tecnologia e networking com os maiores nomes da área.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="relative">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
