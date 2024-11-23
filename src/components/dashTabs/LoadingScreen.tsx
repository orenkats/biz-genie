import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const LoadingScreen = () => {
  const [currentText, setCurrentText] = useState("Generating your business plan");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) =>
          prev === "Generating your business plan"
            ? "You are almost there"
            : "Generating your business plan"
        );
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
    }, 6000); // Change text every 3 seconds

    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-16 h-16 mb-8">
          {/* Sage-colored spinning circle */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full " />
          <div className="absolute inset-0 border-4 border-t-primary border-sage opacity-50 rounded-full animate-spin" />
        </div>
        
        {/* Text animation */}
        <p
          className={cn(
            "text-2xl font-serif text-primary transition-opacity duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {currentText}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
