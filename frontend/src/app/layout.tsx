import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { Toaster } from "sonner";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Predict Attack Type",
  description:
    "VANET misbehavior detection enhances safety by identifying malicious attacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>{children}</main>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
