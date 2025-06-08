export const PrivateDiningSection = () => {
  return (
    <div id="events">
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-slate text-white flex items-center justify-center py-20 px-12">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide">
              Private Dining & Events
            </h1>
            
            <div className="space-y-6 text-base">
              <p>
                The Wine Room is an intimate private dining space that can accommodate up to 10 guests 
                seated on one table. This exclusive setting is perfect for intimate lunches and celebratory dinners.
              </p>
              
              <a 
                href="/private-dining.pdf" 
                target="_blank" 
                rel="noopener"
                className="inline-block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
              >
                <strong>Private Dining & Event Information</strong>
              </a>
              
              <p>
                For exclusive hire of the entire venue we seat up to 75 guests in our main dining room.
              </p>
              
              <a 
                href="https://forms.monday.com/forms/venue-hire-enquiry" 
                target="_blank" 
                rel="noopener"
                className="inline-block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
              >
                <strong>Exclusive Venue Hire Enquiry</strong>
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div 
            className="h-96 md:h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://nomad.melbourne/wp-content/uploads/2023/11/Georg-Jensen-event-photos-by-Lucas-Dawson-109-1920x1280.jpg)` 
            }}
          />
        </div>
      </section>
      
      <div className="h-4 bg-gray-200" />
    </div>
  );
};