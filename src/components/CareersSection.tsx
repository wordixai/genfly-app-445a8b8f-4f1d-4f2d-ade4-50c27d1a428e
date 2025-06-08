export const CareersSection = () => {
  return (
    <div id="careers">
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-charcoal text-white flex items-center justify-center py-20 px-12">
          <h1 className="text-4xl md:text-5xl font-normal text-center tracking-wide">Careers</h1>
        </div>
        
        <div className="w-full md:w-1/2">
          <div 
            className="h-96 md:h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://nomad.melbourne/wp-content/uploads/2021/10/2020-11-14-Nomad-Kitti-Gould-LR-69.jpg)` 
            }}
          />
        </div>
      </section>

      <section className="bg-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6 text-base">
            <p>
              NOMAD is always searching for talented individuals to join our team. That team is made up of 
              dedicated, passionate individuals motivated to succeed. In return, we provide a healthy work – 
              life balance, fair and transparent pay, and genuine career opportunities for all staff.
            </p>
            
            <a 
              href="https://editiongroup.au/careers/" 
              className="inline-block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
            >
              <strong>View current positions available</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};