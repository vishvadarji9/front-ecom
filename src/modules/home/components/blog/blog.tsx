// import Image from 'next/image';
// import React from 'react'
// import "../blog/blog.css"

// type Props = {}

// const Blog = (props: Props) => {
//   return (
//     <div>
//     <h1>Mini Blog</h1>
//     <div className="wrapper">
//         <div className="box">
//            <a href="/story1.html"><Image src ={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Image 1"> </a>
//             <div className="card-title">The Al magically removes moving <br/> objects from videos.</div>
//             <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//             <a href="/story2.html"><Image src={require('../../../../../../organic-ecomm-storefront/public/blog2.jpg')} alt="img 2"></a>
//             <div className="card-title2">The Al magically removes moving <br/> objects from videos.</div>
//             <div className="card-date2">July 19, 2019</div>
//         </div>
//         <div className="box">
//             <a href="/story3.html"><Image src={require('../../../../../../organic-ecomm-storefront/public/blog3.jpg')} alt="img 3"></a>
//             <div className="card-title">The Al magically removes moving <br/> objects from videos.</div>
//             <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//             <a href="/story4.html"><Image src={require('../../../../../../organic-ecomm-storefront/public/blog4.jpg')} alt="Image 4" ></a>
//             <div className="card-title3">The Al magically removes moving <br/> objects from videos.</div>
//             <div className="card-date3">July 19, 2019</div>
//         </div>
//         <div className="box">
//             <a href="story5.html"><Image src={require('../../../../../../organic-ecomm-storefront/public/blog5.jpg')} alt="Image 5"></a>
//             <div className="card-title3">The Al magically removes moving <br/> objects from videos.</div>
//             <div className="card-date3">July 19, 2019</div>
//         </div>

//     </div>

//     </div>
//   )
// }

// export default Blog;

// import Image from 'next/image';
// import React from 'react';
// import "../blog/blog.css";

// type Props = {}

// const Blog = (props: Props) => {
//   return (
//     <div>
//       <div className='h1'> <h1>Mini Blog</h1> </div>
//       <div className="wrapper">
//         <div className="box">
//           <a href="/story1.html">
//             <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} width={500} height={500} alt="Image 1" />
//           </a>
//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//           <a href="/story2.html">
//             <Image src={require('../../../../../../organic-ecomm-storefront/public/blog2.jpg')} width={500} height={500} alt="Image 2" />
//           </a>
//           <div className="card-title2">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date2">July 19, 2019</div>
//         </div>
//         <div className="box">
//           <a href="/story3.html">
//             <Image src={require('../../../../../../organic-ecomm-storefront/public/blog3.jpg')} width={500} height={500} alt="Image 3" />
//           </a>
//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//           <a href="/story4.html">
//             <Image src={require('../../../../../../organic-ecomm-storefront/public/blog5.jpg')} width={500} height={500} alt="Image 4" />
//           </a>
//           <div className="card-title3">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date3">July 19, 2019</div>
//         </div>
//         <div className="box">
//           <a href="/story5.html">
//             <Image src={require('../../../../../../organic-ecomm-storefront/public/blog4.jpg')} width={500} height={500} alt="Image 5" />
//           </a>
//           <div className="card-title3">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date3">July 19, 2019</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Blog;
// "use client";
// import Image from 'next/image';
// import React from 'react';
// import "../blog/sty.css";
// import LocalizedClientLink from '@modules/common/components/localized-client-link';

// type Props = {}

// const Blog = (props: Props) => {
//   return (

//     <div>
//       <div className='h1'><Image src={require('../../../../../public/MiniBlog.png')} width={300} height={300} alt="Image 1" />
//       </div>
//       <div className="wrapper">
//         <div className="box">

//         <LocalizedClientLink

//                   href="/blog"
//           >
//           <Image src={require('../../../../../public/blog1.jpg')} width={500} height={500} alt="Image 1" className='img'/>
//           </LocalizedClientLink>

//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//         <LocalizedClientLink

//                  href="/blog2"
//          >
//             <Image src={require('../../../../../public/blog2.jpg')} width={500} height={500} alt="Image 2" className='img' id='img2'/>
//             </LocalizedClientLink>

//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>
//         <div className="box">
//          <LocalizedClientLink href='/blog3'>
//             <Image src={require('../../../../../public/blog3.jpg')} width={500} height={500} alt="Image 3" className='img'/>
//           </LocalizedClientLink>
//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>

//         <div className="box">
//           <LocalizedClientLink href='/blog4'>
//             <Image src={require('../../../../../public/blog5.jpg')} width={500} height={500} alt="Image 4" className='img'/>
//           </LocalizedClientLink>
//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>

//         <div className="box">
//           <LocalizedClientLink href='/blog5'>
//             <Image src={require('../../../../../public/blog4.jpg')} width={500} height={500} alt="Image 5" className='img'/>
//           </LocalizedClientLink>
//           <div className="card-title">The AI magically removes moving <br /> objects from videos.</div>
//           <div className="card-date">July 19, 2019</div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Blog;

