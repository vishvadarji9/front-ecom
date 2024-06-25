

import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

import Teams from "@modules/home/components/Teams"


import Deal from "@modules/home/components/deal/page"






// Add the code
import UserTestimonials from "../../../modules/home/components/testimonials/page"
import About from "@modules/home/components/about/page"
import Blog from "@modules/home/components/blog/blog"
import Image from "next/image"
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
      {/* <Image src="/images/aenal1.jpg" width={100} height={100} alt="" /> */}
      <Hero />
      <About />
      <Deal />
      <UserTestimonials />
      <Blog />
      <Teams />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}

    </>

  )
}
