export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      <a 
        href="mailto:youremail@example.com" 
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Send Email
      </a>
    </section>
  );
}
