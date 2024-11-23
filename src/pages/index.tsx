import { Hero } from "../components/Hero";
import Navbar from "@/components/NavBar";
import HeroPattern from "@/components/HeroPattern";
import HeroSection  from "../components/HeroSection";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import { Navigation } from "../components/Navigation";
import LogoConceptCard from "@/components/landing/LogoConceptCard";
import TargetCustomerCard from "@/components/landing/TargetCustomerCard";
import LegalGuideCard from "@/components/landing/LegalGuideCard";
import ColorPaletteCard from "@/components/landing/ColorPaletteCard";
import ExecutiveSummaryCard from "@/components/landing/ExecutiveSummaryCard";
import KeyMetricsCard from "@/components/landing/KeyMetricsCard";
import TimelineCard from "@/components/landing/TimelineCard";
import MarketShareCard from "@/components/landing/MarketShareCard";
import {ProgressChart}  from "@/components/landing/ProgressChart";
import { AccordionDemo } from "@/components/landing/AccordionDemo";
import { InputEmail } from "@/components/landing/InputEmail";
import dynamic from "next/dynamic";

const DynamicMarketShareCard = dynamic(() => import("@/components/landing/MarketShareCard"), {
  ssr: false, // Disable SSR for this component
});


const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5F7F4] to-white">
      <Navbar />
      <HeroPattern />
      
      <main className="relative pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <HeroSection />
          <hr className="my-8 border-t border-gray-300/50" />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-slow justify-items-center">
            <div className="flex flex-col gap-8">
              <TargetCustomerCard />
              <TimelineCard />
             
            </div>
            <div className="flex flex-col gap-8">
              <ColorPaletteCard />
              <div className="grid gap-8">
                <LogoConceptCard />
                <ProgressChart/>
              </div>
              
            </div>
            <div className="flex flex-col gap-8">
              <ExecutiveSummaryCard />
              <KeyMetricsCard />
              <AccordionDemo/>
            </div>
            <div className="flex flex-col gap-8">
             
              <LegalGuideCard className="max-h-[300px] overflow-y-auto" />
              <DynamicMarketShareCard />
            </div>
            
          </div>
          <hr className="my-6 border-t border-gray-300/50 " />
          {/* <div className=" p-4 flex items justify-center">
            <InputEmail/>
          </div> */}
            <Footer/>
          
        </div>
      </main>
    </div>
  );
};

export default Index;