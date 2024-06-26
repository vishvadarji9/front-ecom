import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import About from "@modules/home/components/about/page"
import UserTestimonials from "@modules/home/components/testimonials/page"
import Blog from "@modules/home/components/blog/blog"
import Prod from "@modules/home/components/ourproduct/ourproduct"
import Features from "@modules/home/components/features"
import Teams from "@modules/home/components/Teams"
import UnveilMagic from "@modules/home/components/UnveilMagic/page"

export const metadata: Metadata = {
  // title: "Medusa Next.js Starter Template",
  title: "Orgita",
  description:
    "Organic products that are made from purely natural ingredients.",
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
  const collection = await getCollectionsList()

  console.log({ collection })
  return (
    <>
     
      <Hero />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
     </div> */}
      <Prod />

      <Features />
      <About />
      <UnveilMagic />
      <Blog />
      {/* <Deal /> */}
      <UserTestimonials />

      <Teams />
    </>
  )
}
