export const SubscribeSection = () => {
  return (
    <div id="subscribe">
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 tracking-wide text-charcoal">
            Subscribe
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-6 text-base text-charcoal">
            <p>
              To stay in the know on our special events, menu updates & other exciting news, 
              sign up to our mailing list. It's where we share our best news!
            </p>
            
            <a 
              href="https://www.sevenrooms.com/explore/nomadmelbourne/subscription" 
              target="_blank" 
              rel="noopener"
              className="inline-block text-sm tracking-wider underline hover:text-slate transition-colors"
            >
              <strong>Subscribe</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};