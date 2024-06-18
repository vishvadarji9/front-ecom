// import Head from 'next/head'
import React from 'react'
import '../about/styles.css'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="about-us-container">
    <div className="image-container">
        <Image src={require('../../../../../../../organic-ecomm-storefront/public/cream.jpg')} className='main-image'/>
        <Image src={require('../../../../../../../organic-ecomm-storefront/public/soap.jpg')} className='img2' />
     
        {/* <img src="/cream image.jpg" alt="Ayurvedic Products" className="main-image"/>
        <img src="/soap.jpg" alt="Ayurvedic soap" className="img2"/> */}
    </div>
    <div className="text-content">
        <div className="aboutus">
            {/* <img src="/AboutUs/assests/icon-1.png" alt="" className="abimg"/> */}
            <h1>About Us</h1>
            <h2>WE'RE LEADER IN AYURVEDIC PRODUCTS & MARKET!</h2>
            <p>
                Solid cosmetics is a beauty retail-one stop store for all the skincare, hair care and beauty needs for everyone. 
                We all deserve nothing but the best for taking care and wellness of ourselves. 
                We provide a colossal range of Skincare, body and bath, fragrance, beauty tools and haircare.
            </p>
        </div>
        <div className="organic-section">
            <Image src={require('../../../../../../../organic-ecomm-storefront/public/orgitalogo.svg')}
             width={90} height={90} />
            {/* <img src="/logo.jpg" alt="logo"/> */}
            <h2>100% Organic And Toxic Free</h2>
            <p>
                Our skin absorbs everything be it dust, lotion or sunlight. Organic beauty care products unclogs your skin, 
                cleanses your skin of dead cells and allows it to breathe.
            </p>
        </div>
    </div>
</div>
  )
}

export default About