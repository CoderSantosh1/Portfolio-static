import type { Metadata } from "next";
import { Great_Vibes, Inter, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import "./theme.css";
import "./home.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const signature = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-signature" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "S. Kumar | Home", template: "S. Kumar | %s" },
  description: "Santosh Kumar — frontend developer building clean, responsive and engaging web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${signature.variable} ${mono.variable}`}>
        <div className="shell">
          <Sidebar />
          <main className="shell-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
