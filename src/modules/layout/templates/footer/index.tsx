// "use client"

import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

import Image from "next/image"
import { RiTwitterXLine } from "react-icons/ri"
import Input from "@modules/common/components/input"
import { useState } from "react"
// import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {}

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  //   const [message] = useFormState(signUp, null)

  // const [formData, setFormData] = useState({

  //   email: "",

  // })

  // const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // For now, just log the form data to the console
  //   console.log(formData)
  //   // Clear the form after submission
  //   setFormData({
  //     email: "",
  //   })
  //   setErrorMessage(null)
  // }

  return (
    <footer className="border-t-0 border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full py-16 px-10 xsmall:-px-4">
        {/* <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40"> */}
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
          {/* <div> */}
          {/* <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink> */}

          {/* <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <img src="/orgitalogo.svg" alt="SVG logo" />
            </LocalizedClientLink> */}

          <div className="logo lg:mr-10 md:mr-10 sm:mr-10  h-36 w-50 -mt-8">
            <Image
              className="  w-56 h-24"
              src={require("../../../../../public/logo-orgita.svg")}
              alt="SVG logo"
            />
            <p className="text-sm w-52 ml-7 text-orange-950">
              Orgita is an online marketplace specializing in organic products.
            </p>
          </div>

          {/* div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3"> */}
          <div className="text-small-regular ml-6 mb-16 gap-x-3 gap-y-5 lg:gap-x-7 md:gap-x-7 sm:gap-x-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
            {/* {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )} */}

            {/* {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2"> */}
            {/* <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span> */}
            {/* <span className="txt-small-plus txt-ui-fg-base text-base text-orange-950">
                  Ouick Links
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <>
                      <li key={c.id}> */}
            {/* <LocalizedClientLink
                            className="hover:text-ui-fg-base"
                            href={`/collections/${c.handle}`}
                          >
                            {c.title}
                          </LocalizedClientLink> */}
            {/* <LocalizedClientLink
                          className="hover:text-ui-fg-base"
                          href={`/collections/${c.handle}`}
                        >
                          About Us
                        </LocalizedClientLink>
                      </li>
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-ui-fg-base"
                          href={`/collections/${c.handle}`}
                        >
                          Products
                        </LocalizedClientLink>
                      </li>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        Contact Us
                      </LocalizedClientLink>
                    </>
                  ))}
                </ul>
              </div>
            )} */}

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base text-base text-orange-950">
                Quick Links
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    // href="https://github.com/medusajs"
                    href="/about"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    // href="https://docs.medusajs.com"
                    // href="http://localhost:8000/in/store"
                    href="/store"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Products
                  </LocalizedClientLink>
                </li>
                <li>
                  {/* <a
                    // href="https://github.com/medusajs/nextjs-starter-medusa"
                    href="http://localhost:8000/in/contactus"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </a> */}
                  <LocalizedClientLink
                    // href="https://github.com/medusajs/nextjs-starter-medusa"
                    href="/contactus"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base text-base text-orange-950">
                Customer Service
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">

              {/* <li>
                  <LocalizedClientLink
                    href="/shipping"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    FAQs
                  </LocalizedClientLink>
                </li> */}

                <li>
                  <LocalizedClientLink
                    href="/shipping"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Shipping
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/track-order"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Track Order
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/support"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Support
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base text-base text-orange-950">
                Policy Information
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/private-policy"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/terms-of-service"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Terms of Service
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/refund-policy"
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Refund Policy
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 min-h-[40px] ">
              <div className="txt-small-plus txt-ui-fg-base text-base text-orange-950 hidden lg:block md:block">
                Coming soon on
              </div>
              {/* <ul> */}
              {/* <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li> */}
              <div className="flex flex-row w-full min-h-[20px] flex-wrap gap-2">
                <svg
                  className="h-7 w-7"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                </svg>
                <svg
                  className="h-7 w-7 -ml-2"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                </svg>
                {/* <Image src={require('../../../../../public/icons8-twitter (1).svg')} alt="fb-icon" className="fill-black" height={30} width={30}/> */}
                {/* <RiTwitterXLine /> */}
                <svg
                  className="h-14 w-14 -ml-3 -mt-1"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
                </svg>
                <svg
                  className="h-7 w-7 -ml-8"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </div>

              {/* <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li> */}
              {/* </ul> */}
            </div>
          </div>
        </div>
        <div className="w-full text-ui-fg-muted ml-8 ">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Orgita Store. All rights reserved.
          </Text>

          {/* <MedusaCTA /> */}
        </div>
      </div>
    </footer>
  )
}
