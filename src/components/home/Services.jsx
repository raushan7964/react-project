import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import { services } from '../../utils/constants'

const Services = () => {
  return (
    <SectionWrapper bg="bg-gray-50">
      <SectionHeading
        eyebrow="What we do"
        title="Our services"
        subtitle="End-to-end services to design, build and grow your product."
      />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center mb-4">
              <span className="font-bold">{service.title.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-slate-600">{service.desc}</p>
            <a href="/contact" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              {service.buttonText}
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Services
