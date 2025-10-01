export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gray-50 text-center">
      <h3 className="text-3xl font-bold mb-6">Book Your Trip</h3>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Destination"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="date"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition w-full"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
