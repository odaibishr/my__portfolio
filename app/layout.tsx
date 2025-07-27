import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ThemeProvider from "@/providers/themeProvider";
import MobileNavBar from "@/components/mobileNavBar";
import Footer from "@/components/layout/footer";

const outfit = Outfit({
  variable: "--font--outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Odai Beshr | Flutter And Next.js Developer",
  description: "Flutter and Web App Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable}  antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <MobileNavBar />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
