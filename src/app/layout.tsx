import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bichobet.example"),
  title: "BichoBet | Entretenimento digital brasileiro com assinatura premium",
  description:
    "Landing page institucional da BichoBet, uma marca brasileira de entretenimento digital com linguagem premium, identidade sofisticada e foco em responsabilidade.",
  keywords: [
    "BichoBet",
    "entretenimento digital",
    "landing page premium",
    "marca brasileira",
    "lista de espera",
  ],
  openGraph: {
    title: "BichoBet",
    description:
      "Prestígio nacional, tecnologia pronta para estreia. Uma marca brasileira de entretenimento digital com assinatura premium.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BichoBet",
    description: "Uma nova assinatura premium para o entretenimento digital brasileiro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
