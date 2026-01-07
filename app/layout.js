import {
  Geist,
  Geist_Mono,
  Fraunces,
  Montserrat,
  La_Belle_Aurore,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/cozy-corner-logo.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const laBelleAurore = La_Belle_Aurore({
  variable: "--font-la-belle-aurore",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "The Cozy Corner",
  description:
    "A cozy online bookstore with hand-picked book recommendations about web programming for every beginner and expert developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable} 
        ${fraunces.variable} 
        ${montserrat.variable}
        ${laBelleAurore.variable} 
        antialiased bg-zinc-50`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-glass backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3 mx-auto max-w-6xl w-full">
            <div className="relative h-10 w-10">
              <Image
                className="object-contain"
                src={logo}
                alt="The Cozy Corner Logo"
                fill={true}
                priority={true}
              />
            </div>
            <span className="text-xl text-black font-script">
              The Cozy Corner
            </span>
          </div>
          <nav className="space-x-4 text-sm text-black font-medium font-body uppercase">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/books">Books</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-12 md:py-20 text-primary antialiased">{children}</main>

        <footer className="text-center text-sm text-primary/60 py-6 font-body">
          © 2026 The Cozy Corner
        </footer>
      </body>
    </html>
  );
}
