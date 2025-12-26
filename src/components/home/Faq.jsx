import { useState } from 'react'
import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We offer Web Development, UI/UX Design and SEO optimization to help your product grow.',
  },
  {
    q: 'How can we contact you?',
    a: 'You can reach us via the contact page or email hello@example.com',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes — we provide maintenance and growth packages after launch.',
  },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <SectionWrapper bg="bg-gray-50">
      <SectionHeading eyebrow="Support" title="Frequently asked questions" />

      <div className="max-w-3xl mx-auto mt-6 space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-white/6 rounded-lg bg-white p-4">
            <button
              className="w-full flex items-center justify-between text-left font-medium"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-slate-800">{faq.q}</span>
              <svg
                className={`w-5 h-5 text-slate-500 transform ${
                  open === i ? 'rotate-180' : ''
                } transition-transform`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {open === i && <p className="mt-3 text-slate-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FAQ
