"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-0">
      <main className="flex flex-col w-full max-w-6xl mx-auto gap-16 items-center py-12">
        <div className="flex flex-col md:flex-row gap-16 w-full">
          {/* Linke Seite: Text und Buttons */}
          <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
            <span className="bg-red-400 text-black border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2 font-extrabold text-lg uppercase mb-4">Engineering · Development · Team-Player</span>
            <div className="text-3xl font-extrabold text-black mb-2">Ich kann dein Unternehmen dabei unterstützen</div>
            <h1 className="text-5xl font-extrabold text-black bg-blue-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-2 py-1 mb-4">Aufgaben zu bewältigen und Lösungen zu finden.</h1>
            <div className="flex gap-6 mt-2">
              <Link href="/curriculum" className="bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 font-extrabold text-lg hover:bg-yellow-400">Lebenslauf</Link>
              <Link href="/projects" className="bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 font-extrabold text-lg hover:bg-yellow-400">Projekte</Link>
            </div>
          </div>
          {/* Rechte Seite: Bild */}
          <div className="flex-1 min-w-[200px] flex justify-center items-center">
            <Image src="/profile.png" alt="profile picture" width={320} height={320} priority className="border-4 border-black shadow-[8px_8px_0_0_#000]" />
          </div>
        </div>

        {/* Über mich Block unterhalb */}
        <div className="w-full max-w-3xl mx-auto mt-12">
          <div className="w-full flex flex-col items-center text-center">
            <strong className="text-5xl font-extrabold text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2 mb-6">Über mich</strong>
            <div className="text-2xl font-bold text-black mb-4">Hallo, ich bin Anu – Informatiker aus Leidenschaft mit einem klaren Fokus auf Technologie und Innovation.</div>
            <div className="text-lg text-black mb-4">Als IT-Systemingenieur sorge ich für reibungslos laufende IT-Systeme und bringe fundierte Erfahrung in <strong>Microsoft 365, Networking und IT-Security</strong> mit. Mein Anspruch: Systeme nicht nur betreiben, sondern sie sicherer, effizienter und zukunftsfähiger machen.</div>
            <div className="text-lg text-black mb-4">Ich bin hungrig nach mehr Wissen – und bereit, die digitale Zukunft aktiv mitzugestalten.</div>
            <div className="mt-6 flex gap-6 justify-center">
              <a className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2" href="https://www.linkedin.com/in/anusanth-nagaratnam-130324a2/" target="_blank">
                <i className="bi bi-linkedin" style={{ fontSize: '2.5rem', color: '#0A66C2' }}></i>
              </a>
              <a className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2" href="https://github.com/theroyalcoder" target="_blank">
                <i className="bi bi-github" style={{ fontSize: '2.5rem', color: '#000' }}></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
