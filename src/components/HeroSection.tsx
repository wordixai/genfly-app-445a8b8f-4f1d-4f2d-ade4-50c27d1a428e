import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://nomad.melbourne/wp-content/uploads/2024/12/600g-dry-aged-ribeye-smoked-tallow-gremolata-white-onion-1920x1280.jpg",
  "https://nomad.melbourne/wp-content/uploads/2022/08/PortraitExterior_NomadMelbourne_July2022_High_035-1920x1281.jpg",
  "https://nomad.melbourne/wp-content/uploads/2023/01/14-1920x1282.jpg",
  "https://nomad.melbourne/wp-content/uploads/2022/11/Nomad_InteriorsMelb_05-1-1920x1281.jpg"
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="min-h-screen flex">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 bg-dust flex items-center justify-center px-12 py-20">
        <div className="text-center max-w-md">
          <p className="text-sm tracking-wider text-charcoal mb-2">WELCOME TO</p>
          <h1 className="text-4xl md:text-5xl font-normal text-charcoal mb-12 tracking-wide">
            NOMAD MELBOURNE
          </h1>
          
          <div className="space-y-6">
            <a 
              href="#reservations" 
              className="block text-sm tracking-wider underline text-charcoal hover:text-slate transition-colors"
            >
              <strong>MAKE A RESERVATION</strong>
            </a>
            <a 
              href="/mezze/" 
              className="block text-sm tracking-wider underline text-charcoal hover:text-slate transition-colors"
            >
              <strong>MEZZE LUNCHES</strong>
            </a>
            <a 
              href="/truffle-brunch/" 
              className="block text-sm tracking-wider underline text-charcoal hover:text-slate transition-colors"
            >
              <strong>TRUFFLE BRUNCH</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Image Slider */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative h-screen overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};