import React from "react"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  data: {
    id: number
    heading: string
    description: string
    image: string
    btn?: {
      text: string
      link: string
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
}
const fadeOut = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
}

const Banner = ({ data }: Props) => {
  return (
    <div className="bg-orange-100 relative min-h-[calc(100vh-64px)]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeOut}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={data?.image}
          fill
          alt="pic1"
        />
      </motion.div>

      <div className="text-black absolute inset-0  flex flex-col  small:text-right  small:items-end small:p-32">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative text-6xl mb-4  drop-shadow-md shadow-black"
        >
          <Image
            src={data.heading}
            fill
            alt="text"
          />
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-xl  max-w-[32rem] mb-6 drop-shadow-md shadow-black"
        >
          {data.description}
        </motion.p>

       {data?.btn && <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Button className="bg-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300">
            {data?.btn.text}
          </Button>
        </motion.div>}
      </div>
    </div>
  )
}

export default Banner
