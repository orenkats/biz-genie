import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-[#264653]">
      <div className="container mx-auto">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-muted opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(40deg,#00000088,#00000000)]" />
          <div className="relative p-12 md:p-20 text-center text-white">
            <span className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium inline-block mb-6 backdrop-blur-sm">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful businesses already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 font-medium hover:scale-105 transition-all duration-300 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};