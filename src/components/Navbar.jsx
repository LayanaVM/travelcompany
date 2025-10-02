import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center fixed w-full z-50">
      <h1 className="text-2xl font-bold">TravelCo</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-secondary transition">Home</a>
        </li>
        <li className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center hover:text-secondary transition"
          >
            Destinations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 transition-all duration-300 z-50 opacity-100 transform translate-y-0">
              <a 
                href="#international" 
                className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                International Trips
              </a>
              <button className="w-full text-left px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition flex justify-between items-center">
                India Trips
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
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