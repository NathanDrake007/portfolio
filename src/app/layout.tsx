import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import Analytics from "@/components/global/analytics";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { ThemeProvider } from "@/components/theme-provider";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "sakthinathan.com",
    template: "%s | sakthinathan.com",
  },
  description: "Software Engineer",
  openGraph: {
    title: "sakthinathan.com",
    description: "Software Engineer",
    url: "https://sakthinathan.com",
    siteName: "chronark.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
