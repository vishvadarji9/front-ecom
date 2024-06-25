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


import Head from 'next/head'
import React from 'react'
import '../about/styles.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
      <div className="hover-image-container">
        <Image src={require('../../../../../public/lady.jpg')} alt="main-image" className='main-image' />
        </div>
        <div className="hover-image-container">
          <Image src={require('../../../../../public/bottle.jpg')} alt="img2" className='img2' /> 
          {/* <Image src={require('../../../../../../public/vecteezy_a-woman-with-a-face-mask-on-her-face_45679118.gif')} className='img2' /> */}
        </div>
      </div>
      <div className="text-content">
        <div className="aboutus">
          <Image src={require('../../../../../public/aboutus img.png')} alt="text" />
          {/* <h1>About Us</h1> */}
          
          <h2>{`WE'RE LEADER IN ORGANIC PRODUCTS & MARKET!`}</h2>
          <p>
            Orgita cosmetics is a beauty retail-one stop store for all the skincare, hair care and beauty needs for everyone. 
            We all deserve nothing but the best for taking care and wellness of ourselves. 
            We provide a colossal range of Skincare, body and bath, fragrance, beauty tools and haircare.
          </p>
        </div>
        <div className="organic-section">
          <Image src={require('../../../../../public/logo-orgita.svg')} width={90} height={90} alt="logo" />
          <h2>100% Organic And Toxic Free</h2>
          <p>
            Our skin absorbs everything be it dust, lotion or sunlight. Organic beauty care products unclogs your skin, 
            cleanses your skin of dead cells and allows it to breathe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

