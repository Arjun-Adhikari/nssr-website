import type { Metadata } from "next";
import { TeamTabs } from "@/components/team/team-tabs";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated researchers working to bridge the gap between academic curiosity and scientific excellence in Nepal.",
};

export default function TeamPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <header className="team-hero bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-6 text-white leading-tight">
            Our <span className="italic font-light text-blue-300">Team</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg font-light leading-relaxed">
            Meet the dedicated researchers working to bridge the gap between
            academic curiosity and scientific excellence in Nepal.
          </p>
        </div>
      </header>

      {/* 2. SPLIT VIEW LAYOUT */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <TeamTabs />
      </div>
    </>
  );
}