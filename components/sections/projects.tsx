"use client";

import { Github, Play, Code2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "todo-app",
    title: "todo-app",
    description: "A sleek task management app with real-time updates, and a clean UI built using next.js and tailwindcss",
    tech: ["Next.js", "TailwindCSS",],
    features: ["Real-time Sync", "Drag & Drop UI"],
    github: "https://github.com/Neraa6/todo-list",
    demo: "#",  
  },
  {
    id: "ecommerce",
    title: "Mini e-commerce",
    description: "A compact e-commerce platform with product management, and a clean UI built using tailwindcss",
    tech: ["React", "TailwindCSS",],
    features: ["User Authentication", "Product Management",],
    github: "https://github.com/Neraa6",
    demo: "#",
  },
  {
    id: "catering",
    title: "Catering Online",
    description: "Modern food ordering platform featuring direct cart checkout, order trackers, multi-merchant dashboard analytics, and Supabase integration.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    features: ["Cart & Checkout", "Dashboard Analytics", "Database Sync"],
    github: "https://github.com/Neraa6/catering",
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
    id: "IoT Dashboard",
    title: "IoT Dashboard",
    description: "Interactive dashboard for monitoring and controlling IoT devices, featuring real-time data visualization and automated alerts.",
    tech: ["Laravel", "MQTT", "shiftr.io"],
    features: ["Real-time Monitoring", "Device Control", "Alert Notifications"],
    github: "https://github.com/Neraa6/iot-dashboard",
    demo: "#",
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
                  {proj.tech.map((t) => (
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