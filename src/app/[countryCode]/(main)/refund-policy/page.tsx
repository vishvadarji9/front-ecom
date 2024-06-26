import React from "react"
import Link from "next/link"
import "../../../../../src/modules/layout/templates/footer/style.css"

const RefundP: React.FC = () => {
  return (
    <div className="container">
      {/* <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Story Image" className="center" width={500} height={500} /> */}
      <div className="title">
        <h1>Refund Policy</h1>
      </div>
      <div className="description-container">
        <p className="description">
          <h3>
            <strong>Eligibility for Refund</strong>
          </h3>
          <p>
           {` We offer a 30-day return policy, which means you have 30 days after
            receiving your item to request a return. To be eligible for a
            return, your item must be in the same condition that you received
            it, unworn or unused, with tags, and in its original packaging.
            You’ll also need the receipt or proof of purchase. `}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Refund Process</strong>
          </h3>
          <p>
            {`Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund.
            <br /> If your refund is approved, the refund will be processed, and
            a credit will automatically be applied to your original method of
            payment, within a certain number of days, depending on your card
            issuer's policies.`}
          </p>
        </p>
        <br />

        <p className="description">
          <h3>
            <strong>Exchanges</strong>
          </h3>
          <p>
            We do not offer exchanges at this time. If you wish to exchange an
            item, please return the item for a refund and place a new order for
            the item you would like.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Shipping Costs</strong>
          </h3>
          <p>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Damaged or Defective Items</strong>
          </h3>
          <p>
            If you received a damaged or defective product, please contact us
            immediately for assistance. We will assess the issue and make
            arrangements for a replacement or refund as necessary.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Feedback & Suggestions</strong>
          </h3>
          <p>
            Your feedback is invaluable to us. If you have any suggestions or
            ideas on how we can improve our products or services, please share
            them through our Feedback & Suggestions page. <br /> Thank you for
            choosing Orgita. We are dedicated to helping you embrace your
            natural beauty with our range of organic products.
          </p>
        </p>
        <br />
      </div>
      <Link href="/footer"></Link>
    </div>
  )
}

export default RefundP
