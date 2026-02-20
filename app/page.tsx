import FeaturedWork from "@/components/FeaturedWork";
import Hero from "../components/Hero";
import LuxuryQuote from "../components/QuoteSection"; // Import the luxury version
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <LuxuryQuote /> 
      <FeaturedWork/>
      <Services/>
      <Process/>
      {/* You can add more sections below later */}
    </main>
  );
}