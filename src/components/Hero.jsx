export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl font-bold">Hi, I'm <span className="text-blue-400">Your Name</span></h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        I’m a Web Developer passionate about creating modern and responsive web applications.
      </p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        View My Work
      </a>
    </section>
  );
}
