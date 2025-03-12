import { cookies } from "next/headers";
import "./globals.css";
import { Viewport } from "next/types";
import Main from "@/components/Main";

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

async function ThemeProvider() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              const storedTheme = document.cookie
                .split('; ')
                .find(row => row.startsWith('theme='))
                ?.split('=')[1];
              
              const theme = storedTheme || "${theme}";
              
              if (theme === "dark" || 
                  (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            } catch (e) {
              console.error('Theme initialization error:', e);
            }
          })();
        `,
        }}
        id="theme-script"
      />
    </>
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="relative min-h-screen bg-background text-theme">
        <ThemeProvider />
        <Main>{children} </Main>
      </body>
    </html>
  );
}
