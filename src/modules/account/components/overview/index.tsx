import { Customer, Order } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import { formatAmount } from "@lib/util/prices"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type OverviewProps = {
  customer: Omit<Customer, "password_hash"> | null
  orders: Order[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper" className=" hidden xsmall:hidden sm:hidden md:block lg:block max-w-auto p-12 bg-slate-200 border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {/* <div data-testid="overview-page-wrapper" className="p-8 bg-gray-100"> */}
      <div className="hidden small:block ">
        {/* <div className="text-xl-semi flex justify-between items-center mb-4"> */}
        <div className="text-xl-semi flex justify-between items-center mb-4 text-orange-950">

          <span data-testid="welcome-message" data-value={customer?.first_name}>HEYY!! {customer?.first_name}</span>
          {/* <span className="text-base text-gray-600"> */}
          {/* <span className="text-base text-ui-fg-base p-4 font-semibold text-orange-950"> */}
          <span className="text-base text-ui-fg-base p-4 font-semibold text-orange-950">

            Signed in as:{" "}
            <span className="font-semibold" data-testid="customer-email" data-value={customer?.email}>{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-orange-950">
        {/* <div className="flex flex-col py-8 border-t border-gray-300"> */}
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
          {/* <div className="flex flex-col gap-y-8"> */}
            <div className="flex items-start gap-x-16 mb-6">
            {/* <div className="flex items-start gap-x-16 mb-8">   */}
              <div className="flex flex-col gap-y-4">
              {/* <div className="flex flex-col gap-y-4"> */}
                <h3 className="text-xl font-semibold">Profile</h3>
                
                {/* <h3 className="text-xl font-semibold">Profile</h3> */}
                <div className="flex items-end gap-x-2">
                  <span className="text-xl-semi leading-none text-orange-950" data-testid="customer-profile-completion" data-value={getProfileCompletion(customer)}>
                  {/* <span className="text-xl font-bold" data-testid="customer-profile-completion" data-value={getProfileCompletion(customer)}> */}
                    {getProfileCompletion(customer)}%
                  </span>
                  {/* <span className="uppercase text-base-regular text-ui-fg-subtle"> */}

                  {/* <span className="uppercase text-sm text-gray-500"> */}
                  <span className="uppercase text-base-regular text-ui-fg-subtle">
                    Completed
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                {/* <h3 className="text-large-semi">Addresses</h3> */}
                <h3 className="text-xl font-semibold">Address</h3>
                <div className="flex items-end gap-x-2 text-orange-950">
                  {/* <span className="text-3xl-semi leading-none" data-testid="addresses-count" data-value={customer?.shipping_addresses?.length || 0}> */}
                  <span className="text-2xl font-bold leading-none text-orange" data-testid="addresses-count" data-value={customer?.shipping_addresses?.length || 0}>
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  {/* <span className="uppercase text-base-regular text-ui-fg-subtle"> */}
                  <span className="uppercase text-base-regular text-ui-fg-subtle text-gray-500">
                    Saved
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col gap-y-4  "> */}
            <div className="flex flex-col gap-y-4  ">

              <div className="flex items-center gap-x-2">
                {/* <h3 className="text-large-semi">Recent orders</h3> */}
                <h3 className="text-2xl font-semibold">Recent orders</h3>
              </div>
              <ul className="flex flex-col gap-y-4 text-orange-950" data-testid="orders-wrapper">
                {orders && orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id} data-testid="order-wrapper" data-value={order.id}>
                        <LocalizedClientLink
                          href={`/account/orders/details/${order.id}`}
                        >
                          {/* <Container className="bg-gray-50 flex justify-between items-center p-4"> */}
                          <Container className="bg-white shadow-md flex justify-between items-center p-4 rounded-lg">
                            {/* <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1"> */}
                            <div className="grid grid-cols-3 grid-rows-2 text-base gap-x-4 flex-1">
                              <span className="font-semibold">Date placed</span>
                              <span className="font-semibold">
                                Order number
                              </span>
                              <span className="font-semibold">
                                Total amount
                              </span>
                              <span data-testid="order-created-date">
                                {new Date(order.created_at).toDateString()}
                              </span>
                              <span data-testid="order-id" data-value={order.display_id}>#{order.display_id}</span>
                              <span data-testid="order-amount">
                                {formatAmount({
                                  amount: order.total,
                                  region: order.region,
                                  includeTaxes: false,
                                })}
                              </span>
                            </div>
                            {/* <button className="flex items-center justify-between" data-testid="open-order-button"> */}
                            <button className="flex items-center justify-between text-gray-500 hover:text-gray-700" data-testid="open-order-button">
                              <span className="sr-only">
                                Go to order #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </Container>
                        </LocalizedClientLink>
                      </li>
                    )
                  })
                ) : (
                  <span data-testid="no-orders-message text-orange-950">No recent orders</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (
  customer: Omit<Customer, "password_hash"> | null
) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
