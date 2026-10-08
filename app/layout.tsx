import type { Metadata, Viewport } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Air Master Heat and Air | Heating & AC Repair in Sacramento, CA",
  description:
    "Family-owned Sacramento heating and air conditioning company since 1986. AC and furnace repair, installation, system replacement and maintenance. Call (916) 399-1585.",
  metadataBase: new URL("https://air-master-heat-and-air-inc.growlocalvisibility.com"),
  openGraph: {
    title: "Air Master Heat and Air | Sacramento Heating & Air Since 1986",
    description:
      "AC and furnace repair, installation, replacement and maintenance in Sacramento. Family-owned since 1986. Call (916) 399-1585.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${merriweather.variable} ${sourceSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
