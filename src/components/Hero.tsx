
import { Button } from "./ui/button";
import { useRouter } from "next/router";


export const Hero = () => {
  const router = useRouter();

    const handleGenerateBusiness = () => {
      console.log("Generating business...");
      router.push('/formpage'); // Redirects to /formpage
    
    };

  return (
    <section className="relative min-h-screen bg-primary/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODdBODc4IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight text-secondary/90 animate-fade-up" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="block mb-2 font-light text-black/70">The world's first</span>
              <span className="block font-normal">AI-powered Business Generator</span>
            </h1>
            <div className="space-y-6">
              <p className="text-lg text-gray-800">
                <strong>Instant Biz Magic:</strong> See your vision materialize in real time as our AI creates a tailored business plan, brand identity, marketing strategy, and legal guide in moments.
              </p>
              <p className="text-lg text-gray-800">
                <strong>Customized For You:</strong> No generic templates here. Whether you're starting from scratch or optimizing an existing business, BizGen tailors every aspect, from marketing strategy to brand voice.
              </p>
              <p className="text-lg text-gray-800">
                <strong>Time and Cost-Efficient:</strong> No costly advisors, agencies, and months of development. BizGen cuts time and costs tied to building a business or taking it to the next level.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Button  
                onClick={handleGenerateBusiness} 
                className="px-8 py-10 text-lg font-normal bg-secondary text-white hover:bg-secondary/90 transition-colors duration-300" 
              >
                Generate Your Business
              </Button>
              
            </div>
            <div className="flex items-center gap-8 justify-center pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-primary bg-secondary/20"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-900">
                <p className="font-medium">Trusted by 10,000+ users</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-700 ml-1">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};