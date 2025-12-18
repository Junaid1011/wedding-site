import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kajal & Junaid | Wedding Celebration",
  description: "Join us in celebrating our love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
