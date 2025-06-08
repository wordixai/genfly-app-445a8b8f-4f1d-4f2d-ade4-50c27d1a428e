export const DrinksSection = () => {
  return (
    <div id="drinks">
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-slate text-white flex items-center justify-center py-20 px-12">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide">Drinks</h1>
            
            <p className="text-base leading-relaxed mb-8">
              Our beverage list has been curated to highlight the very best of Australian and international produce, 
              and is carefully designed to ensure your dining experience is unforgettable. We showcase small, up and 
              coming producers, as well as some of the country's most iconic wine vignerons. We take pride in 
              showcasing Australian wines and spirits primarily, with organic and sustainable produce taking priority.
            </p>
            
            <div className="space-y-4">
              <a 
                href="/wine-list.pdf" 
                target="_blank" 
                rel="noopener"
                className="block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
              >
                <strong>WINE LIST</strong>
              </a>
              <a 
                href="/bar-list.pdf" 
                target="_blank" 
                rel="noopener"
                className="block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
              >
                <strong>BAR LIST</strong>
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div 
            className="h-96 md:h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://nomad.melbourne/wp-content/uploads/2024/12/Nomad_SpringMenu_2024_Low_075.jpg)` 
            }}
          />
        </div>
      </section>
    </div>
  );
};