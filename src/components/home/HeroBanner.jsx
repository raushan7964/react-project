const HeroBanner = ({ title, subtitle, bgimg, buttonText = 'Get Started' }) => {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        {bgimg}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 text-center text-white py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">{title}</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-3xl mx-auto">{subtitle}</p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/register"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition"
            >
              {buttonText}
            </a>
            <a href="/about" className="text-white/90 hover:text-white underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
