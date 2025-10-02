const PopularDestinations = () => {
  const destinations = [
    { name: 'Paris', image: '/images/eiffel tower.jpg' },
    { name: 'Bali', image: '/images/bali.jpg' },
    { name: 'New York', image: '/images/new york.jpg' },
    { name: 'Tokyo', image: '/images/tokyo.jpg' }
  ];

  return (
    <section id="destinations" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-bold mb-12">Popular Destinations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mt-4 mb-2">{dest.name}</h4>
            <button className="mb-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;