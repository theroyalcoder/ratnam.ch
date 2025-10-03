import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>Contact Us</h1>
            <form style={{ maxWidth: 400 }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="name">Name</label><br />
                    <input id="name" name="name" type="text" required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" name="email" type="email" required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message">Message</label><br />
                    <textarea id="message" name="message" rows={5} required style={{ width: '100%' }} />
                </div>
                <button type="submit">Send</button>
            </form>
            <br></br>
            <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">Datenschutzerklärung</Link>
          
        </main>
    );
}