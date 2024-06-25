import React from "react"
import Image from "next/image"

const UserTestimonials = () => {
  return (
    <div className="bg-white p-12">
      {/* <h2 className="text-4xl font-bold text-center text-black mb-20">
        Testimonials
      </h2> */}
      <div className="flex justify-center mb-10">
          <Image src={require('../../../../../public/testimonials.svg')} alt={"testimonials.svg"} width={250} height={40}/>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group h-max p-6 rounded-lg shadow-2xl text-center bg-orange-200 hover:bg-yellow-900 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-300">
          <div className="mb-4 p-1 group-hover:border-white">
            <Image
              src={require("../../../../../public/profile-1.svg")}
              alt="image"
              width={150}
              height={150}
              className="rounded-full border-4 border-solid border-black mx-auto p-1 group-hover:border-white"
            />
          </div>
          <p className="text-gray-700 mb-4 group-hover:text-white">
            {` "Orgita's customer service is as amazing as their products! I had
            some questions about which products would be best for my combination
            skin, and their team was so helpful and knowledgeable." `}
          </p>
          <div className="text-xl font-semibold text-black group-hover:text-yellow-300 mb-2">
            ★★★★★
          </div>
          <h3 className="text-lg font-bold group-hover:text-white">
            Gopalika Virmani
          </h3>
          <p className="text-gray-500 group-hover:text-white">Secretary</p>
        </div>

        <div className="group h-max p-6 rounded-lg shadow-2xl text-center bg-orange-200 hover:bg-yellow-900 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-300">
          <div className="mb-4 p-1 group-hover:border-white">
            <Image
              src={require("../../../../../public/profile-2.svg")}
              alt="image"
              width={150}
              height={150}
              className="rounded-full border-4 border-solid border-black mx-auto object-cover p-1 group-hover:border-white"
            />
          </div>
          <p className="text-gray-700 mb-4 group-hover:text-white">
            {` "Great customer service! The Nourishing Face Oil and Gentle
            Exfoliating Scrub made my skin brighter and softer. I'm so happy to have
            found a brand that aligns with my values and actually works." `}
          </p>
          <div className="text-xl font-semibold text-black group-hover:text-yellow-300 mb-2">
            ★★★★★
          </div>
          <h3 className="text-lg font-bold group-hover:text-white">
            Roshni Chopra
          </h3>
          <p className="text-gray-500 group-hover:text-white">
            Chief Accountant
          </p>
        </div>

        <div className="group h-max p-6 rounded-lg shadow-2xl text-center bg-orange-200 hover:bg-yellow-900 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-300">
          <div className="mb-4 p-1 group-hover:border-white">
            <Image
              src={require("../../../../../public/profile-3.svg")}
              alt="image"
              width={150}
              height={150}
              className="rounded-full border-4 border-solid border-black mx-auto object-cover p-1 group-hover:border-white"
            />
          </div>
          <p className="text-gray-700 mb-4 group-hover:text-white">
            {` "I started using Orgita products about three months ago, and I can't
            believe the difference they've made. I'm so happy to have
            found a brand that aligns with my values and actually works." `}
          </p>
          <div className="text-xl font-semibold text-black group-hover:text-yellow-300 mb-2">
            ★★★★★
          </div>
          <h3 className="text-lg font-bold group-hover:text-white">
            Sharadhha Singh
          </h3>
          <p className="text-gray-500 group-hover:text-white">Sales Manager</p>
        </div>
      </div>
    </div>
  )
}

export default UserTestimonials
