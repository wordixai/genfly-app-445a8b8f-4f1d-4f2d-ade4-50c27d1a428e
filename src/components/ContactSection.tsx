export const ContactSection = () => {
  return (
    <div id="contact-us">
      <section className="bg-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide">Contact Us</h1>
          
          <div className="max-w-2xl mx-auto space-y-6 text-base">
            <p className="italic">Closed the King's Birthday Public Holiday, Monday 9th June.</p>
            
            <p>We are open 7 days a week.</p>
            
            <div>
              <p className="font-semibold">Lunch</p>
              <p>Wednesday – Sunday</p>
              <p>12pm – 2pm</p>
            </div>
            
            <div>
              <p className="font-semibold">Dinner</p>
              <p>Monday – Sunday</p>
              <p>5.00pm – late</p>
            </div>
            
            <p>A 10% surcharge is applicable Sundays & a 15% surcharge applies on Public Holidays.</p>
            
            <div className="space-y-2">
              <a 
                href="tel:+61292803395" 
                className="block hover:text-gray-300 transition-colors"
              >
                +61 2 9280 3395
              </a>
              <a 
                href="mailto:eat@nomad.melbourne" 
                className="block hover:text-gray-300 transition-colors"
              >
                eat@nomad.melbourne
              </a>
              <a 
                href="https://goo.gl/maps/GP9uszQ9r5TEVs429" 
                className="block hover:text-gray-300 transition-colors"
              >
                187 Flinders Lane, Melbourne, VIC 3000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};