"use client";
import Counter from "./component/Counter";
import Link from "next/link";
import Image from "next/image";
import nextImg from "@/app/profile.png";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link
          href="/curriculum"
          className="text-blue-500 hover:underline"
        >
          Lebenslauf
        </Link>

        <Image
          src={nextImg}
          alt="profile picture"
          width={300}
          height={300}
          priority
        />

        <button 
        onClick={() => alert('Button clicked!')} 
        className="btn btn-primary">Click Me
        </button>

        <Counter title="Counter #1" />
        <Counter title="Counter #2" />
        <Counter title="Counter #3" />



      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
