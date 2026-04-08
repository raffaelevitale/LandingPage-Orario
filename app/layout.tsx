import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orario — L'orario scolastico, ridisegnato",
  description:
    "L'app moderna per consultare l'orario scolastico. Per studenti e docenti, su qualsiasi dispositivo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('landing-theme') || 'system';
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (theme === 'system' && systemDark);
                if (isDark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
