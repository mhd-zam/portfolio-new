import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "../components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 text-foreground">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <Metrics />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
