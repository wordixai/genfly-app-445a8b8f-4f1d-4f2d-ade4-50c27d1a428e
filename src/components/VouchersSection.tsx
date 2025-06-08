export const VouchersSection = () => {
  return (
    <div id="vouchers">
      <section className="bg-slate text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide">Gift Vouchers</h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <img 
              src="https://nomad.melbourne/wp-content/uploads/2025/01/Voucher-image-1-resized.jpg" 
              alt="Gift Vouchers" 
              className="w-full max-w-lg mx-auto rounded"
            />
          </div>
          
          <a 
            href="https://app.gift-it.com.au/nomad" 
            target="_blank" 
            rel="noopener"
            className="inline-block text-sm tracking-wider underline hover:text-gray-300 transition-colors"
          >
            <strong>Purchase a Gift Voucher</strong>
          </a>
        </div>
      </section>
    </div>
  );
};