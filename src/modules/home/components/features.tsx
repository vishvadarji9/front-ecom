import Image from "next/image";
import { FaHandSparkles } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";


const features = [
    {
      icon: (
        <div className="w-10 h-10 mx-auto mb-4 text-orange-800" >
        <FaHandSparkles size="40px"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M4.55 4.52a11.05 11.05 0 000 14.96M19.45 19.48a11.05 11.05 0 000-14.96M7.73 7.73a7.07 7.07 0 010 8.54M16.27 16.27a7.07 7.07 0 010-8.54" />
        </div>
      ),
      title: "All Skin Types",
      description: "The type of skin is determined by genetics, although it will also be affected by other factors and can change with time."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto mb-4 text-orange-800" >
        <FaLeaf  size="40px"/>
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M4.55 4.52a11.05 11.05 0 000 14.96M19.45 19.48a11.05 11.05 0 000-14.96M7.73 7.73a7.07 7.07 0 010 8.54M16.27 16.27a7.07 7.07 0 010-8.54" />
        </div>
      ),
      title: "Pure Organic",
      description: "Crafted with the finest organic ingredients, our products are designed to nourish and rejuvenate your skin."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto mb-4 text-orange-800" >
        <FaHandHoldingHeart size="40px"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M4.55 4.52a11.05 11.05 0 000 14.96M19.45 19.48a11.05 11.05 0 000-14.96M7.73 7.73a7.07 7.07 0 010 8.54M16.27 16.27a7.07 7.07 0 010-8.54" />
        </div>
      ),
      title: "Natural Care",
      description: "We believe in the purity of nature, which is why our beauty care line is free from harmful chemicals, synthetic fragrances, and artificial colors."
    },
  ];
  
  const Features = () => {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
             
              
            </p> */}
            <div className="flex justify-center items-center">
            <Image src={require('../../../../public/ourspecialities.png')} alt="ourspecialties" height={300} width={300} />
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore the best features we offer to our customers.
            </p>
          </div>
  
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  {feature.icon}
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Features;
  