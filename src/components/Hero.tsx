"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-black min-h-[700px] flex flex-col items-center justify-start pt-12 pb-0 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#222"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background Circle */}
      <div className="absolute left-1/2 top-[180px] sm:top-[260px] -translate-x-1/2 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-purple-200/60 to-purple-400/30 rounded-full blur-2xl z-0" />

      {/* Text Section */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mt-2">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
          Let's Build Together
        </h1>
        <p className="text-white text-lg sm:text-xl font-medium opacity-80 mb-6">
          Sketch it. Code it. Launch it — with us.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap gap-3 justify-center mb-8">
          <a
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-purple-100 transition text-base border border-neutral-200"
            href="https://www.instagram.com/_sketch2code_/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
            Instagram
          </a>
          <a
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-purple-100 transition text-base border border-neutral-200"
            href="https://www.linkedin.com/in/udayan-majumder-73184a245/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Phone Image */}
      <div
        className="relative z-20 flex justify-center items-center w-full px-4"
        style={{ minHeight: "400px" }}
      >
        <Image
          src="/images/iPhone 12 Pro (Wooden Hands).png"
          alt="Hand holding iPhone"
          width={900}
          height={1200}
          priority
          className="object-contain drop-shadow-2xl w-full h-auto max-h-[80vh]"
        />
      </div>

      {/* Blend Pipes (hidden on mobile) */}
      <div className="hidden sm:block">
        <div className="absolute left-[5%] top-[-40px] w-[260px] h-[260px] opacity-80 z-10 pointer-events-none">
          <Image
            src="/images/Blend pipe-1.png"
            alt="Blend pipe 1"
            width={260}
            height={260}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute right-[5%] top-[20px] w-[260px] h-[260px] opacity-80 z-10 pointer-events-none">
          <Image
            src="/images/Blend pipe-2.png"
            alt="Blend pipe 2"
            width={260}
            height={260}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Ellipse (scaled down on mobile) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] opacity-60 z-10 pointer-events-none">
        <Image
          src="/images/Ellipse 6.png"
          alt="Ellipse 6"
          width={600}
          height={600}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Let's connect button */}
      <a
        className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 px-5 py-2 rounded-lg bg-purple-400 text-white font-semibold shadow-lg text-sm sm:text-base z-30"
        href="https://www.instagram.com/_sketch2code_/"
      >
        Let's connect
      </a>
    </section>
  );
}
