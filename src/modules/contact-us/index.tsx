"use client"

import React, { useState } from "react"

// import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
// import { LOGIN_VIEW } from "@modules/account/templates/login-template"
// import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Image from "next/image"

type Props = {}

const ContactUs = (props: Props) => {
  //   const [message] = useFormState(signUp, null)

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //   const validateForm = () => {
  //     if (!formData.first_name || !formData.last_name || !formData.email) {
  //       setErrorMessage("First name, last name, and email are required.");
  //       return false;
  //     }
  //     // Add any other validation rules here
  //     return true;
  //   };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the form data to the console
    console.log(formData)
    // Clear the form after submission
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    })
    setErrorMessage(null)
  }

  return (
    <div
      className="flex-1 flex justify-center items-center small:py-12 py-24"
      data-testid="account-page"
    >
      {/* <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col"> */}
      <Image className="h-"
                src={require("../../../../front-ecom/public/bg.svg")}
                alt="SVG logo"
              />
      <div className="w-full max-w-md p-6 bg-orange-300 rounded-lg shadow-2xl">
        {/* <div
      className="max-w-sm flex flex-col justify-center items-center ml-80 lg:ml-72 md:ml-60 sm:ml-36 "
      data-testid="contact-page"
    > */}
        {/* <h1 className="text-large-semi uppercase mb-6 text-xl "> */}
        <h1 className="text-large-semi text-center uppercase mb-6 text-xl ">
          Get in Touch
        </h1>
        {/* <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Medusa Store Member profile, and get access to an enhanced
        shopping experience.
      </p> */}
        {/* <form className="w-full flex flex-col" action={formAction}> */}
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-y-2">
            <Input
              label="First name"
              name="first_name"
              required
              autoComplete="given-name"
              data-testid="first-name-input"
              onChange={handleChange}
              value={formData.first_name}
            />
            <Input
              label="Last name"
              name="last_name"
              required
              autoComplete="family-name"
              data-testid="last-name-input"
              onChange={handleChange}
              value={formData.last_name}
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
            <Input
              label="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              data-testid="phone-input"
              onChange={handleChange}
              value={formData.phone}
            />
            <Input
              label="Message"
              name="message"
              type="text"
              autoComplete="text"
              data-testid="text-input"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          {errorMessage && (
            <ErrorMessage error={errorMessage} data-testid="contact-error" />
          )}
          <SubmitButton className="w-full mt-6" data-testid="contact-button">
            Join
          </SubmitButton>
        </form>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ContactUs
