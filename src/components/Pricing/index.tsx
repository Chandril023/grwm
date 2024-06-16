"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="Build your dream website with our flexible pricing plans tailored to fit every budget and requirement."
            center
          />
        </div>
        {/* Mobile view: default grid layout */}
        <div className="lg:hidden overflow-x-auto">
        <div className="flex flex-no-wrap space-x-4 lg:space-x-8">
       
          {pricingData.map((product, i) => (
             <div key={i} className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 mx-2">
            <PricingBox key={i} product={product} />
            </div>
          ))}     
        </div>
        </div>
          {/* Desktop view: default grid layout */}
          <div className="hidden lg:flex -mx-4 flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
