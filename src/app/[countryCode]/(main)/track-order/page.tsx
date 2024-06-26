"use client"

import React, { useState } from "react"

// import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Image from "next/image"
import "../../../../../src/modules/layout/templates/footer/style.css"

type Props = {}

const TrackOrder = (props: Props) => {
  //   const [message] = useFormState(signUp, null)

  const [formData, setFormData] = useState({
    
    order: "",
    email: "",
   
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the form data to the console
    console.log(formData)
    // Clear the form after submission
    setFormData({
     
      order: "",
      email: "",
      
    })
    setErrorMessage(null)
  }

  return (
    // <div className="relative">
    <div className="relative w-full h-dvh">
      {/* <Image className=""
                src={require("../../../../../public/bg-contact3.svg")}
                alt="SVG logo"
                objectFit="cover"
                layout="fill"
              /> */}
      {/* </div> */}
    <div
      className=" absolute inset-0 flex-1 flex justify-center items-center"
      data-testid="account-page"
    >
      {/* <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col"> */}
      {/* <div className="relative w-full h-dvh">
      <Image className="-mt-12 -mb-40"
                src={require("../../../../front-ecom/public/bg-contact3.svg")}
                alt="SVG logo"
                objectFit="cover"
                layout="responsive"
              />
      </div> */}
      <div className=" bg-orange-200 w-full max-w-md p-6 transperent rounded-lg shadow-2xl mb-14">
        {/* <div
      className="max-w-sm flex flex-col justify-center items-center ml-80 lg:ml-72 md:ml-60 sm:ml-36 "
      data-testid="contact-page"
    > */}
       
        {/* <h1 className="text-large-semi uppercase mb-6 text-xl "> */}
        <h1 className="text-large-semi text-center uppercase mb-6 text-xl text-black">
          Track Order
        </h1>
        {/* <div className="flex justify-center mb-5">
          <Image src={require('../../../../../public/get-in-touch.png')} alt={"get-in-touch-png-img"} width={250} height={40}/>
        </div> */}
        {/* <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Medusa Store Member profile, and get access to an enhanced
        shopping experience.
      </p> */}
        {/* <form className="w-full flex flex-col" action={formAction}> */}
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-y-2">
          
            <Input
              label="Order Id"
              name="order"
              required
              type="number"
              autoComplete="number"
              data-testid="order-id"
              onChange={handleChange}
              value={formData.order}
            />
            <Input
              label="Email"
              name="email"
              required
              type="email"
              autoComplete="email"
              data-testid="email-input"
              onChange={handleChange}
              value={formData.email}
            />
            
          </div>
          {errorMessage && (
            <ErrorMessage error={errorMessage} data-testid="contact-error" />
          )}
          <SubmitButton className="w-full mt-6" data-testid="contact-button">
            Track
          </SubmitButton>
        </form>
        {/* </div> */}
      </div>
    </div>
    </div>
  )
}

export default TrackOrder
