import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 px-8 bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 max-w-2xl">
        I'm a passionate developer with experience in building modern web applications.
      </p>
    </motion.section>
  );
}
