// components/FAQItem.js
"use client";
import React, { useState } from 'react';
import "../data/faqs"
import { FaRegHandPointRight } from "react-icons/fa";

import Image from 'next/image';
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="place-content-center">
    <div className="ml-24">

<button
        onClick={() => setIsOpen(!isOpen)}
       className='  flex items-center space-x-2 p-2 bg-transparent border-hidden hover: border border-slate-950 hover:bg-neutral-200 text-slate-700 font-regular hover:text-orange-950 py-2 px-4 rounded'
        // className=" rounded flex justify-between items-center w-full p-2 focus:outline-none border border-slate-300 hover:bg-slate-500"
      > 
<FaRegHandPointRight className='' />


        <span>{question}</span>
        {/* <FaPlus /> */}

         <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180 gap-4' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg> 

                          </button> 
                          {/* <FaPlus className='object-right-top ' /> */}
                          {/* <Image
                    alt=""
                    // src="/public/chevron-down.svg"
                    src={require('../../../../../../public/chevron-down.svg')}
                    width={15}
                    height={15}
                    className={`${open ? "rotate-180 transform duration-300" : ""
                      } h-5 w-5 text-purple-500 `}
                  /> 
 */}

      
      {isOpen && (
        // <p className=" mt-8 max-w-auto  max-h-auto p-4 bg-slate-20 border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">{answer}</p>
        <p className='  shadow-lg shadow-orange-950 mt-4 flex items-center space-x-2 p-2 bg-transparent border border-slate-300 text-slate-950 font-medium  py-2 px-4 hover:text-slate-900 rounded'>{answer}
     </p>
      )
      }
    </div>
  );
};

export default FAQItem;
