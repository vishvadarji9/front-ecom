import React from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const UnveilMagic = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto p-5">
        <div className="flex text-center text-4xl mb-10 justify-center">
          <Image
            src={require("../../../../../public/unveil.png")}
            alt="text"
            height={400}
            width={400}
          />
        </div>
        <div className="overflow-x-auto whitespace-nowrap ">
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/shampoo(gif).gif")}
                alt="Shampoo"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/shampoo(small).jpg")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            {/* <p className="p-5 text-center text-lg mt-5 mb-5">Shampoo</p> */}
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/hair-loss-control-shampoo"
              rel="noreferrer"
            >
              Shampoo
            </LocalizedClientLink>
          </div>
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/hair gel(gif).gif")}
                alt="Hair gel"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/hair gel(small).jpg")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/restore-shine-hair-serum"
              rel="noreferrer"
            >
              Hair Serum
            </LocalizedClientLink>
            {/* <p className="p-5 text-center text-lg mt-5 mb-5">Hair Gel</p> */}
          </div>
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/hair oil(gif).gif")}
                alt="Hair Oil"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/hair oil(small).webp")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/hair-vitality-oil-bhringraj"
              rel="noreferrer"
            >
              Hair Oil
            </LocalizedClientLink>
            {/* <p className="p-5 text-center text-lg mt-5 mb-5">Hair Oil</p> */}
          </div>
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/lip balm(gif).gif")}
                alt="lip balm"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/lip balm(small).webp")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/deyga-lip-balm"
              rel="noreferrer"
            >
              Lip Balm
            </LocalizedClientLink>
            {/* <p className="p-5 text-center text-lg mt-5 mb-5">Lip Balm</p> */}
          </div>
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/facewash(gif).gif")}
                alt="Face Wash"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/facewash(small).jpg")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/wild-indian-rose-body-wash"
              rel="noreferrer"
            >
              Body Wash
            </LocalizedClientLink>
            {/* <p className="p-5 text-center text-lg  mt-5 mb-5">Face Wash</p> */}
          </div>
          <div className="inline-block product bg-orange-200 shadow-lg rounded-lg overflow-hidden w-56 mx-2 h-82 relative">
            <div className="flex">
              <Image
                src={require("../../../../../public/bodyvream(gif).gif")}
                alt="Body Cream"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -my-5">
              <Image
                src={require("../../../../../public/body cream(small).jpg")}
                alt="small-image"
                className="h-10 w-10 ml-24"
              />
            </div>
            <LocalizedClientLink
              className="block hover:text-ui-fg-base p-5 text-center text-lg mt-5 mb-5 font-bold"
              href="/products/organic-harvest-face-scrub"
              rel="noreferrer"
            >
              Face Scrub
            </LocalizedClientLink>
            {/* <p className="p-5 text-center text-lg mt-5 mb-5">Body Cream</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnveilMagic
