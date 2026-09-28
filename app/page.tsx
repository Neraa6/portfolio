import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ParticleBg } from "@/components/effects/particle-bg";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF7F2] neo-grid-bg">
      {/* Neo Grid & Geometric Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBg />
      </div>

      {/* Main Content Flow */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12">
          <Hero />
        </section>

        <section id="about" className="py-20 sm:py-28 border-t-4 border-black">
          <About />
        </section>

        <section id="skills" className="py-20 sm:py-28 border-t-4 border-black">
          <Skills />
        </section>

        <section id="projects" className="py-20 sm:py-28 border-t-4 border-black">
          <Projects />
        </section>

        <section id="experience" className="py-20 sm:py-28 border-t-4 border-black">
          <Experience />
        </section>

        <section id="contact" className="py-20 sm:py-28 border-t-4 border-black">
          <Contact />
        </section>
      </main>
    </div>
  );
}