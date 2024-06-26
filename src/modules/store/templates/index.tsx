import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import Image from "next/image"
import PaginatedProducts from "./paginated-products"
{/* <div className="flex pt-2">
  <Image src={require("../../../../../front-ecom/public/banner1.jpg")}
  alt="image"
  width={1000}
  height={20}/>
</div>   */}
const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions  
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container" data-testid="category-container">
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
        <div className="flex justify-center">
            <Image src={require('../../../../public/allproducttitle.png')}
            alt="allproducttitle"
            width={250}
            height={100}
            />
          </div>
          {/* <h1 data-testid="store-page-title">All products</h1> */}
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
