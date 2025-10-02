import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularDestinations from './components/Destinations';
import Statistics from './components/Statistics';
import CustomerReviews from './components/CustomerReviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PopularDestinations />
      <Statistics />
      <CustomerReviews />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;