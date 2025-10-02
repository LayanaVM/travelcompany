import { useState, useEffect } from 'react';

const Statistics = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const startCounters = () => {
    // reset counters to 0 before starting animation
    setCount1(0);
    setCount2(0);

    // Animate first counter from 0 to 100
    const timer1 = setInterval(() => {
      setCount1(prev => {
        if (prev >= 100) {
          clearInterval(timer1);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Animate second counter from 0 to 20
    const timer2 = setInterval(() => {
      setCount2(prev => {
        if (prev >= 20) {
          clearInterval(timer2);
          return 20;
        }
        return prev + 1;
      });
    }, 100);
  };

  useEffect(() => {
    startCounters(); // run on first render
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
      onMouseEnter={startCounters} // restart animation on hover
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* First Counter */}
          <div className="flex flex-col items-center justify-center mb-10 md:mb-0 w-full md:w-auto">
            <div className="text-5xl md:text-6xl font-bold text-indigo-700 mb-2">
              {count1}+
            </div>
            <div className="text-lg md:text-xl text-gray-600">
              Happy Customers
            </div>
          </div>

          {/* Second Counter */}
          <div className="flex flex-col items-center justify-center w-full md:w-auto">
            <div className="text-5xl md:text-6xl font-bold text-indigo-700 mb-2">
              {count2}+
            </div>
            <div className="text-lg md:text-xl text-gray-600">
              Available Packages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
