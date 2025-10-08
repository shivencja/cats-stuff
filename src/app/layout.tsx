import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "../providers/ThemeRegistry";
import I18nProvider from "../providers/I18nProvider";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat's Stuff",
  description: "The best place for cat accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <AppProvider>
          <ThemeRegistry>
            <I18nProvider>{children}</I18nProvider>
          </ThemeRegistry>
        </AppProvider>
      </body>
    </html>
  );
}