import Image from "next/image"
import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="p-5">
      <div className="flex justify-center items-center mb-10">
        <Image
          src={require("../../../../../public/MiniBlog.png")}
          width={300}
          height={300}
          alt="Main Image"
        />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 h-screen justify-center content-center relative p-5"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {/* <div className="bg-white col-span-1 sm:col-span-2 relative"> */}
        <div className="bg-white col-span-1 md:col-span-0 lg:col-span-2 relative">
          <LocalizedClientLink href="/blog">
            <Image
              src={require("../../../../../public/blog1.jpg")}
              width={500}
              height={500}
              alt="Blog Image 1"
              className="w-full h-auto"
            />
          </LocalizedClientLink>
          {/* <div className="absolute bottom-5 left-5 text-white font-bold text-lg">The AI magically removes moving <br /> objects from videos.</div> */}
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-base">
            Serums make your skin more radiant and help in reducing fine lines.
          </div>
          {/* <div className="absolute bottom-0 left-5 text-white font-bold text-md">July 19, 2019</div> */}
          <div className="absolute bottom-0 left-5 text-white font-bold text-md md:text-sm">
            June 18, 2014
          </div>
        </div>

        <div className="bg-white col-span-1 sm:row-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative">
          <LocalizedClientLink href="/blog2">
            <Image
              src={require("../../../../../public/blog2.jpg")}
              width={500}
              height={500}
              alt="Blog Image 2"
              className="w-full h-auto lg:h-full md:h-full sm:h-full"
            />
          </LocalizedClientLink>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg">
            Body wash is essential for maintaining good hygiene and healthy
            skin.
          </div>
          <div className="absolute bottom-0 left-5 text-white font-bold text-md">
            March 29, 2014
          </div>
        </div>
          {/* <div className="box">
          <LocalizedClientLink 
                 
                 href="/blog2"
           > 
            <Image src={require('../../../../../public/blog2.jpg')} width={500} height={500} alt="Image 2" className='img' id='img2'/>
            </LocalizedClientLink>
          </div> */}

          {/* <div className="bg-white col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 relative">
          <LocalizedClientLink href="/blog2">
            <Image
              src={require("../../../../../public/blog2.jpg")}
              layout="responsive"
              width={500}
              height={1000}
              alt="Blog Image 2"
              className="w-full h-auto xlarge:h-full lg:h-full"
            />
          </LocalizedClientLink>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-base">
            The AI magically removes moving <br /> objects from videos.
          </div>
          <div className="absolute bottom-0 left-5 text-white font-bold text-md md:text-sm">
            July 19, 2019
          </div> 
          </div> */}

          {/* <div className="bg-white col-span-1 sm:col-span-2 relative">
          <LocalizedClientLink href="/blog3">
            <Image src={require('../../../../../public/blog3.jpg')} width={500} height={500} alt="Blog Image 3" className="w-full h-auto" />
          </LocalizedClientLink>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg">The AI magically removes moving <br /> objects from videos.</div>
          <div className="absolute bottom-0 left-5 text-white font-bold text-md">July 19, 2019</div>
          </div> */}

          <div className="bg-white col-span-1 md:col-span-1 lg:col-span-2 relative">
            <LocalizedClientLink href="/blog3">
              <Image
                src={require("../../../../../public/blog3.jpg")}
                layout="responsive"
                width={500}
                height={500}
                alt="Blog Image 3"
                className="w-full h-auto"
              />
            </LocalizedClientLink>
            <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-base">
              Body cream is crucial for maintaining healthy, hydrated skin all
              over the body.
            </div>
            <div className="absolute bottom-0 left-5 text-white font-bold text-md md:text-sm">
              July 23, 2024
            </div>
          </div>

          {/* <div className="bg-white col-span-1 sm:col-span-2 relative">
          <LocalizedClientLink href="/blog4">
            <Image src={require('../../../../../public/blog5.jpg')} width={500} height={500} alt="Blog Image 4" className="w-full h-auto" />
          </LocalizedClientLink>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg">The AI magically removes moving <br /> objects from videos.</div>
          <div className="absolute bottom-0 left-5 text-white font-bold text-md">July 19, 2019</div>
          </div> */}

          <div className="bg-white col-span-1 md:col-span-1 lg:col-span-2 relative">
            <LocalizedClientLink href="/blog4">
              <Image
                src={require("../../../../../public/blog5.jpg")}
                layout="responsive"
                width={500}
                height={500}
                alt="Blog Image 4"
                className="w-full h-auto"
              />
            </LocalizedClientLink>
            <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-base">
              Face cream is essential for maintaining healthy, hydrated skin.
            </div>
            <div className="absolute bottom-0 left-5 text-white font-bold text-md md:text-sm">
              January 09, 2024
            </div>
          </div>

          {/* <div className="bg-white col-span-1 sm:col-span-2 relative">
          <LocalizedClientLink href="/blog5">
            <Image src={require('../../../../../public/blog4.jpg')} width={500} height={500} alt="Blog Image 5" className="w-full h-auto" />
          </LocalizedClientLink>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg">The AI magically removes moving <br /> objects from videos.</div>
          <div className="absolute bottom-0 left-5 text-white font-bold text-md">July 19, 2019</div>
          </div> */}

          <div className="bg-white col-span-1 md:col-span-1 lg:col-span-2 relative">
            <LocalizedClientLink href="/blog5">
              <Image
                src={require("../../../../../public/blog4.jpg")}
                layout="responsive"
                width={500}
                height={500}
                alt="Blog Image 5"
                className="w-full h-auto lg:h-full md:h-full"
              />
            </LocalizedClientLink>
            <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-base">
              {`Hair care is a crucial aspect of overall grooming and well-being, as it involves maintaining the health, cleanliness, and style of one's hair.`}
            </div>
            <div className="absolute bottom-0 left-5 text-white font-bold text-md md:text-sm">
              December 23, 2024
            </div>
          </div>
        </div>
      </div>
  );
}
export default Blog
