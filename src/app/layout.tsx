import type { Metadata } from "next";
import ThemeRegistry from "../providers/ThemeRegistry";
import I18nProvider from "../providers/I18nProvider";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";
import { getNonce } from "@/server/nonce";
import AuthProvider from "@/providers/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Cat's Stuff",
  description: "The best place for cat accessories",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = await getNonce();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <AppProvider>
            <ThemeRegistry nonce={nonce}>
              <I18nProvider>
                <Navbar />
                <main>{children}</main>
              </I18nProvider>
            </ThemeRegistry>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
