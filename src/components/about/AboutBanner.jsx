import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AboutBanner = ({ heading, title, description, buttonText }) => {
  const navigate = useNavigate()
  const onButtonClick = () => {
    navigate('/contact')
  }
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading title={heading} />

        <h2 className="text-3xl font-bold mt-6 mb-4">{title}</h2>

        <p className="text-lg mb-6">{description}</p>

        <Button variant="danger" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

export default AboutBanner
