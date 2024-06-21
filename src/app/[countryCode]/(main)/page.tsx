

import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import About from "./about/page"
import Deal from "@modules/home/components/deal/page"
// import Prod from "@modules/home/components/ourproducts/ourproducts"
// import About from "@modules/home/components/about/about"
import Blog from "@modules/home/components/blog/blog"


// Add the code
import UserTestimonials from "../../../modules/home/components/testimonials/page"
// import UserTestimonials from "@modules/home/components/UserTestinomials"
// import { LOGIN_VIEW } from "@modules/account/templates/login-template" 

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

// Adding function

  // function setCurrentView(view: LOGIN_VIEW): void {
  //   throw new Error("Function not implemented.")
  // }

  return (
    <>
    
      <Hero />
      <About/>
      <Deal />
      <UserTestimonials />
      {/* <About /> */}
      <Blog />
      {/* <Prod /> */}
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
       
        
      </div>
    
    </>
    
  )
}
