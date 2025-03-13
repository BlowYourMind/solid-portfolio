import "./globals.css";
import { Viewport } from "next/types";
import Main from "@/components/Main";
import Providers from "./providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="relative min-h-screen ">
        <Providers>
          <Main>{children} </Main>
        </Providers>
      </body>
    </html>
  );
}
