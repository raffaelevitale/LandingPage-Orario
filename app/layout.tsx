import { DM_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
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
      <body className={`${dmSans.variable} ${dmSans.className}`}>{children}</body>
    </html>
  );
}
