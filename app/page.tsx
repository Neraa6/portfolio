import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ParticleBg } from "@/components/effects/particle-bg";
import { GradientOrb } from "@/components/effects/gradient-orb";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Light-theme soft background elements */}
      <div className="absolute inset-0 grid-bg z-0 pointer-events-none">
        <ParticleBg />
        <GradientOrb className="top-10 left-10" size="xl" />
        <GradientOrb className="top-1/3 right-10" size="xl" />
        <GradientOrb className="bottom-1/4 left-10" size="lg" />
      </div>

      {/* Main Content Flow */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16">
          <Hero />
        </section>

        <section id="about" className="py-24 sm:py-32 border-t border-khaki/20">
          <About />
        </section>

        <section id="skills" className="py-24 sm:py-32 border-t border-khaki/20">
          <Skills />
        </section>

        <section id="projects" className="py-24 sm:py-32 border-t border-khaki/20">
          <Projects />
        </section>

        <section id="experience" className="py-24 sm:py-32 border-t border-khaki/20">
          <Experience />
        </section>

        <section id="contact" className="py-24 sm:py-32 border-t border-khaki/20">
          <Contact />
        </section>
      </main>
    </div>
  );
}