"use client";
import Image from "next/image";

const benefits = [
  "Websites starting just from ₹14999",
  "Unlimited and free modifications",
  "Free Maintenance",
  "Unlimited Design Mockups",
];

export default function WhyUs() {
  return (
    <section className="w-full py-24 px-4 md:px-12 bg-white relative z-10">
      {/* Large soft purple circle background */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-purple-200/60 to-purple-400/30 rounded-full blur-2xl z-0" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black text-left">
            Why Us?
          </h2>
          <ul className="space-y-6">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-lg text-black"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#A78BFA" />
                  <path
                    d="M8 12.5l2.5 2.5 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Why Us section image */}
        <div className="h-full flex-1 flex justify-center items-center w-full h-full">
          <div className="h-[30%] w-full flex justify-center items-center bg-blue-500"></div>
          <Image
            src="/images/why-us-hand.png"
            alt="Why Us section hand holding phone"
            width={900}
            height={1200}
            className="object-contain drop-shadow-2xl w-full h-auto max-h-[90vh]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
 