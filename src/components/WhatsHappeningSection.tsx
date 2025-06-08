export const WhatsHappeningSection = () => {
  const happenings = [
    {
      title: "Pre-Theatre",
      image: "https://nomad.melbourne/wp-content/uploads/2022/04/IMG_5322-960x960.jpg",
      href: "/pre-theatre/"
    },
    {
      title: "Mezze Lunches", 
      image: "https://nomad.melbourne/wp-content/uploads/2024/03/076_LunchOffers_NOMAD_Graphic_1x1-960x960.jpg",
      href: "/mezze/"
    },
    {
      title: "Truffle Brunch",
      image: "https://nomad.melbourne/wp-content/uploads/2023/06/1x1-1-960x960.jpg", 
      href: "/truffle-brunch/"
    },
    {
      title: "Feasting",
      image: "https://nomad.melbourne/wp-content/uploads/2023/03/PT_202110_Backgrounds24094-960x960.jpg",
      href: "/feasting/"
    }
  ];

  return (
    <div id="whats-happening">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-normal mb-4 tracking-wide text-charcoal">
              What's happening
            </h1>
            <p className="text-charcoal">Latest news and stories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {happenings.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="group block"
              >
                <div className="aspect-square mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-normal text-charcoal text-center group-hover:text-slate transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};