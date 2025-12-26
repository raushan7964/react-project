import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'

const testimonials = [
  { name: 'Rahul', msg: 'Amazing work! Helped our product launch on time.', role: 'Founder, Acme' },
  { name: 'Arun', msg: 'Highly recommended. Professional and fast.', role: 'CTO, BetaCorp' },
  { name: 'Priya', msg: 'Great communication and delivery.', role: 'PM, ShopCo' },
]

const Testimonials = () => {
  return (
    <SectionWrapper>
      <SectionHeading eyebrow="Praise" title="What our clients say" />

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <blockquote className="text-slate-700">“{t.msg}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
                {t.name.charAt(0)}
              </div>
              <div className="text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
