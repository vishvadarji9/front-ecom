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
"use client";
import Image from 'next/image';
import React from 'react';
import "../blog/sty.css";
import LocalizedClientLink from '@modules/common/components/localized-client-link';

type Props = {}

const Blog = (props: Props) => {
  return (
    
    <div>
      <div className='h1'><Image src={require('../../../../../public/MiniBlog.png')} width={300} height={300} alt="Image 1" />
      </div>
      <div className="wrapper">
        <div className="box">
       
        <LocalizedClientLink 
                 
                  href="/blog"
          > 
          <Image src={require('../../../../../public/blog1.jpg')} width={500} height={500} alt="Image 1" className='img'/>
          </LocalizedClientLink>
          
          <div className="card-title">Serums make your skin more radiant and help in reducing fine lines.</div>
          <div className="card-date">June 18, 2014</div>
        </div>
        <div className="box">
        <LocalizedClientLink 
                 
                 href="/blog2"
         > 
            <Image src={require('../../../../../public/blog2.jpg')} width={500} height={500} alt="Image 2" className='img' id='img2'/>
            </LocalizedClientLink>

          <div className="card-title">Body wash is essential for maintaining good hygiene and healthy skin.</div>
          <div className="card-date">March 29, 2014</div>
        </div>
        <div className="box">
         <LocalizedClientLink href='/blog3'>
            <Image src={require('../../../../../public/blog3.jpg')} width={500} height={500} alt="Image 3" className='img'/>
          </LocalizedClientLink>
          <div className="card-title"> Body cream is crucial for maintaining healthy, hydrated skin all over the body.</div>
          <div className="card-date">July 23, 2024</div>
        </div>

        <div className="box">
          <LocalizedClientLink href='/blog4'>
            <Image src={require('../../../../../public/blog5.jpg')} width={500} height={500} alt="Image 4" className='img'/>
          </LocalizedClientLink>
          <div className="card-title">Face cream is essential for maintaining healthy, hydrated skin.</div>
          <div className="card-date">January 09, 2024</div>
        </div>

        <div className="box">
          <LocalizedClientLink href='/blog5'>
            <Image src={require('../../../../../public/blog4.jpg')} width={500} height={500} alt="Image 5" className='img'/>
          </LocalizedClientLink>
          <div className="card-title">{`Hair care is a crucial aspect of overall grooming and well-being, as it involves maintaining the health, cleanliness, and style of one's hair.`} </div>
          <div className="card-date">December 23, 2024</div>
        </div>

      </div>
    </div>
  )
}

export default Blog;



