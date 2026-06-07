import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Results from "@/components/Results";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Challenge />
      <Solution />
      <Features />
      <Results />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
