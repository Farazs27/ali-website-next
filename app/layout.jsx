import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://samenmondzorg.nl"),
  title: {
    default: "Samen Mondzorg — tandarts in Amsterdam Noord",
    template: "%s — Samen Mondzorg",
  },
  description:
    "Persoonlijke mondzorg in Amsterdam Noord. Een gezonde mond, een mooie glimlach. Welkom bij Samen Mondzorg.",
  applicationName: "Samen Mondzorg",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Samen Mondzorg",
    title: "Samen Mondzorg — tandarts in Amsterdam Noord",
    description:
      "Persoonlijke mondzorg in Amsterdam Noord. Een gezonde mond, een mooie glimlach.",
    images: [{ url: "/images/hero-reception.png", width: 1600, height: 1200 }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Samen Mondzorg",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1ECE1" },
    { media: "(prefers-color-scheme: dark)", color: "#F1ECE1" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Splash />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
