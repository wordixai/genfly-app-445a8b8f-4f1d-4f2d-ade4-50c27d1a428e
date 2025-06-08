import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuImages = [
  "https://nomad.melbourne/wp-content/uploads/2022/09/PT_20220524_Nomad_Melbourne28360-1920x1280.jpg",
  "https://nomad.melbourne/wp-content/uploads/2024/12/Market-fish-saffron-potatoes-runner-beans-shellfish-sauce-1280x1920.jpg",
  "https://nomad.melbourne/wp-content/uploads/2022/08/Zucchini_flowers_01-1920x1302.jpg"
];

export const MenuSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  return (
    <div id="menu">
      {/* Menu Header */}
      <section className="flex">
        <div className="w-full md:w-1/2 bg-charcoal flex items-center justify-center py-20 px-12">
          <h1 className="text-4xl md:text-5xl font-normal text-white text-center tracking-wide">
            Menu
          </h1>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-96 overflow-hidden">
            {menuImages.map((image, index) => (
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
            
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">SNACKS</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Oysters of the day, our Worcestershire <sup className="text-xs">GF DF H</sup></span>
                    <span className="italic">7/42/82</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smoked king salmon basturma, apple, salmon roe <sup className="text-xs">GF H</sup></span>
                    <span className="italic">9ea</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seared kangaroo cracker, rose harissa, beetroot <sup className="text-xs">DF</sup></span>
                    <span className="italic">9ea</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wood fired flatbread, our za'atar <sup className="text-xs">DF V H</sup></span>
                    <span className="italic">13</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">SMALLS</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>NOMAD charcuterie selection <sup className="text-xs">GF</sup></span>
                    <span className="italic">21/42</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pumpkin hummus, fried chickpeas, Isot pepper <sup className="text-xs">DF H</sup></span>
                    <span className="italic">13</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Burrata, salsa verde, castelfranco, candied walnuts <sup className="text-xs">GF H</sup></span>
                    <span className="italic">29</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bluefin tuna escabeche, orange, saffron <sup className="text-xs">DF GF H</sup></span>
                    <span className="italic">36</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hawkesbury River school prawns, garlic chive mayonnaise <sup className="text-xs">DF GF H</sup></span>
                    <span className="italic">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cauliflower blossom, truffle honey, pecorino <sup className="text-xs">GF</sup></span>
                    <span className="italic">22</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">WOODFIRE</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Cipollini onion & muscatel tarte tatin, goat's curd</span>
                    <span className="italic">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wood grilled cuttlefish, creamed corn, charcuterie xo <sup className="text-xs">GF</sup></span>
                    <span className="italic">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Great Ocean Duck kofta, salca butter, yoghurt, dill <sup className="text-xs">GF</sup></span>
                    <span className="italic">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market fish, saffron potatoes, erbette, shellfish sauce <sup className="text-xs">GF</sup></span>
                    <span className="italic">MP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charcoal roast chicken, harissa, toum, guindilla <sup className="text-xs">GF H</sup></span>
                    <span className="italic">46</span>
                  </div>
                  <div className="flex justify-between">
                    <span>House lamb sausage, peperonata, anchovy, labneh <sup className="text-xs">GF</sup></span>
                    <span className="italic">36</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dry aged pork cutlet, sour cherry agrodolce <sup className="text-xs">GF DF</sup></span>
                    <span className="italic">53</span>
                  </div>
                  <div className="flex justify-between">
                    <span>600g dry aged ribeye, smoked tallow gremolata, white onion <sup className="text-xs">GF DF H</sup></span>
                    <span className="italic">175</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">VEGETABLES</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Wood fired eggplant, masala, buttermilk, wild greens <sup className="text-xs">H</sup></span>
                    <span className="italic">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wood roasted carrots, pilpelchuma, sunflower <sup className="text-xs">GF DF V H</sup></span>
                    <span className="italic">17</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fried potatoes, hawaij butter, coriander <sup className="text-xs">GF H</sup></span>
                    <span className="italic">14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local farm leaves, sherry vinaigrette, pine nuts <sup className="text-xs">GF DF V H</sup></span>
                    <span className="italic">14</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">DESSERTS</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Medjool dates, pecan, dark chocolate <sup className="text-xs">V GF DF H</sup></span>
                    <span className="italic">9</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Orange blossom & passionfruit caramel "magnum" <sup className="text-xs">GF H</sup></span>
                    <span className="italic">14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Green apple & sorrel granita, coconut, jasmine <sup className="text-xs">GF DF H</sup></span>
                    <span className="italic">16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Olive oil ice cream sandwich, halva, pistachio, honey <sup className="text-xs">H</sup></span>
                    <span className="italic">25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roasted rice panna cotta, strawberries, elderflower</span>
                    <span className="italic">24</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400 space-y-2">
                <p>V – Vegan  GF – Gluten Free  DF – Dairy Free  H – Halal</p>
                <p className="italic">
                  *** A 10% surcharge is applicable Sundays. A 15% surcharge applies on Public Holidays. 
                  Menus subject to change. All set menus are for a minimum of 2 diners. Most allergies and 
                  dietary requirements can be accommodated with advance notice.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-normal text-center mb-2 tracking-wider">EXPRESS</h3>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">$90pp for the table to share</h3>
                <div className="space-y-2 text-sm">
                  <p>Wood fired flatbread, our za'atar</p>
                  <p>Pumpkin hummus, fried chickpeas, Isot pepper</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p className="pt-2">Cauliflower blossom, truffle honey, pecorino</p>
                  <p className="pt-2">Market fish, saffron potatoes, erbette, shellfish sauce</p>
                  <p>Local farm leaves, sherry vinaigrette, pine nuts</p>
                  <p className="pt-2">Orange blossom & passionfruit caramel "magnum"</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-2 tracking-wider">FEAST</h3>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">$110pp for the table to share</h3>
                <div className="space-y-2 text-sm">
                  <p>Wood fired flatbread, our za'atar</p>
                  <p>Pumpkin hummus, fried chickpeas, Isot pepper</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p>NOMAD charcuterie selection</p>
                  <p className="pt-2">Bluefin tuna escabeche, orange, saffron</p>
                  <p>Cauliflower blossom, truffle honey, pecorino</p>
                  <p className="pt-2">Charcoal roast chicken, harissa, toum, guindilla</p>
                  <p>Fried potatoes, hawaij butter, coriander</p>
                  <p className="pt-2">Olive oil ice cream sandwich, halva, pistachio, honey</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-normal text-center mb-2 tracking-wider">EXPERIENCE</h3>
                <h3 className="text-xl font-normal text-center mb-6 tracking-wider">$170pp for the table to share</h3>
                <div className="space-y-2 text-sm">
                  <p>Oysters of the day, our Worcestershire</p>
                  <p>Smoked king salmon basturma, apple, salmon roe</p>
                  <p className="pt-2">Wood fired flatbread, our za'atar</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p>NOMAD charcuterie selection</p>
                  <p className="pt-2">Bluefin tuna escabeche, orange, saffron</p>
                  <p>Wood grilled cuttlefish, creamed corn, charcuterie xo</p>
                  <p className="pt-2">600g dry aged ribeye, smoked tallow gremolata, white onion</p>
                  <p>Local farm leaves, sherry vinaigrette, pine nuts</p>
                  <p className="pt-2">Green apple & sorrel granita, coconut, jasmine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};