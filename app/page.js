"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2 flex flex-col w-full max-w-5xl mx-auto gap-12 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-12 w-full">
          {/* Linke Seite: Text und Buttons */}
          <div className="flex-1 flex flex-col gap-4 items-center sm:items-start">
            <div className="mb-4">
              <span className="badge my-gradient text-white uppercase rounded-full px-3 py-1 inline-block">
                Engineering · Development · Team-Player
              </span>
            </div>
            <div className="text-2xl text-gray-500 dark:text-white font-light">
              Ich kann dein Unternehmen dabei unterstützen
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient inline-block leading-tight py-1">
              Aufgaben zu bewältigen und Lösungen zu finden.
            </h1>
            <div className="flex gap-4 mt-4">  
              <Link href="/curriculum" className="rounded-lg bg-blue-600 text-white px-6 py-2 font-semibold shadow hover:bg-blue-700 transition-colors">Lebenslauf</Link>
              <Link href="/projects" className="rounded-lg bg-white text-black px-6 py-2 font-semibold shadow hover:bg-blue-700 transition-colors">Projekte</Link>
            </div>
          </div>
          {/* Rechte Seite: Bild */}
          <div className="flex-1 min-w-[200px] flex justify-center items-center">
            <Image src="/profile.png" alt="profile picture" width={300} height={300} priority />
          </div>
        </div>

        {/* Über mich Block unterhalb */}
        <div className="w-full max-w-3xl mx-auto mt-8">
          <div className="w-full flex flex-col items-center text-center">
            <strong className="text-gradient text-5xl font-bold mb-4">Über mich</strong>
            <div className="text-xl mb-2 text-center">Hallo, ich bin Anu – Informatiker aus Leidenschaft mit einem klaren Fokus auf Technologie und Innovation.</div>
            <div className="text-l mb-2 text-center">Als IT-Systemingenieur sorge ich für reibungslos laufende IT-Systeme und bringe fundierte Erfahrung in <strong>Microsoft 365, Networking und IT-Security</strong> mit. Mein Anspruch: Systeme nicht nur betreiben, sondern sie sicherer, effizienter und zukunftsfähiger machen.</div>
            <div className="text-l mb-2 text-center">Ich bin hungrig nach mehr Wissen – und bereit, die digitale Zukunft aktiv mitzugestalten.</div>
            <div className="mt-4 flex gap-4 justify-center">
              <a className="text-gradient" href="https://www.linkedin.com/in/anusanth-nagaratnam-130324a2/" target="_blank">
                <i className="bi bi-linkedin" style={{ fontSize: '2.5rem' }}></i>
              </a>
              <a className="text-gradient" href="https://github.com/theroyalcoder" target="_blank">
                <i className="bi bi-github" style={{ fontSize: '2.5rem' }}></i>
              </a>
            </div>
          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
