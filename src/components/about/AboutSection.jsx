import React from 'react'
import SectionHeading from '../common/SectionHeading'
const AboutSection = ({ id, description }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading title="Our Mission" />
        <p className="text-lg text-gray-700 mt-6">{description}</p>
      </div>
    </section>
  )
}

export default AboutSection
