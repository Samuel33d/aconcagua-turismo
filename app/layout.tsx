import type { Metadata } from "next";
import { Montserrat, Island_Moments } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-island-moments",
});

export const metadata: Metadata = {
  title: "Aconcagua Turismo — Buses Turísticos Santiago de Chile",
  description:
    "Excursiones y viajes privados en bus desde Santiago de Chile. Staff incluido, 6 destinos y servicio VIP para artistas y bandas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${islandMoments.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
