import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dein IT-Systemingenieur & Entwickler | Anu Ratnam",
  description: "Self Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="font-sans min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="w-full py-4 shadow flex items-center">
          <div className="flex w-full max-w-6xl mx-auto items-center justify-between px-4">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white hover:underline">Anu Ratnam</Link>
            <nav className="flex gap-8 justify-end">
              <Link href="/" className="text-navlink">Home</Link>
              <Link href="/curriculum" className="text-navlink">Lebenslauf</Link>
              <Link href="/projects" className="text-navlink">Projekte</Link>
              <Link href="/contact" className="text-navlink">Kontakt</Link>
            </nav>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Anu Ratnam. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
