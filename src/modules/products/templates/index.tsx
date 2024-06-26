import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
  {/* <div className="flex pt-2">
  <Image src={require("../../../../../front-ecom/public/banner1.jpg")}
  alt="image"
  width={1000}
  height={20}/>
</div>    */}
      <div
        // className="content-container flex flex-col small:flex-row small:items-start py-6 relative"
        className="content-container flex flex-col sm:flex-row sm:items-center md:items-start lg:flex-row lg:items-start xl:flex-row xl:items-start py-6 relative"

        data-testid="product-container"
      >
        {/* <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6 ">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div> */}
        <div className=" w-full max-w-[50%] block relative h-8 sm:h-8 md:h-16 lg:h-24">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="relative small:sticky small:top-30 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6 small:transform small:translate-x-15 small:-translate-y-10 mt-5 ml-40">


          <ProductInfo product={product} />
          <ProductTabs product={product} />
          <div className="relative small:sticky small:top-60 small:py-0 small:max-w-[300px] w-full py-8 gap-y-25 small:transform small:translate-y-15 mt-15 mt-9">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
           </div>
        </div>
        {/* <div className="relative small:sticky small:top-60 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12 small:transform small:translate-y-15">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div> */}
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
