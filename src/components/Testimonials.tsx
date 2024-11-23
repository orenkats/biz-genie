export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600">
            See how we helped turn innovative ideas into successful businesses
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "From Idea to Launch",
              description: "Transformed a simple concept into a fully operational business in just 3 months",
              text: "We guide you through every step of turning your innovative idea into a tangible business reality"
            },
            {
              title: "Market Validation",
              description: "Helped validate and refine business ideas with real market data",
              text: "Our data-driven approach ensures your business concept resonates with your target market"
            },
            {
              title: "Success Rate",
              description: "90% of our clients successfully launched their business ventures",
              text: "Join our community of successful entrepreneurs who turned their dreams into reality"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform" />
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/20">
                <p className="text-sm text-muted-foreground mb-4">{feature.text}</p>
                <h3 className="text-xl font-semibold mb-2 text-accent">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};