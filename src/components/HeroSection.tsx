import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";


const HeroSection = () => {
  const router = useRouter();

  const handleGenerateBusiness = () => {
    console.log("Generating business...");
    router.push('/formpage'); // Redirects to /formpage
  }; 

  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-in">
      <h1 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#202020] to-[#080808]">
        The world's first AI-powered Business Generator
      </h1>
      <div className="mt-8 space-y-8 text-lg leading-8 text-gray-600 animate-fade-in-slow">
        <p>
          <span className="font-semibold font-body text-primary">Instant Biz Magic:</span>{" "}
          See your vision materialize in real time as our AI creates a tailored
          business plan, brand identity, marketing strategy, and legal guide in
          moments.
        </p>
        <p>
          <span className="font-semibold font-body text-primary">Customized For You:</span>{" "}
          No generic templates here. Whether you're starting from scratch or
          optimizing an existing business, BizGen tailors every aspect, from
          marketing strategy to brand voice.
        </p>
        <p>
          <span className="font-semibold font-body text-primary">
            Time and Cost-Efficient:
          </span>{" "}
          No costly advisors, agencies, and months of development. BizGen cuts time
          and costs tied to building a business or taking it to the next level.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button
          onClick={handleGenerateBusiness} 
          size="lg"
          className="animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] hover:bg-right transition-all duration-500 text-lg text-balance font-sans px-8 py-6 h-auto rounded-3xl"
        >
          Generate Business Plan
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;