import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Load Montserrat font with desired weights
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadata used by Next.js to inject <title>, <meta>, and <link rel="icon">
export const metadata: Metadata = {
  title: "Jawwad Ashfaq | Professional Web Developer",
  description:
    "Jawwad Ashfaq is a professional Website Developer in Pakistan, specializing in Website Development, Speed Optimization, and Maintenance Services for high-performance and SEO-friendly websites.",
  icons: {
    icon: { url: "/favicon1.png", type: "image/png" }, // Favicon included here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
