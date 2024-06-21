"use client"

import { Order } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const OrderOverview = ({ orders }: { orders: Order[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      //  className="w-full flex flex-col items-center gap-y-6 p-6 bg-gray-50 rounded-md"
      data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">Nothing to see here</h2>
      {/* <h2 className="text-2xl font-semibold text-gray-700">Nothing to see here</h2> */}
      <p className="text-base-regular">
      {/* <p className="text-lg text-gray-600"> */}
        You don&apos;t have any orders yet, let us change that {":)"}
      </p>
      <div className="mt-4">
      {/* <div className="mt-6"> */}
        <LocalizedClientLink href="/" passHref>
          <Button data-testid="continue-shopping-button">
          {/* <Button data-testid="continue-shopping-button" className="bg-blue-600 text-white hover:bg-blue-700"> */}
            Continue shopping
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
