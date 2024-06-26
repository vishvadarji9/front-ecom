import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    // <div className="flex items-start relative">
    <div className="grid grid-cols-2">
     {/* <div className="flex flex-col flex-1 small:mx-16 gap-y-4"> */}
     <div className="grid grid-cols-2 md-size-48 gap-y-4 gap-x-4">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              // className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
              className="relative aspect-[29/34] w-full max-w-sm overflow-hidden bg-ui-bg-subtle"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
