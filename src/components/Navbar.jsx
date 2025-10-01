export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center fixed w-full z-50">
      <h1 className="text-2xl font-bold">TravelCo</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-secondary transition">Home</a>
        </li>
        <li>
          <a href="#destinations" className="hover:text-secondary transition">Destinations</a>
        </li>
        <li>
          <a href="#booking" className="hover:text-secondary transition">Booking</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-secondary transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
