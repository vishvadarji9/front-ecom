// import { Image as MedusaImage } from "@medusajs/medusa"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// type ImageGalleryProps = {
//   images: MedusaImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   return (
    {/* // <div className="flex items-start relative"> */}
    // <div className="grid grid-cols-1">
     {/* <div className="flex flex-col flex-1 small:mx-16 gap-y-4"> */}
    //  <div className="grid grid-cols-2 gap-y-4 gap-x-4 w-full  p-6 md:p-8">
    
    //     {images.map((image, index) => {
    //       return (
          
    //         <Container
    //           key={image.id}
              // className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
//               className="relative aspect-[29/34] w-full max-w-sm overflow-hidden bg-ui-bg-subtle"
//               id={image.id}
//             >
//               <Image
//                 src={image.url}
//                 priority={index <= 2 ? true : false}
//                 className="absolute inset-0 rounded-rounded"
//                 alt={`Product image ${index + 1}`}
//                 fill
//                 sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             </Container>

//               )
//         })}
        
//       </div>
//      </div>
    
//   )
// }

// export default ImageGallery




// import { Image as MedusaImage } from "@medusajs/medusa"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: MedusaImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   return (
//     // <div className="flex items-start relative">
//     <div className="grid grid-cols-1">
//       {/* // <div className="flex flex-col flex-1 small:mx-16 gap-y-4"> */}
//       <div className="grid grid-cols-2 gap-y-4 gap-x-4 w-full  p-6 md:p-8">
//         {images.map((image, index) => {
//           return (
//             <Container
//               key={image.id}
//               className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
//               id={image.id}
//             >
//               <Image
//                 src={image.url}
//                 priority={index <= 2 ? true : false}
//                 className="absolute inset-0 rounded-rounded"
//                 alt={`Product image ${index + 1}`}
//                 fill
//                 sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             </Container>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ImageGallery


import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import Image from "next/image";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 w-full p-6 md:p-8">
      {images.map((image, index) => (
        <div key={image.id} className="flex flex-col items-center">
          <Container
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            id={image.id}
          >
            <Image
              src={image.url}
              priority={index <= 2}
              className="absolute inset-0 rounded-rounded"
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              style={{ objectFit: "cover" }}
            />
          </Container>
          {/* <div className="mt-4 px-2 text-center w-full">
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;





