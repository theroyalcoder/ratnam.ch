import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="max-w-2xl mx-auto py-16 px-0">
            <h1 className="text-5xl font-extrabold text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2 mb-12 text-center break-words">Lass uns zusammenarbeiten!</h1>
            <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 mb-8 text-lg text-black text-center">
                Du kannst mich direkt per E-Mail erreichen:<br />
                <a href="mailto:contact@ratnam.ch" className="font-extrabold text-blue-700 underline">contact@ratnam.ch</a>
            </div>
            <Link href="/privacy" className="text-lg font-extrabold text-black bg-yellow-300 px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-400 inline-block">Datenschutzerklärung</Link>
        </main>
    );
}
