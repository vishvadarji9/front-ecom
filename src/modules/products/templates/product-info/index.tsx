import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[400px] mt-5 mr-15 justify-center">
      {/* <div className="flex flex-col gap-y-4 sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto p-4 justify-center"> */}
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {/* {product.collection.title} */}
            
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          {product.title}
          
        </Heading>

        {/* <Text className="text-medium text-ui-fg-subtle" data-testid="product-description"> */}
        <Text className="text-medium text-ui-fg-subtle" data-testid="product-description">

          {product.description}
          
        </Text> 
      </div>
    </div>
  )
}

export default ProductInfo
