import SectionWrapper from '../components/common/SectionWrapper'
import SectionHeading from '../components/common/SectionHeading'
import ContactForm from '../components/contact/ContactForm'

import { useState } from 'react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <SectionWrapper bg="bg-transparent" overlay>
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Have a project in mind? Send us a message and we'll get back to you shortly."
        className="text-white"
      />

      <div className="grid md:grid-cols-2 gap-10 mt-8 items-start text-white">
        <div>
          <h3 className="text-lg font-semibold">Our office</h3>
          <p className="mt-2">
            123 Startup Ave, Suite 100
            <br />
            City, Country
          </p>

          <div className="mt-6">
            <p className="text-sm">Email</p>
            <a href="mailto:hello@example.com" className="text-blue-300">
              hello@example.com
            </a>
          </div>

          <div className="mt-4">
            <p className="text-sm">Phone</p>
            <a href="tel:+1234567890" className="text-blue-300">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </SectionWrapper>
  )
}

export default Contact
