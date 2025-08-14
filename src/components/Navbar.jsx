export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 fixed w-full z-50">
      <h1 className="text-2xl font-bold text-blue-400">MyPortfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
