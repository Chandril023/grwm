import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Know us better"
          paragraph="Crafting bespoke websites tailored to elevate your brand's digital presence, blending creativity with cutting-edge technology for unmatched online success."
        />
        {/* Responsive layout based on screen size */}
        <div className="mt-12 lg:mt-20">
          {/* Mobile view: horizontal scroll */}
          <div className="overflow-x-auto lg:hidden">
            <div className="flex flex-nowrap space-x-4 lg:space-x-8">
              {featuresData.map((feature, i) => (
                <div key={i} className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96">
                  <SingleFeature feature={feature} />
                </div>
              ))}
            </div>
          </div>
          {/* Desktop view: grid layout */}
          <div className="hidden lg:flex -mx-4 mt-12 flex flex-wrap lg:mt-20">
            {featuresData.map((feature, i) => (
       
                <SingleFeature feature={feature} />
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
