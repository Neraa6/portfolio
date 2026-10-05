import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ParticleBg } from "@/components/effects/particle-bg";

export default function Home() {
  const tickerItems = [
    "★ FULL STACK WEB DEVELOPER",
    "★ IOT & EMBEDDED HARDWARE",
    "★ NETWORK INFRASTRUCTURE",
    "★ NEXT.JS & LARAVEL & SUPABASE",
    "★ BOGOR, INDONESIA",
    "★ OPEN FOR MISSIONS & PROJECTS",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF7F2] paper-texture">
      {/* Subtle Paper Noise Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBg />
      </div>

      {/* Main Spacious Editorial Container (No Outer Page Box Border) */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 bg-transparent">
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-24">
          <Hero />
        </section>

        {/* Clean Marquee Accent Strip */}
        <div className="w-full bg-[#D8FF45] border-y border-[#111111] py-3 overflow-hidden select-none -mx-4 sm:-mx-8 md:-mx-12 px-4 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] shadow-sm">
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-xs font-mono font-black text-[#111111] uppercase tracking-widest">
            {tickerItems.concat(tickerItems).concat(tickerItems).map((item, idx) => (
              <span key={idx} className="inline-block">
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="py-20 sm:py-32 border-t border-[#111111]/15">
          <About />
        </section>

        <section id="skills" className="py-20 sm:py-32 border-t border-[#111111]/15">
          <Skills />
        </section>

        <section id="projects" className="py-20 sm:py-32 border-t border-[#111111]/15">
          <Projects />
        </section>

        <section id="experience" className="py-20 sm:py-32 border-t border-[#111111]/15">
          <Experience />
        </section>

        <section id="contact" className="py-20 sm:py-32 border-t border-[#111111]/15">
          <Contact />
        </section>
      </main>
    </div>
  );
}