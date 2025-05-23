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
      logo: "/visa-logo.png"
    },
    {
      name: "Nestlé",
      logo: "/nestle-logo.png"
    },
    {
      name: "Mondelez",
      logo: "/mondelez-logo.png"
    },
    {
      name: "Vodafone",
      logo: "/vodafone-logo.png"
    },
    {
      name: "Pepsi",
      logo: "/pepsi-logo.png"
    },
    {
      name: "Airtel",
      logo: "/airtel-logo.png"
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
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-12 w-auto object-contain"
                />
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