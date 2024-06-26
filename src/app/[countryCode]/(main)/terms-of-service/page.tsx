import React from "react"
import Link from "next/link"
import "../../../../../src/modules/layout/templates/footer/style.css"

const TermsOfService: React.FC = () => {
  return (
    <div className="container">
      {/* <Image src={require('../../../../../../organic-ecomm-storefront/public/blog1.jpg')} alt="Story Image" className="center" width={500} height={500} /> */}
      <div className="title">
        <h1>Terms of Service</h1>
      </div>
      <div className="description-container">
        <p className="description">
          <h3>
            <strong>Introduction</strong>
          </h3>
          <p>
            {`Welcome to Orgita. These Terms of Service govern your use of
            Orgita's website. By accessing this website, you agree to be bound
            by these terms and conditions. If you disagree with any part of
            these terms, please do not use our website.`}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>License to Use Website</strong>
          </h3>
          <p>
            WUnless otherwise stated, Orgita and/or its licensors own the
            intellectual property rights in the website and material on the
            website. Subject to the license below, all these intellectual
            property rights are reserved. You may view, download for caching
            purposes only, and print pages from the website for your own
            personal use, subject to the restrictions set out below and
            elsewhere in these terms and conditions.
          </p>
        </p>
        <br />

        <p className="description">
          <h3>
            <strong>Acceptable Use</strong>
          </h3>
          <p>
            You must not use this website in any way that causes, or may cause,
            damage to the website or impairment of the availability or
            accessibility of Orgita or in any way which is unlawful, illegal,
            fraudulent, or harmful, or in connection with any unlawful, illegal,
            fraudulent, or harmful purpose or activity. You must not use this
            website to copy, store, host, transmit, send, use, publish, or
            distribute any material which consists of (or is linked to) any
            spyware, computer virus, Trojan horse, worm, keystroke logger,
            rootkit, or other malicious computer software.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>No Warranties</strong>
          </h3>
          <p>
           {` This website is provided "as is" without any representations or
            warranties, express or implied. Orgita makes no representations or
            warranties in relation to this website or the information and
            materials provided on this website. Without prejudice to the
            generality of the foregoing paragraph, Orgita does not warrant that
            this website will be constantly available, or available at all, or
            that the information on this website is complete, true, accurate, or
            non-misleading.`}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Reasonableness</strong>
          </h3>
          <p>
            By using this website, you agree that the exclusions and limitations
            of liability set out in this website disclaimer are reasonable. If
            you do not think they are reasonable, you must not use this website.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Other Parties</strong>
          </h3>
          <p>
            {`You accept that, as a limited liability entity, Orgita has an
            interest in limiting the personal liability of its officers and
            employees. You agree that you will not bring any claim personally
            against Orgita's officers or employees in respect of any losses you
            suffer in connection with the website.`}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Unenforceable Provisions</strong>
          </h3>
          <p>
            If any provision of this website disclaimer is, or is found to be,
            unenforceable under applicable law, that will not affect the
            enforceability of the other provisions of this website disclaimer.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Variation of Terms</strong>
          </h3>
          <p>
            Orgita may revise these terms and conditions from time-to-time.
            Revised terms and conditions will apply to the use of this website
            from the date of the publication of the revised terms and conditions
            on this website. Please check this page regularly to ensure you are
            familiar with the current version.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Assignment</strong>
          </h3>
          <p>
           {` Orgita may transfer, sub-contract, or otherwise deal with Orgita's
            rights and/or obligations under these terms and conditions without
            notifying you or obtaining your consent.`}
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Entire Agreement</strong>
          </h3>
          <p>
            These terms and conditions constitute the entire agreement between
            you and Orgita in relation to your use of this website and supersede
            all previous agreements in respect of your use of this website.
          </p>
        </p>
        <br />
        <p className="description">
          <h3>
            <strong>Law and Jurisdiction</strong>
          </h3>
          <p>
            These terms and conditions will be governed by and construed in
            accordance with the laws of the jurisdiction of India, and any
            disputes relating to these terms and conditions will be subject to
            the exclusive jurisdiction of the courts of India.
          </p>
        </p>
        <br />
      </div>
      <Link href="/footer"></Link>
    </div>
  )
}

export default TermsOfService
