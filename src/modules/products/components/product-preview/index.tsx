import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Image from "next/image"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      {/* <div data-testid="product-wrapper" className="bg-red-200 border-10 border-blue-700"> */}
      <div data-testid="product-wrapper" className="bg-white-200 hover:bg-white-300 rounded-lg shadow-md shadow-gray-300">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        
        <div className="flex flex-col items-center txt-compact-medium mt-4 justify-between">
          {/* <Text className="text-ui-fg-subtle" data-testid="product-title">{productPreview.title}</Text> */}
          <Text className="text-ui-fg-subtle h-12 border-width: 2px px-2" data-testid="product-title">{productPreview.title}</Text>
          
          <div className="flex items-center gap-x-2 ">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          <div className="flex pb-2">
            <Image src={require('../../../../../public/star (1).png')}
            alt="image"
            width={15}
            height={15}/>
            <Image src={require('../../../../../public/star (1).png')}
            alt="image"
            width={15}
            height={15}/>
            <Image src={require('../../../../../public/star (1).png')}
            alt="image"
            width={15}
            height={15}/>
             <Image src={require('../../../../../public/star (1).png')}
            alt="image"
            width={15}
            height={15}/>
          </div>
          <button className="add-to-cart group w-24 h-8 bg-orange-900 hover:bg-orange-700 rounded-lg text-white mb-2">Add to Cart</button>
        </div>
        
      </div>
    </LocalizedClientLink>
  )
}
