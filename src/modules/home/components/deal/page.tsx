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
        <div className="flex text-center text-4xl mb-10 justify-center" >
        <Image src={require('../../../../../public/unveil.png')} alt="text" height={400} width={400} />
        </div>
        {/* <h1 className="text-center text-4xl font-bold text-[#5A2E70] mb-10">Unveil Your Magic</h1> */}
        <div className="overflow-x-auto whitespace-nowrap ">
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className="flex">
                <Image src={require('../../../../../public/gif(1) (1).gif')} alt="Face Mask" className="w-full h-auto" />
                </div>
                <div className="absolute -my-5">
                <Image src={require('../../../../../public/about.jpg')} alt="small-image" className='h-10 w-10 ml-24' />
                </div>
                <p className="p-5 text-center text-lg mt-5 mb-5">Body Wash</p>
            </div>
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className='flex'>
                <Image src={require('../../../../../public/gif(2) (1).gif')} alt="Ultimate Eye Liner" className="w-full h-auto" />
                </div>
                <div className='absolute -my-5'>
                <Image src={require('../../../../../public/about.jpg')} alt="small-image" className='h-10 w-10 ml-24'/>
                </div>
                <p className="p-5 text-center text-lg mt-5 mb-5">Ultimate Shampoo</p>
            </div>
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className='flex'>
                <Image src={require('../../../../../public/gif(3).gif')} alt="Cellular Dry Oil" className="w-full h-auto" />
                </div>
                <div className='absolute -my-5'>
                <Image src={require('../../../../../public/about.jpg')} alt="small-image"className='h-10 w-10 ml-24'/>
                </div>
                <p className="p-5 text-center text-lg mt-5 mb-5">Cellular Dry Oil</p>
            </div>
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className='flex'>
                <Image src={require('../../../../../public/gif(4).gif')} alt="All-Matte Eyeliner" className="w-full h-auto"/>
                </div>
                <div className='absolute -my-5'>
                    <Image src={require('../../../../../public/about.jpg')} alt="small-image" className='h-10 w-10 ml-24'/>
                </div>
                <p className="p-5 text-center text-lg mt-5 mb-5">Body Lotion</p>
            </div>
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className='flex'>
                <Image src={require('../../../../../public/gif(5).gif')} alt="Berry Fat Water" className="w-full h-auto" />
                </div>
                <div className='absolute -my-5'>
                    <Image src={require('../../../../../public/about.jpg')} alt="small-image" className='h-10 w-10 ml-24' />
                </div>
                <p className="p-5 text-center text-lg  mt-5 mb-5">Face Wash</p>
            </div>
            <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
                <div className='flex'>
                <Image src={require('../../../../../public/gif(6).gif')} alt="Dazzling Eyeshadow" className="w-full h-auto" />
                </div>
                <div className='absolute -my-5'>
                    <Image src={require('../../../../../public/about.jpg')} alt="small-image" className='h-10 w-10 ml-24' />
                </div>
                <p className="p-5 text-center text-lg mt-5 mb-5">Body Cream</p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Deal;