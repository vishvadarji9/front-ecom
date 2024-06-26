// import Head from 'next/head'
// import React from 'react'
// import '../about/styles.css'
// import Image from 'next/image'

// type Props = {}

// const About = (props: Props) => {
//   return (
//     <div className="about-us-container">
//     <div className="image-container">
//         <Image src={require('../../../../../../front-ecom/public/cream image.jpg')}  className='main-image'/>
//         <Image src={require('../../../../../../front-ecom/public/Soap.jpg')} className='img2' />

//         {/* <img src="/cream image.jpg" alt="Ayurvedic Products" className="main-image"/>
//         <img src="/soap.jpg" alt="Ayurvedic soap" className="img2"/> */}
//     </div>
//     <div className="text-content">
//         <div className="aboutus">
//             {/* <img src="/AboutUs/assests/icon-1.png" alt="" className="abimg"/> */}
//             <h1>About Us</h1>
//             <h2>WE'RE LEADER IN ORGANIC PRODUCTS & MARKET!</h2>
//             <p>
//                 Orgita cosmetics is a beauty retail-one stop store for all the skincare, hair care and beauty needs for everyone.
//                 We all deserve nothing but the best for taking care and wellness of ourselves.
//                 We provide a colossal range of Skincare, body and bath, fragrance, beauty tools and haircare.
//             </p>
//         </div>
//         <div className="organic-section">
//             <Image src={require('../../../../../../front-ecom/public/orgitalogo.svg')}
//              width={90} height={90} />
//             {/* <img src="/logo.jpg" alt="logo"/> */}
//             <h2>100% Organic And Toxic Free</h2>
//             <p>
//                 Our skin absorbs everything be it dust, lotion or sunlight. Organic beauty care products unclogs your skin,
//                 cleanses your skin of dead cells and allows it to breathe.
//             </p>
//         </div>
//     </div>
// </div>
//   )
// }

// export default About

// import Head from "next/head"
// import React from 'react'
// import '../about/styles.css'
// import Image from 'next/image'

// const About = () => {
//   return (
//     <div className="about-us-container">
//       <div className="image-container">
//       <div className="hover-image-container">
//         <Image src={require('../../../../../public/lady.jpg')} alt="main-image" className='main-image' />
//         </div>
//         <div className="hover-image-container">
//           <Image src={require('../../../../../public/bottle.jpg')} alt="img2" className='img2' />
//           {/* <Image src={require('../../../../../../front-ecom/public/vecteezy_a-woman-with-a-face-mask-on-her-face_45679118.gif')} className='img2' /> */}
//         </div>
//       </div>
//       <div className="text-content">
//         <div className="aboutus">
//           <Image src={require('../../../../../public/aboutus img.png')} alt="text" />
//           {/* <h1>About Us</h1> */}

//           <h2>{`WE'RE LEADER IN ORGANIC PRODUCTS & MARKET!`}</h2>
//           <p>
//             Orgita cosmetics is a beauty retail-one stop store for all the skincare, hair care and beauty needs for everyone.
//             We all deserve nothing but the best for taking care and wellness of ourselves.
//             We provide a colossal range of Skincare, body and bath, fragrance, beauty tools and haircare.
//           </p>
//         </div>
//         <div className="organic-section">
//           <Image src={require('../../../../../public/logo-orgita.svg')} width={90} height={90} alt="logo" />
//           <h2>100% Organic And Toxic Free</h2>
//           <p>
//             Our skin absorbs everything be it dust, lotion or sunlight. Organic beauty care products unclogs your skin,
//             cleanses your skin of dead cells and allows it to breathe.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-wrap justify-center items-start px-1 py-10 md:flex-row md:items-center xsmall:items-center flex-col">
      <div className="w-full md:w-auto max-w-full md:max-w-[600px] xsmall:ml-10 md:-ml-10 lg:p-5 lg:-ml-16 -ml-6 md:items-center xsmall:items-center items-center relative">
        <div className="hover-image-container">
          <Image
            src={require("../../../../../public/new(aboutus).jpg")}
            alt="main-image"
            className="lg:ml-16 ml-16 w-[300px] h-[320px] lg:w-[480px] lg:h-[500px] md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] xsmall:w-[330px] xsmall:h-[350px]rounded-lg transition-transform duration-300 filter hover:scale-110 hover:brightness-110"
          />
        </div>
        <div className="hover-image-container">
          <Image
            src={require("../../../../../public/aboutus(2).jpg")}
            alt="img2"
            className=" md:top-[-280px] md:left-[300px] transform -mt-28 ml-60 lg:-mt-44 lg:ml-96 md:-mt-40 md:ml-72 sm:-mt-36 sm:ml-80 xsmall:-mt-28 xsmall:ml-64 lg:w-[230px] lg:h-[210px] md:w-[200px] md:h-[180px] sm:w-[180px] sm:h-[160px] xsmall:w-[160px] xsmall:h-[140px] w-[160px] h-[140px] cursor-pointer transition-transform duration-300 filter hover:scale-110 hover:brightness-110"
          />
          {/* <Image src={require('../../../../../../front-ecom/public/vecteezy_a-woman-with-a-face-mask-on-her-face_45679118.gif')} className='img2' /> */}
        </div>
      </div>
      <div className="max-w-[600px] mt-6 ml-1 mr-2 lg:-ml-6 md:ml-16 w-full px-1 xsmall:px-6 ">
        <div className="mb-3 px-5 lg:-ml-5 xsmall:px-2">
          <Image
            src={require("../../../../../public/AboutUs-removebg-preview.png")}
            alt="text"
          />
          {/* <h1>About Us</h1> */}

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-5 mb-2 text-left md:text-left">{`WE'RE LEADER IN ORGANIC PRODUCTS & MARKET!`}</h2>
          <p className="text-base leading-6 text-gray-600 text-justify">
            Orgita cosmetics is a beauty retail-one stop store for all the
            skincare, hair care and beauty needs for everyone. We all deserve
            nothing but the best for taking care and wellness of ourselves. We
            provide a colossal range of Skincare, body and bath, fragrance,
            beauty tools and haircare.
          </p>
        </div>
        <div className=" lg:ml-14 md:ml-0 text-center md:text-left px-4 lg:px-1 ">
          <Image
            src={require("../../../../../public/logo-orgita.svg")}
            width={90}
            height={90}
            alt="logo"
            className="w-[90px] h-[90px] lg:-ml-1 rounded-full shadow-lg mx-auto -ml-2 md:-ml-1 xsmall:-ml-3"
          />
          <h2 className="mt-5 text-2xl md:text-3xl md:text-left font-extrabold text-left">
            100% Organic And Toxic Free
          </h2>
          <p className="text-base leading-6 text-gray-600 text-justify">
            Our skin absorbs everything be it dust, lotion or sunlight. Organic
            beauty care products unclogs your skin, cleanses your skin of dead
            cells and allows it to breathe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
