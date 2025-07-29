"use client";
import Image from "next/image";

const features = [
  { label: "20,000+ of PNG & SVG graphics", available: true },
  { label: "Access to 100 million stock images", available: true },
  { label: "Upload custom icons and fonts", available: false },
  { label: "Unlimited Sharing", available: false },
  { label: "Upload graphics & video in up to 4K", available: false },
  { label: "Unlimited Projects", available: false },
  { label: "Instant Access to our design system", available: false },
  { label: "Create teams to collaborate on designs", available: false },
];

function FeatureList({
  color,
  features,
}: {
  color: string;
  features: { label: string; available: boolean }[];
}) {
  return (
    <ul className="space-y-2 mt-4">
      {features.map((f, i) => (
        <li key={i} className={`flex items-center gap-2 ${color}`}>
          {f.available ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#A78BFA" />
              <path
                d="M8 12.5l2.5 2.5 5-5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
              <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section className="w-full py-24 px-4 md:px-12 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white text-center">
          Here's What We Bring to the Table
        </h2>
        <p className="text-lg text-purple-300 text-center mb-12">
          Choose what you need, we'll handle the rest.
        </p>
        {/* Connector lines and glow */}
        <div className="relative flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="absolute left-1/2 top-0 w-[80%] h-8 -translate-x-1/2 z-0 flex justify-between items-center pointer-events-none">
            <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-md opacity-60" />
            <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-md opacity-60" />
          </div>
          {/* Box 1: Landing Pages */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col border-2 border-neutral-200 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Landing Pages</h3>
            <p className="text-base mb-4">
              We craft single-page experiences that drive clicks, leads, and
              action — optimized for speed and conversions.
            </p>
            <FeatureList color="text-purple-600" features={features} />
          </div>
          {/* Box 2: UI Designs */}
          <div className="flex-1 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-purple-400 relative z-20 scale-105">
            <h3 className="text-2xl font-bold mb-2">UI Designs</h3>
            <p className="text-base mb-4">
              We deliver clean, user-centered interfaces crafted to perfection —
              from wireframes to pixel-perfect designs.
            </p>
            <FeatureList
              color="text-white"
              features={features.map((f) => ({ ...f, available: true }))}
            />
          </div>
          {/* Box 3: Business Websites */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col border-2 border-neutral-200 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Business Websites</h3>
            <p className="text-base mb-4">
              We build responsive, custom websites that reflect your brand and
              scale with your business.
            </p>
            <FeatureList color="text-purple-600" features={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
