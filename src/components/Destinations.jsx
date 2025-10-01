const destinations = [
  { name: 'Paris', image: 'https://source.unsplash.com/400x300/?paris' },
  { name: 'Bali', image: 'https://source.unsplash.com/400x300/?bali' },
  { name: 'New York', image: 'https://source.unsplash.com/400x300/?newyork' },
  { name: 'Tokyo', image: 'https://source.unsplash.com/400x300/?tokyo' },
];

export default function Destinations() {
  return (
    <section className="py-20 bg-white text-center">
      <h3 className="text-3xl font-bold mb-12">Popular Destinations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {destinations.map((dest) => (
         <div
  key={dest.name}
  className="rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
>
  <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
  <h4 className="text-xl font-semibold mt-4 mb-2">{dest.name}</h4>
  <button className="mb-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
    Explore
  </button>
</div>

        ))}
      </div>
    </section>
  );
}
