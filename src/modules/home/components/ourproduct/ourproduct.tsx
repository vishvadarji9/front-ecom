"use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import React from "react"

type Props = {}

const Prod = (props: Props) => {
  return (
    <div>
      {/* <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com" />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            'tailwind.config = {        theme: {          extend: {            fontFamily: {              inter: ["Inter", "sans-serif"],            },            animation: {              "infinite-scroll": "infinite-scroll 25s linear infinite",            },            keyframes: {              "infinite-scroll": {                from: { transform: "translateX(0)" },                to: { transform: "translateX(-100%)" },              },            },          },        },      };    ',
        }}
      /> */}

      <div className="relative font-inter antialiased">
        {/* <p className="text-center text-4xl font-serif">Our Products</p> */}
        <div className="lg:text-center">
          {/* <p className="mt-5 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
             
            </p> 
             */}
          <div className="flex items-center justify-center">
            <Image
              src={require("../../../../../public/categories.png")}
              alt="image"
              height={400}
              width={400}
            />
          </div>

          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the best products we offer to our customers.
          </p> */}
        </div>
        <div className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
          <div className="max-w-5xl px-4 md:px-6">
            <div className="text-center">
              <div
                className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                x-data="{}"
                x-init="$nextTick(() => {  let ul = $refs.logos; ul.insertAdjacentHTML('afterend', ul.outerHTML);                        ul.nextSibling.setAttribute('aria-hidden', 'true');                    })"
              >
                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  x-ref="logos"
                >
                  <li>
                    <LocalizedClientLink
                    href={"/collections/body-care"}>
                    <div className="relative flex flex-col mt-6 text-black bg-orange-300 shadow-md bg-clip-border rounded-xl w-96">
                      <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <Image
                          alt="card-image"
                          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                          src={require('../../../../../public/images/bodycarepic.jpg')}
                        />
                      </div>
                      <div className="p-6">
                        <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Body Care
                        </h5>
                      </div>
                    </div>
                    </LocalizedClientLink>
                  </li>
                  <li>
                  <LocalizedClientLink
                    href={"/collections/hair-care"}>
                    <div className="relative flex flex-col mt-6 text-black bg-orange-300 shadow-md bg-clip-border rounded-xl w-96">
                      <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <Image
                          alt="card-image"
                          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                          src={require('../../../../../public/images/haircarepic.jpg')}
                        />
                      </div>
                      <div className="p-6">
                        <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Hair Care
                        </h5>
                      </div>
                    </div>
                    </LocalizedClientLink>
                  </li>
                  <li>
                  <LocalizedClientLink
                    href={"/collections/face-care"}>
                    
                    <div className="relative flex flex-col mt-6 text-black bg-orange-300 shadow-md bg-clip-border rounded-xl w-96">
                      <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <Image
                          alt="card-image"
                          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                          src={require('../../../../../public/images/facecarepic.jpg')}
                        />
                      </div>
                      <div className="p-6">
                        <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Face Care
                        </h5>
                      </div>
                    </div>
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prod
