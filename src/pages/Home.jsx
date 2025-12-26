import HeroBanner from '../components/home/HeroBanner'
import Services from '../components/home/Services'
import WhoWeAre from '../components/home/WhoWeAre'
import Testimonials from '../components/home/Testimonial'
import FAQ from '../components/home/Faq'

const Home = () => {
  return (
    <>
      <HeroBanner
        bgimg={
          <img
            src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1600&auto=format&fit=crop"
            alt="Startup workspace"
            className="w-full h-full object-cover object-center"
          />
        }
        title="Build beautiful products faster"
        subtitle="Design, ship and scale with confidence. Product and design systems for teams that move quickly."
        buttonText="Get started — it's free"
      />

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <WhoWeAre />
        <Services />
        <Testimonials />
        <FAQ />

        <section className="bg-blue-600 text-white rounded-xl px-8 py-12 text-center">
          <h2 className="text-2xl font-bold  underline">Ready to get started?</h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Create an account and launch your first project today. No credit card required.
          </p>
          <div className="mt-6">
            <a
              href="/register"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
            >
              Create account
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
