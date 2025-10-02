import { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      description: "The trip to Bali was absolutely amazing! The attention to detail and personalized service made our vacation unforgettable. I can't wait to book our next adventure with this travel agency."
    },
    {
      id: 2,
      name: "Michael Chen",
      description: "Outstanding experience from start to finish. The team helped us plan the perfect European tour, and everything was seamless. Their expertise and local connections made all the difference."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      description: "I've traveled with many agencies, but none compare to this one. The customer service is exceptional, and they truly understand what makes a trip special. Highly recommended for anyone seeking a premium experience."
    },
    {
      id: 4,
      name: "David Wilson",
      description: "Our family vacation to Japan was perfectly orchestrated. Every detail was taken care of, allowing us to focus on creating memories. The guides were knowledgeable and friendly. Five stars!"
    },
    {
      id: 5,
      name: "Olivia Parker",
      description: "Booking through this agency was the best decision we made. They helped us find hidden gems and provided insights we never would have discovered on our own. Exceptional value and service."
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Say
        </h2>
        
        <div className="relative group">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 mx-2 md:mx-4">
                    <div className="text-indigo-600 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 italic">
                      "{review.description}"
                    </p>
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4">
                        <h4 className="text-xl font-bold text-gray-800">{review.name}</h4>
                        <p className="text-indigo-600">Satisfied Traveler</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-50"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-50"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;