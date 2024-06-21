import React from 'react'
import '../deal/style.css'
import Image from 'next/image'

const Deal = () => {
  return (
    //   <div className="container">
    //     <h1>Unveil Your Magic</h1>
    //     <div className="products">
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')} alt="Take Me As I Am Vegan Matte Lipstick"/>
    //             <p>Take Me As I Am Vegan Matte Lipstick</p>
    //         </div>
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')} alt="Ultimate Eye Liner"/>
    //             <p>Ultimate Eye Liner</p>
    //         </div>
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')} alt="Cellular Dry Oil"/>
    //             <p>Cellular Dry Oil</p>
    //         </div>
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')} alt="All-Matte Eyeliner"/>
    //             <p>All-Matte Eyeliner</p>
    //         </div>
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')}alt="Berry Fat Water"/>
    //             <p>Berry Fat Water</p>
    //         </div>
    //         <div className="product">
    //             <Image src={require('../../../../../../front-ecom/public/gif1.gif')} alt="Dazzling Eyeshadow"/>
    //             <p>Dazzling Eyeshadow</p>
    //         </div>
    //     </div>
    //   </div>
    <div className="bg-[#FFFFFF]">
    <div className="container mx-auto p-5">
        <h1 className="text-center text-4xl font-bold text-[#5A2E70] mb-10">Unveil Your Magic</h1>
        <div className="overflow-x-auto whitespace-nowrap">
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="Take Me As I Am Vegan Matte Lipstick" className="w-full h-auto" />
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">Lipstick</p>
            </div>
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="Ultimate Eye Liner" className="w-full h-auto" />
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">Ultimate Eye Liner</p>
            </div>
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="Cellular Dry Oil" className="w-full h-auto" />
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">Cellular Dry Oil</p>
            </div>
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="All-Matte Eyeliner" className="w-full h-auto"/>
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">All-Matte Eyeliner</p>
            </div>
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="Berry Fat Water" className="w-full h-auto" />
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">Berry Fat Water</p>
            </div>
            <div className="inline-block product bg-white shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-80">
                <Image src={require('../../../../../public/gif1.gif')} alt="Dazzling Eyeshadow" className="w-full h-auto" />
                <p className="p-4 bg-amber-600 text-center text-lg mt-30">Dazzling Eyeshadow</p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Deal;