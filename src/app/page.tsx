import Hero from "@/components/sections/Hero";
import FeaturedEvents from "@/components/sections/FeaturedEvents";
import AboutCommittee from "@/components/sections/AboutCommittee";
import SevaShowcase from "@/components/sections/SevaShowcase";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32 py-12 md:py-24">
        <FeaturedEvents />
        <SevaShowcase /> 
        <AboutCommittee />
      </div>
    </main>
  );
}