"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex-none bg-white flex flex-col items-center justify-center py-3 sm:py-4 md:py-6 border-b border-neutral-200 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-none">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
            <Image
              src="/images/black-logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
