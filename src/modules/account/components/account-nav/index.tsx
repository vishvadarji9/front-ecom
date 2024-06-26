"use client"

import { Customer } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"
import { IoArrowForwardCircleSharp } from "react-icons/io5";

import ChevronDown from "@modules/common/icons/chevron-down"
import { signOut } from "@modules/account/actions"
import User from "@modules/common/icons/user"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";
import { FaClipboardUser } from "react-icons/fa6";


import { MdOutlineLogout } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";



const AccountNav = ({
  customer,
}: {
  customer: Omit<Customer, "password_hash"> | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signOut(countryCode)
  }

  return (
    <div>
      {/* <div className="small:hidden" data-testid="mobile-account-nav"> */}
      {/* <div className="small:hidden" data-testid="mobile-account-nav"> */}
      <div className=" small:hidden md:block mr-8 max-w-auto  max-h-auto p-4 bg-slate-200 border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " data-testid="account-nav">


        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2"
            // className="flex items-center gap-x-2 text-sm py-2 text-gray-700 hover:text-gray-900"
            data-testid="account-main-link"
          >
            <>
              <ChevronDown className="transform rotate-90" />
              {/* <span>Account</span> */}
              <span className=" flex flex-row  text-base-semi font-bold text-xl text-orange-950 hover:text-slate-950  ">
              Your account      
              </span>
            </>
          </LocalizedClientLink>
        ) : (
          <>
          
            <div className="text-xl-semi mb-4 px-8 text-orange-950">
              {/* <div className="text-lg mb-4 px-8"> */}
              {/* Hello, {customer?.first_name} */}
              HEYY{customer?.first_name}
            </div>
            <div className="text-base-regular">
              <ul>
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                    data-testid="profile-link"
                  >
                    <>
                      <div className="flex items-center font-medium  gap-x-2">
                        {/* <User size={20} /> */}
                        {/* <User className="w-5 h-5" /> */}
                        {/* <span>Profile</span> */}
                        {/* <FaUserEdit /> */}
                        <button className="flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">
                        <FaUserEdit />
                  <span className="text-lg ">Profile</span>
                  </button>
                        {/* <span className="text-base">Profile</span> */}
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                    data-testid="addresses-link"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        {/* <MapPin size={20} /> */}
                        {/* <User className="w-5 h-5" /> */}
                        {/* <span>Addresses</span> */}
                        {/* <FaLocationDot />
                        <span className="text-lg">Address</span> */}
                                          <button className="flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">
                  <FaLocationDot />
                  <span className="text-lg">Address</span>
    </button>
                        {/* <span className="text-base">Addresses</span> */}
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-2">
                      {/* <Package size={20} /> */}
                      {/* <User className="w-5 h-5" /> */}
                      {/* <span>Orders</span> */}
                      {/* <span className="text-base">Orders</span> */}
                      <button className="flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">

      <BsBagHeartFill />
      <span className="text-lg" >Orders</span>
    </button>
                      {/* {/* <BsBagHeartFill />
                      <span className="text-lg" >Orders</span> */}
                    </div> 
                    <ChevronDown className="transform -rotate-90" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8 w-full "
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-2">
                      {/* <ArrowRightOnRectangle />
                      <span>Log out</span> */}
                                      <button className="flex items-center space-x-2 p-2 bg-transparent hover:bg-orange-950 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
      <span className="text-base">Log out</span>      <MdOutlineLogout className="text-xl" />

    </button>
                    </div>
                    <ChevronDown className="transform -rotate-90" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>





      {/* 
      
      
      
      
      
      */}
      {/* <div className="hidden small:block" data-testid="account-nav"> */}
      <div className=" small:block mr-8 max-w-auto  max-h-auto p-4 bg-slate-200 border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " data-testid="account-nav">

        <div>

          {/* <div className="pb-8"> */}
          <div className="pb-8 pt-6">


            <span className=" flex flex-row  text-base-semi font-bold text-xl text-orange-950 hover:text-slate-950  ">
              Your account      
              </span>
            {/* <h3 className="text-lg">Account</h3> */}
          </div>
          <div className="flex flex-col px-8 border-t border-orange-950 mb-8"></div>

          {/* <div className="text-base-regular text-md"> */}
          <div className="text-base-regular text-md text-slate-950 hover:text-gray-950 font-medium">

            {/* <ul className="flex mb-0 justify-start items-start flex-col gap-y-4 text-gray-950"> */}
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4 text-slate-950 hover:text-gray-950 font-medium">

              <li>
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                >
                  {/* <MdViewHeadline />

                  Overview */}
                  <button className=" flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">
                  <FaClipboardUser />
                  <span className="text-lg">Overview</span>
    </button>
                </AccountNavLink>
              </li>

              <li>
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                >
                  <button className=" flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium items-center space-x-2 p-2 border rounded hover:bg-gray-200">
                  <FaUserEdit />
                  <span className="text-lg">Profile</span>
    </button>
                 {/* <ImProfile /> */}
                 {/* Profile */}
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                >
                  <button className="flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">
                  <FaLocationDot />
                  <span className="text-lg">Address</span>
    </button>
                  {/* <FaAddressCard /> */}
                  {/* Addresses */}
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                >
                  {/* <BsBagHeartFill />
                  Orders */}
 <button className="flex mb-0  flex-row gap-y-4 text-slate-950 hover:text-orange-950 font-medium  items-center space-x-2 p-2 border rounded hover:bg-gray-200">

      <BsBagHeartFill />
      <span className="text-lg" >Orders</span>
    </button>
                </AccountNavLink>
              </li>
              <li className="text-grey-700">
                {/* <button  */}
                {/* <button className=" bg-transparent hover:bg-orange-950 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded" */}

                  {/* type="button" */}
                  {/* onClick={handleLogout} */}
                  {/* data-testid="logout-button" */}
                   {/* > */}

                  {/* <MdOutlineLogout />Log out */}

                {/* </button> */}
                <button 
                type="button" 
               onClick={handleLogout}
               data-testid="logout-button"
                className="flex items-center space-x-2 p-2 bg-transparent hover:bg-orange-950 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
      <span className="text-base">Log out</span>      <MdOutlineLogout className="text-xl" />

    </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  'data-testid'?: string
}

const AccountNavLink = ({ href, route, children, 'data-testid': dataTestId }: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  return (
    <LocalizedClientLink
      href={href}
      className={clx("text-ui-fg-subtle hover:text-ui-fg-base", {
        "text-ui-fg-base font-semibold": active,
      })}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav



