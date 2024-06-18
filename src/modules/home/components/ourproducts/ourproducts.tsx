import React from 'react'

type Props = {}

const Prod = (props: Props) => {
  return (
    <div>
      {/* <html key="1" lang="en">
  <head>
    <meta charSet="utf-8" />
    <title>
      ORGITA
    </title>
    <meta
      content="width=device-width,initial-scale=1"
      name="viewport"
    /> */}
    <link
      href="https://fonts.googleapis.com"
      rel="preconnect"
    />
    <link
      crossOrigin=""
      href="https://fonts.gstatic.com"
      rel="preconnect"
    />
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
        __html: 'tailwind.config = {        theme: {          extend: {            fontFamily: {              inter: ["Inter", "sans-serif"],            },            animation: {              "infinite-scroll": "infinite-scroll 25s linear infinite",            },            keyframes: {              "infinite-scroll": {                from: { transform: "translateX(0)" },                to: { transform: "translateX(-100%)" },              },            },          },        },      };    '
      }}
     />
  {/* </head> */}
  <div className="relative font-inter antialiased">
    <p className="text-center text-4xl font-serif">
      Our Products
    </p>
    <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
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
                <div className="relative flex flex-col mt-6 text-black bg-pink-300 shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                      alt="card-image"
                      className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      src="https://i.pinimg.com/564x/f6/32/04/f632044459c2246e5d8c3e01097adfa5.jpg"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Body Care
                    </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative flex flex-col mt-6 text-black bg-pink-300 shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                      alt="card-image"
                      className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      src="https://i.pinimg.com/564x/9a/e4/a0/9ae4a0730b3238a9966dbea290f9c24d.jpg"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Hair Care
                    </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative flex flex-col mt-6 text-black bg-pink-300 shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                      alt="card-image"
                      className="w-full"
                      src="https://i.pinimg.com/564x/76/a2/d8/76a2d83bdcb52235eb94620fedd233c1.jpg"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Face Care
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
   {/* </html> */}
    </div>
  )
}

export default Prod;
