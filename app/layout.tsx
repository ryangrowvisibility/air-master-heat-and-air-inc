import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Air Master Heat and Air — Sacramento's Heating & Air Since 1986",
  description:
    "Family-run Sacramento HVAC contractor since 1986. Full system replacements, AC and furnace repair, installations, and maintenance. Owner-led by Farid Farahvash — 40 years of Sacramento heating and cooling.",
  metadataBase: new URL("https://air-master-heat-and-air-inc.growlocalvisibility.com"),
  openGraph: {
    title: "Air Master Heat and Air — Sacramento HVAC Since 1986",
    description:
      "Forty years of Sacramento heating and cooling. Owner-led residential HVAC — replacements, repair, installation, maintenance.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${hanken.variable} ${jbmono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
