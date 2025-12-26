import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'

const features = [
  {
    title: 'Fast development',
    desc: 'Ship features quickly with a pragmatic approach to architecture and tooling.',
  },
  {
    title: 'Beautiful UI',
    desc: 'Design systems and components that feel polished and accessible.',
  },
  {
    title: 'Scalable infra',
    desc: 'Production-ready deployments with performance and reliability in mind.',
  },
]

const WhoWeAre = () => {
  return (
    <SectionWrapper id="who-we-are" bg="bg-white">
      <SectionHeading
        eyebrow="About us"
        title="Who we are"
        subtitle="A small, focused team building delightful digital products for ambitious teams."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-slate-700 max-w-xl">
            We combine product thinking, beautiful design and reliable engineering to deliver
            results our customers love. From prototypes to production, we partner with you across
            the entire product lifecycle.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/about"
              className="inline-block px-5 py-3 bg-blue-600 text-white rounded-md font-medium"
            >
              Learn more
            </a>
            <a
              href="/contact"
              className="inline-block px-5 py-3 border border-slate-200 text-slate-700 rounded-md"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-3">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WhoWeAre
