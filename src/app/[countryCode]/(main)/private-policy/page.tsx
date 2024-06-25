

import React from "react"
import Link from "next/link"
import "../../../../../src/modules/layout/templates/footer/style.css"

const privatepolicy: React.FC = () => {
  return (
    <div className="container">
      {/* <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Story Image" className="center" width={500} height={500} /> */}
      <div className="title">
        <h1>Private Policy</h1>
      </div>
      <div className="description-container">
        <p className="description">
          <h3>
            <strong>Introduction</strong>
          </h3>
          <p>
            You are advised to please read the Privacy Policy carefully. This
            Privacy Policy provides succinctly the manner your data is collected
            and used by Orgita. The Privacy Policy of Orgita and its affiliates
            respects your privacy. By accessing the services provided by Orgita,
            you agree to the collection and use of your data by Orgita in the
            manner provided in this Privacy Policy.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Information Collection</strong>
          </h3>
          <p>
            Our motive is to make you feel comfortable using our website, feel
            secure submitting information to us, and know that by using our
            sites you are consenting to the collection of certain data. We may
            collect the following personally identifiable information about you:
            name including first and last name, alternate email address, mobile
            phone number and contact details, ZIP/postal code, opinions of
            features on our websites, and other information as per our
            registration process. We may also collect the following information:
            about the pages you visit/access, the links you click on our site,
            the number of times you access the page, and the number of times you
            have shopped on our website. We collect photos for product reviews
            with customer consent and may use these images for marketing
            purposes, respecting user privacy.
          </p>
        </p>
        <br />

        <p className="description">
          <h3>
            <strong>Use of Information</strong>
          </h3>
          <p>
           {` We use your personal information to help us provide personalized
            features, tailor our sites to your interests, get in touch with you
            when necessary, provide the services requested by you, and preserve
            social history as governed by existing law or policy. We will not
            use your financial information for any purpose other than to
            complete a transaction with you. We do not rent, sell, or share your
            personal information, and we will not disclose any of your
            personally identifiable information to third parties unless we have
            your permission, to provide products or services you’ve requested,
            to help investigate, prevent, or take action regarding unlawful and
            illegal activities, suspected fraud, potential threat to the safety
            or security of any person, violations of Orgita's terms of use, or
            to defend against legal claims, and under special circumstances such
            as compliance with subpoenas, court orders, requests/orders, or
            notices from legal authorities or law enforcement agencies requiring
            such disclosure. We share your information with advertisers on an
            aggregate basis only. `}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>External Links and Cookies</strong>
          </h3>
          <p>
            The site contains links to other websites. We are not responsible
            for the privacy practices of such websites which we do not own,
            manage, or control. Our advertisers may collect anonymous traffic
            information from their own assigned cookies to your browser. We will
            collect anonymous traffic information from you when you visit our
            site. We will collect personally identifiable information about you
            only as part of a voluntary registration process, online survey, or
            contest, or any combination thereof.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Your Choices and Updates</strong>
          </h3>
          <p>
            You may change your interests at any time and may opt-in or opt-out
            of any marketing/promotional/newsletters mailings. Orgita reserves
            the right to send you certain service-related communication,
            considered to be a part of your Orgita account without offering you
            the facility to opt-out. You may update your information and change
            your account settings at any time.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Policy Updates</strong>
          </h3>
          <p>
            We reserve the right to change or update this policy at any time by
            placing a prominent notice on our site. Such changes shall be
            effective immediately upon posting to this site.
          </p>
        </p>
        <br />
      </div>
      <Link href="/footer"></Link>
    </div>
  )
}

export default privatepolicy
