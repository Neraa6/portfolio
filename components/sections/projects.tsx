"use client";

import { Github, Play, Code2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "lock",
    title: "Smart Door Lock",
    description: "Smart security system where registered RFID cards unlock doors automatically using ESP32 controllers, servo motors, and real-time access logging.",
    tech: ["ESP32", "RFID", "IoT", "C++"],
    features: ["RFID authentication", "Real-time logging", "Automatic locking"],
    github: "https://github.com/Neraa6",
    demo: "#",
    filename: "SmartLock.cpp",
    code: `// ESP32 RFID Door Lock
#include <SPI.h>
#include <MFRC522.h>

void setup() {
  SPI.begin();
  rfid.PCD_Init();
  lockServo.attach(13);
  lockServo.write(0); // Locked
}`
  },
  {
    id: "iflix",
    title: "Iflix Clone",
    description: "Movie streaming database clone featuring full user authentication, dashboard administration, search indexing, and responsive media players.",
    tech: ["HTML/CSS", "JavaScript", "Express.js", "MySQL"],
    features: ["Secure JWT Auth", "Admin Dashboard", "RESTful Movie API"],
    github: "https://github.com/Neraa6",
    demo: "#",
    filename: "movieRouter.js",
    code: `// Movie Stream API Route
router.get('/stream/:id', auth, async (req, res) => {
  const movie = await db.query(
    'SELECT url FROM movies WHERE id = ?', 
    [req.params.id]
  );
  res.json({ url: movie[0].url });
});`
  },
  {
    id: "catering",
    title: "Catering Online",
    description: "Modern food ordering platform featuring direct cart checkout, order trackers, multi-merchant dashboard analytics, and Supabase integration.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    features: ["Cart & Checkout", "Dashboard Analytics", "Database Sync"],
    github: "https://github.com/Neraa6",
    demo: "#",
    filename: "orders.ts",
    code: `// Supabase Order Handler
export async function createOrder(cart: CartItem[], uid: string) {
  return await supabase
    .from('orders')
    .insert({
      customer_id: uid,
      items: cart,
      status: 'pending'
    });
}`
  },
  {
    id: "pokemon",
    title: "Pokemon API",
    description: "High-performance REST API serving Pokemon metadata, featuring optimized search queries and custom filtering endpoints.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    features: ["Fuzzy queries", "Advanced filtering", "Speed caching"],
    github: "https://github.com/Neraa6",
    demo: "#",
    filename: "server.js",
    code: `// Aggregated Search Route
app.get('/api/pokemon', async (req, res) => {
  const { type, search } = req.query;
  let query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  res.json(await Pokemon.find(query).limit(12));
});`
  },
];

export function Projects() {
  return (
    <div className="w-full space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-accent-secondary">Selected Work</h2>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-secondary border border-khaki/30 p-6 rounded-3xl flex flex-col justify-between hover:border-accent/40 transition-colors shadow-sm text-left gap-6 group"
          >
            {/* Top Side: Description & Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-accent-secondary tracking-tight">
                  {proj.title}
                </h3>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {proj.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-[#F6F3EB] border border-khaki/30 text-[9px] font-mono text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {proj.description}
              </p>

              {/* Bullet features */}
              <ul className="space-y-1 pl-1">
                {proj.features.map((feat, i) => (
                  <li key={i} className="text-[11px] text-text-secondary flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Side: Simulated Code Preview */}
            <div className="flex flex-col rounded-2xl border border-khaki/20 bg-[#FAF8F5] overflow-hidden relative min-h-[140px] group-hover:border-accent/20 transition-colors">
              <div className="flex items-center justify-between px-3 py-2 bg-[#F6F3EB] border-b border-khaki/10">
                <div className="flex items-center gap-1.5">
                  <Circle className="w-2 h-2 fill-khaki/60 stroke-none" />
                  <Circle className="w-2 h-2 fill-khaki/60 stroke-none" />
                  <Circle className="w-2 h-2 fill-khaki/60 stroke-none" />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-text-secondary">
                  <Code2 className="w-3 h-3 text-accent" />
                  <span>{proj.filename}</span>
                </div>
                <div className="w-6" />
              </div>
              <div className="p-3 font-mono text-[9px] leading-relaxed overflow-x-auto text-left select-none flex-grow text-accent-secondary/80">
                <pre><code>{proj.code}</code></pre>
              </div>
            </div>

            {/* Bottom Side: Actions */}
            <div className="flex gap-3 pt-2">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-grow">
                <Button variant="secondary" size="sm" className="w-full text-xs font-mono h-9 bg-[#F6F3EB] border border-khaki/30 text-text-primary hover:bg-khaki/10 shadow-none interactive">
                  <Github className="w-3.5 h-3.5" /> Source
                </Button>
              </a>
              {proj.demo !== "#" && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex-grow">
                  <Button variant="outline" size="sm" className="w-full text-xs font-mono h-9 border border-accent text-accent hover:bg-accent/5 shadow-none interactive">
                    <Play className="w-3.5 h-3.5" /> Live
                  </Button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}