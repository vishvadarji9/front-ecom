import React from "react"
import Image from "next/image"
import Link from "next/link"
import "../../../../../src/modules/layout/templates/footer/style.css"

const Shipping: React.FC = () => {
  return (
    <div className="container">
      {/* <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Story Image" className="center" width={500} height={500} /> */}
      <div className="title">
        <h1>Shipping Policy</h1>
      </div>
      <div className="description-container">
        <p className="description">
          <h3>
            <strong>How does the delivery process work?</strong>
          </h3>
          <p>
            Once our system processes your order, your products are inspected
            thoroughly to ensure they are in a perfect condition.
            <br /> After they pass through the final round of quality check,
            they are packed and handed over to our trusted delivery partner.
            <br /> Our delivery partners then bring the package to you at the
            earliest possiblity. In case, they are unable to reach your provided
            address or at a suitable time, they will contact you to resolve the
            issue.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>How long will it take for the order to reach me?</strong>
          </h3>
          <p>
            Please refer the product page for estimated shipping and delivery
            timelines for both domestic and international orders. From the time
            of order placed, it takes about 5-7 days for domestic orders and
            7-10 days for international orders to reach you. <br /> If you have
            placed an order with multiple items, please note that your items may
            arrive in multiple shipments. The estimated delivery times are
            indicative, and, on some occasions, there might be some unavoidable
            delays beyond our control. We will keep you informed in case of any
            delays.
          </p>
        </p>
        <br />

        <p className="description">
          <h3>
            <strong>
              Are there any shipping charges applicable on my order?
            </strong>
          </h3>
          <p>
            We have standard shipping charges for most addresses. India shipping
            charges - A flat Rs.40 charge is applied to all COD orders , while
            there is free shipping for all Prepaid Orders.
          </p>
        </p>
        <br />
      </div>
      <Link href="/footer"></Link>
    </div>
  )
}

export default Shipping
