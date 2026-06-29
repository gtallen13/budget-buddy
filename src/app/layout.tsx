import type { Metadata } from "next";
import { Inter, Sora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const inter = Inter({
  subsets: ["latin"],
});

export const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budget Buddy",
  description: "Budget Buddy is a simple and intuitive budgeting app that helps you manage your finances effectively. Track your expenses, set budgets, and gain insights into your spending habits with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.className, sora.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
