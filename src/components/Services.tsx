"use client";
import Image from "next/image";

const landingPageFeatures = [
  { label: "Mobile-friendly and responsive design", available: true },
  { label: "Deployed under ₹14,999", available: true },
  { label: "Unlimited design mockups", available: true },
  { label: "Free modification & revisions", available: true },
  { label: "Basic contact form integration", available: true },
  { label: "Free maintenance", available: true },
  { label: "Single-page optimized for conversions", available: true },
  { label: "Deployed to your custom domain", available: true },
];

const uiDesignFeatures = [
  { label: "Wireframes to high-fidelity UI", available: true },
  { label: "Unlimited mockups & free revisions", available: true },
  { label: "Mobile-first, clean layouts", available: true },
  { label: "Custom iconography & illustrations", available: true },
  { label: "Design systems & reusable components", available: true },
  { label: "Export-ready assets & guidelines", available: true },
  { label: "Delivered in Figma or preferred tool", available: true },
  { label: "Fast turnaround with feedback loops", available: true },
];

const businessWebsiteFeatures = [
  { label: "Responsive multi-page websites", available: true },
  { label: "Custom domain setup included", available: true },
  { label: "Basic CMS integration (on request)", available: true },
  { label: "Free ongoing maintenance", available: true },
  { label: "Fast performance & SEO-friendly", available: true },
  { label: "Under ₹14,999 for single landing page", available: true },
  { label: "Client-ready handoff with documentation", available: true },
  { label: "Unlimited design iterations", available: true },
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

        <div className="relative flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Box 1: Landing Pages */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col border-2 border-neutral-200 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Landing Pages</h3>
            <p className="text-base mb-4">
              High-converting single-page sites under ₹14,999 — responsive,
              optimized, and built to perform.
            </p>
            <FeatureList
              color="text-purple-600"
              features={landingPageFeatures}
            />
          </div>

          {/* Box 2: UI Designs */}
          <div className="flex-1 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-purple-400 relative z-20 scale-105">
            <h3 className="text-2xl font-bold mb-2">UI Designs</h3>
            <p className="text-base mb-4">
              Clean, modern user interfaces — unlimited iterations and mockups
              until you’re satisfied.
            </p>
            <FeatureList color="text-white" features={uiDesignFeatures} />
          </div>

          {/* Box 3: Business Websites */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col border-2 border-neutral-200 relative z-10">
            <h3 className="text-2xl font-bold mb-2">Business Websites</h3>
            <p className="text-base mb-4">
              Responsive, scalable websites built for growth — free maintenance
              and full control.
            </p>
            <FeatureList
              color="text-purple-600"
              features={businessWebsiteFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
