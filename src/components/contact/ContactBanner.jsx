import React from 'react'
import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
const ContactBanner = ({ BgImage }) => {
  return (
    <SectionWrapper bg="">
      {BgImage}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <SectionHeading
          title="Contact Us"
          subtitle="We're here to help and answer any question you might have. We look forward to hearing from you!"
          className="text-white"
        />
      </div>
    </SectionWrapper>
  )
}

export default ContactBanner
