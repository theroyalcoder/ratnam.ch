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
      <body className="font-sans min-h-screen flex flex-col bg-yellow-50">
        {/* Header / Navigation */}
        <header className="w-full py-6 border-b-4 border-black bg-blue-400 shadow-[8px_8px_0_0_#000]">
          <div className="flex w-full max-w-6xl mx-auto items-center justify-between px-4">
            <Link href="/" className="text-4xl font-extrabold text-black bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000]">Anu Ratnam</Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-lg font-extrabold text-black bg-yellow-300 px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-400">Home</Link>
              <Link href="/curriculum" className="text-lg font-extrabold text-black bg-yellow-300 px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-400">Lebenslauf</Link>
              <Link href="/projects" className="text-lg font-extrabold text-black bg-yellow-300 px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-400">Projekte</Link>
              <Link href="/contact" className="text-lg font-extrabold text-black bg-yellow-300 px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-400">Kontakt</Link>
            </nav>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-6 border-t-4 border-black bg-blue-400 text-black text-lg font-extrabold text-center shadow-[8px_8px_0_0_#000]">
          &copy; {new Date().getFullYear()} Anu Ratnam. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}