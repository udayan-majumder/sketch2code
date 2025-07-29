"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-4 md:px-12 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-start w-full md:w-auto">
          <h3 className="text-2xl font-bold mb-2">
            Questions? We're just a DM away.
          </h3>

          <a
            href="mailto:udayanmajumder1983@gmail.com"
            className="text-base text-white/80 hover:underline"
          >
            udayanmajumder1983@gmail.com
          </a>

          <a
            href="mailto:sutapamajum90@gmail.com"
            className="text-base text-white/80 hover:underline"
          >
            sutapamajum90@gmail.com
          </a>

          <a
            href="https://instagram.com/_sketch2code_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white/80 hover:underline"
          >
            @_sketch2code_
          </a>

          <a
            href="https://github.com/udayan-majumder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white/80 hover:underline"
          >
            github.com/udayan-majumder
          </a>

          <a
            href="https://www.linkedin.com/in/sutapamajumder-a732a8234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white/80 hover:underline"
          >
            linkedin.com/in/sutapamajumder
          </a>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="relative w-16 h-16 flex items-center justify-center mb-2">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
            />
          </div>
        </div>

        {/* Website Link */}
        <div className="flex flex-col items-end w-full md:w-auto">
          <a
            href="https://www.udayan.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-purple-300 hover:underline"
          >
            See our work → www.udayan.fyi
          </a>
        </div>
      </div>
    </footer>
  );
}
