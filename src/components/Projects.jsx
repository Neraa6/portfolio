import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A personal website to showcase my work." },
    { title: "E-commerce App", desc: "Online shop with payment integration." },
    { title: "Blog Platform", desc: "A blog with markdown support." }
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
