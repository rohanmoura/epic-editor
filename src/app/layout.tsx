import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your go-to epic editor',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      variables: {
        colorPrimary: "#3371ff",
        fontSize: "16px",
      },
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            inter.variable
          )}
        >{children}</body>
      </html>
    </ClerkProvider>
  );
}
