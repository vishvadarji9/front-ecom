import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { listCustomerOrders } from "@lib/data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Orders",
  description: "Overview of your previous orders.",
}

export default async function Orders() {
  const orders = await listCustomerOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className=" mr-8 max-w-auto  max-h-96 p-8 bg-slate-200 border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi text-orange-950 text-center hover:text-slate-500">Orders</h1>
        <div className="flex flex-col px-8 border-t border-orange-950"></div>

        <p className="text-base-regular text-slate-600 break-normal">
          View your previous orders and their status,you can also create
          returns or exchanges for your orders if needed.
        </p>
      </div>
      <div>
        <OrderOverview orders={orders} />
      </div>
    </div>
  )
}
