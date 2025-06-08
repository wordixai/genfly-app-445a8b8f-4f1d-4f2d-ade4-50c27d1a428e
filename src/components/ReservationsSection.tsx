export const ReservationsSection = () => {
  return (
    <div id="reservations">
      <section className="bg-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide">Reservations</h1>
          
          <div className="max-w-2xl mx-auto space-y-6 text-base">
            <p>NOMAD Melbourne accepts online reservations for 2 – 18 guests.</p>
            
            <a 
              href="https://www.sevenrooms.com/reservations/nomadmelbourne" 
              rel="noopener"
              className="inline-block bg-white text-teal px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
            >
              <strong>Make a Reservation</strong>
            </a>
            
            <p>For larger group bookings please enquire here:</p>
            
            <a 
              href="https://forms.monday.com/forms/large-group-enquiry" 
              target="_blank" 
              rel="noopener"
              className="inline-block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
            >
              <strong>Large Group enquiry</strong>
            </a>
            
            <p>For private dining and events information please visit our events page.</p>
            
            <div className="pt-8 text-sm leading-relaxed text-gray-200">
              <p className="font-semibold mb-4">ALLERGY DISCLAIMER</p>
              <p>
                At edition we take dietary requirements & allergies very seriously. While we take steps to minimise 
                risk & safely handle the foods that contain potential allergens, please be advised that cross 
                contamination may occur due to factors beyond our reasonable control. At edition, we make every effort 
                to identify ingredients that may cause allergic reactions for those individuals with food allergies. 
                However we cannot guarantee completely allergy-free meals. This is due to the potential of trace 
                allergens in the working environment & supplied ingredients. Please provide as much information as 
                possible concerning any allergies & dietary requirements in advance of dining with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="h-4 bg-gray-200" />
    </div>
  );
};