import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SheetProvider } from "@/context/SheetContext";
import { Toaster } from "@/components/ui/toaster";

const Aeonik = localFont({
  src: "./fonts/Aeonik-Regular.woff",
  variable: "--font-aeonik",
  weight: "100 900",
});

const Rubik = localFont({
  src: "./fonts/Rubik.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});

const Montserrat = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-mont",
  weight: "100 900",
});

const puremechanic = localFont({
  src: "./fonts/puremechanic.ttf",
  variable: "--font-pure",
  weight: "100 900",
});

const hero = localFont({
  src: "./fonts/VisueltPro-Regular.woff",
  variable: "--font-hero",
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ransel",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${Aeonik.variable} ${Rubik.variable} ${Montserrat.variable} ${puremechanic.variable} ${hero.variable}} antialiased`}
      >
        <SheetProvider>
          {children}
          <Toaster />
        </SheetProvider>
      </body>
    </html>
  );
}
