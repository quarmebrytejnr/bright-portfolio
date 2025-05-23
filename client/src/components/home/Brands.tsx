import { useEffect, useState } from "react";

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const brands = [
    {
      name: "Visa",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <path fill="#1a1f71" d="M83.3 23.8L73.9 56.2h-8.2L57.2 33c-1.1-2.1-2-2.8-5.2-3.7-5.2-1.4-13.6-2.7-13.6-2.7l.2-1.8h23.5c3 0 5.7 2 6.4 5.5l5.8 31.1L86.1 23.8h8.5zm34.2 21.8c0-8.6-11.9-9.1-11.8-12.9 0-1.2 1.2-2.5 3.7-2.8 1.2-.2 4.6-.3 8.4 1.5l1.5-7c-2.1-.8-4.8-1.5-8.1-1.5-8.6 0-14.6 4.6-14.7 11.1-.1 4.8 4.3 7.5 7.6 9.1 3.4 1.6 4.6 2.7 4.5 4.1-.1 2.2-2.6 3.2-5.1 3.2-4.3.1-6.8-1.2-8.8-2.1l-1.5 7.2c2 .9 5.7 1.7 9.5 1.7 9.1 0 15.1-4.5 15.1-11.5zm22.8 10.6c.7-1.9 3.4-9.4 3.4-9.4s.7-1.9 1.1-3.1l.6 2.9s1.6 7.8 2 9.6h-7.1zm10.1-32.4h-6.6c-2.1 0-3.6 1.2-4.4 2.8L121.7 56.2h8.5s1.4-3.9 1.7-4.7h10.4c.2 1.1 1 4.7 1 4.7h7.5L140.4 23.8zm-97.5 0L34.6 56.2h-8.5L17.8 31.6c-1.1-2.7-2.1-3.7-5.5-4.8C7.6 25.4 2.3 24.1 2.3 24.1l.2-1.8h14.9c3.8 0 7.2 2.5 8.1 6.8l7.4 39.1L51.2 23.8h8.6z"/>
        </svg>
      )
    },
    {
      name: "Nestlé",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <text x="20" y="45" fontSize="24" fontWeight="bold" fill="#E30613" fontFamily="Arial, sans-serif">
            Nestlé
          </text>
        </svg>
      )
    },
    {
      name: "Mondelez",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <text x="15" y="45" fontSize="20" fontWeight="bold" fill="#663399" fontFamily="Arial, sans-serif">
            mondelez
          </text>
        </svg>
      )
    },
    {
      name: "Vodafone",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <circle cx="30" cy="40" r="15" fill="#E60000"/>
          <circle cx="30" cy="40" r="8" fill="white"/>
          <text x="55" y="45" fontSize="20" fontWeight="bold" fill="#E60000" fontFamily="Arial, sans-serif">
            Vodafone
          </text>
        </svg>
      )
    },
    {
      name: "Mirinda",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <text x="25" y="45" fontSize="22" fontWeight="bold" fill="#FF6600" fontFamily="Arial, sans-serif">
            Mirinda
          </text>
        </svg>
      )
    },
    {
      name: "Airtel",
      logo: (
        <svg viewBox="0 0 192 80" className="h-8 w-auto">
          <path fill="#E60000" d="M20 25h15l10 20-5 10-10-15-10 15z"/>
          <text x="50" y="45" fontSize="20" fontWeight="bold" fill="#E60000" fontFamily="Arial, sans-serif">
            airtel
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-6">
            Trusted by Leading Brands
          </h3>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-full h-12">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Delivering data-driven insights for enterprise clients across multiple industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;