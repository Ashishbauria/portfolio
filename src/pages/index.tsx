import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen text-white scroll-smooth snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-slate-500/20 scrollbar-thumb-[#2c2c2c]">
      <Header />
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </main>
  );
}
