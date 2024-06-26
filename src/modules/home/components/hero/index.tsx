// import { Github } from "@medusajs/icons"
// import { Button, Heading } from "@medusajs/ui"


// const Hero = () => {
//   return (
//     <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
//         <span>
//           <Heading
//             level="h1"
//             className="text-3xl leading-10 text-ui-fg-base font-normal"
//           >
//             Ecommerce Starter Template
//           </Heading>
//           <Heading
//             level="h2"
//             className="text-3xl leading-10 text-ui-fg-subtle font-normal"
//           >
//             Powered by Medusa and Next.js
//           </Heading>
//         </span>
//         <a
//           href="https://github.com/medusajs/nextjs-starter-medusa"
//           target="_blank"
//         >
//           <Button variant="secondary">
//            Hi
//             <Github />
//           </Button>
//         </a>
//       </div>
      
//     </div>
//   )
// }

// export default Hero





"use client"

import { motion } from "framer-motion"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import React from "react"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const fadeIn = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
}
const fadeOut = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
}

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between bg-gradient-to-r from-orange-200 to-white">
      <div className="max-w-7xl mx-auto p-8 flex flex-col  md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeOut}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={require("../../../../../public/images/picccc1.png")}
              alt="Woman with products"
              width={600}
              height={600}
              className="rounded-lg hover:scale-105 lg:h-[580px] lg:w-[580px] md:h-[430px] md:w-[430px] sm:h-[400px] sm:w-[400px] w-[370px] h-[370px] "
            />
          </motion.div>
        </div>
        <div className="text-center md:text-right">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:text-4xl md:text-3xl sm:text-4xl text-3xl mb-4 font-serif "
          >
            PURE BEAUTY
          </motion.h1>
          {/* <h2 className="text-3xl md:text-5xl mb-4 text-red-600 font-serif">Naturally Yours</h2> */}
          <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="lg:text-5xl md:text-4xl sm:text-3xl ml-11 mb-4 font-serif ">
            <Image
              src={require("../../../../../public/naturallyyours.png")}
              alt="text"
            />
          </motion.h2>
          <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="lg:text-lg md:text-sm  mb-6 text-gray-800">
            Natural, nutrient-rich components that are free from synthetic
            chemicals, pesticides, and genetically modified organisms are used
            to make organic beauty care products.
          </motion.p>
          <LocalizedClientLink href="/store?sortBy=created_at&page=1">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 1.11, ease: "easeOut" }}
              type="button"
              className="hover:bg-gradient-to-bl text-white bg-gradient-to-br from-orange-900 to-orange-200  focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-900 font-medium rounded-lg text-sm px-5 py-2.5 -mt-1 text-center me-2 mb-2"
            >
              SHOP NOW
            </motion.button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero


// import { Button, Heading } from "@medusajs/ui"
// import Image from "next/image"
// //import { motion } from "framer-motion"
// import React from "react"
// //import { Carousel } from "react-responsive-carousel"
// //import "react-responsive-carousel/lib/styles/carousel.min.css"



// const fadeIn = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// }
// const fadeOut = {
//   hidden: { opacity: 0, y: 200 },
//   visible: { opacity: 1, y: 0 },
// }

// const Hero = () => {
//   return (
//     <div className="w-full">
      
//         <div className="bg-gradient-to-r from-orange-200 from-30% to-white h-[90vh]">
//           <div
           
//             className=""
//           >
//             <Image
//               src={require("../../../../../public/piccc1.png")}
//               alt="pic1"
             
              
              
//             />
//           </div>

//           <div className="text-black absolute inset-0 flex flex-col justify-center items-center p-4 md:items-end md:p-32">
//             <h1
            
//               className="text-4xl md:text-6xl mb-4 drop-shadow-md shadow-black text-center md:text-right"
//             >
//               <Image
//                 src={require("../../../../../public/embracenature.png")}
//                 alt="text"
//                 layout="responsive"
//               />
//             </h1>
//             <p
              
//               className="text-lg md:text-xl max-w-[32rem] mb-6 drop-shadow-md shadow-black text-center md:text-right"
//             >
//               Discover the natural glow! Nourish your skin with our organic
//               skincare essentials.
//             </p>

//             <div
             
//             >
//               <Button className="bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300">
//                 Shop Now
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-orange-100 h-[90vh]">
//           <div className="text-black -mt-20 absolute inset-0 flex flex-col text-center small:text-left  small:items-start small:p-32">
//             <div>
//               <Image
//                 src={require("../../../../../public/pureorganic.png")}
//                 alt="image"
//               />
//             </div>
//             <h1
              
//               className="text-2xl mb-4 drop-shadow-md shadow-black"
//             >
//               Make Your
//             </h1>
//             <p className="text-3xl">OWN BASKET</p>

//             <button className="relative hover:scale-110 mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
//               <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 BUY NOW
//               </span>
//             </button>
//           </div>
//           <div className="hidden hover:scale-105 xl:flex xl:absolute xl:top-0 xl:right-11">
//             <Image
//               src={require("../../../../../public/picc3.1.png")}
//               alt="pic1"
//             />
//           </div>
//         </div>

//         {/* <div className="bg-gradient-to-r from-orange-200 from-30% to-white h-[90vh]">
//           <div className="hidden hover:scale-150 xl:flex xl:absolute xl:top-11">
//             <Image
//               src={require("../../../../../public/piccc1.png")}
//               width={450}
//               height={350}
//               alt="pic1"
//             />
//           </div>

//           <div className="text-black absolute inset-0  flex flex-col  small:text-right  small:items-end small:p-32">
//             <h1
             
//               className="text-4xl mb-4 drop-shadow-md shadow-black"
//             >
//               PURE BEAUTY
//             </h1>
//             <div className="w-30 h-30">
//               <Image
//                 src={require("../../../../../public/naturallyyours.png")}
//                 alt="text"
//               />
//             </div>
//             <p
              
//               className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black"
//             >
//               Natural, nutrient-rich components that are free from synthetic
//               chemicals, pesticides, and genetically modified organisms are used
//               to make organic bodycare products.Organic body care refers to the
//               use of skin and personal care products made from natural and
//               organically sourced ingredients.
//             </p>

//             <div
              
//             >
//               <button
//                 type="button"
//                 className="text-gray-900 bg-gradient-to-r from-orange-200 via-orange-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:scale-110"
//               >
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
//         </div> */}
      
//     </div>
//   )
// }

// export default Hero



// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@medusajs/ui';

// const Hero: React.FC = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-between bg-gradient-to-r from-orange-200 to-white">
//       <div className="max-w-7xl mx-auto p-8 flex flex-col  md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
//         <div className="flex-shrink-0 ">
//           <Image
//             src={require("../../../../../public/hb1.png")}
//             alt="Woman with products"
//             width={600}
//             height={600}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="text-center md:text-right">
//           <h1 className="text-4xl md:text-6xl mb-4 text-red-800 font-serif">PURE BEAUTY</h1>
//           <h2 className="text-3xl md:text-5xl mb-4 text-red-600 font-serif">Naturally Yours</h2>
//           <p className="text-lg md:text-xl max-w-md mb-6 text-gray-800">
//             Natural, nutrient-rich components that are free from synthetic chemicals,
//             pesticides, and genetically modified organisms are used to make organic bodycare products.
//             Organic body care refers to the use of skin and personal care products made from natural and
//             organically sourced ingredients.
//           </p>
//           <Button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">SHOP NOW</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


