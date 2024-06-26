import React from "react"
import Link from "next/link"
import "../../../../../src/modules/layout/templates/footer/style.css"

const Support: React.FC = () => {
  return (
    <div className="container">
      {/* <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Story Image" className="center" width={500} height={500} /> */}
      <div className="title">
        <h1>Support</h1>
      </div>
      <div className="description-container">
        <p className="description">
          <h3>
            <strong>{` We're Here to Help `}</strong>
          </h3>
          <p>
            At Orgita, we are committed to providing exceptional support to
            ensure your experience with our products is nothing short of
            delightful. Whether you have questions, need assistance, or require
            guidance, our dedicated support team is here for you.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Shipping Information</strong>
          </h3>
          <p>
            We offer free shipping on all orders above ₹1000 within India. For
            orders below ₹1000, a standard shipping fee applies. International
            shipping is available at competitive rates. Please refer to our
            Shipping Policy for more details.
          </p>
        </p>
        <br />

        <p className="description">
          <h3>
            <strong>Returns & Exchanges</strong>
          </h3>
          <p>
            If you are not completely satisfied with your purchase, we are here
            to help. You can return any unused and unopened products within 30
            days of purchase. To initiate a return or exchange, please visit our
            Returns & Exchanges page with your order details.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Product Support</strong>
          </h3>
          <p>
            For specific product-related queries, such as usage instructions,
            benefits, or ingredient information, please visit the product page
            on our website or refer to our Product Support section.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Stay Updated</strong>
          </h3>
          <p>
            Stay updated with the latest news, offers, and tips from Orgita by
            subscribing to our newsletter. Visit the bottom of our homepage to
            sign up.
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
            them through our Feedback & Suggestions page. <br/> Thank you for choosing
            Orgita. We are dedicated to helping you embrace your natural beauty
            with our range of organic products.
          </p>
        </p>
        <br />
      </div>
      <Link href="/footer"></Link>
    </div>
  )
}

export default Support
