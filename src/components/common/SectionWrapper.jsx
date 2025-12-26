const SectionWrapper = ({
  id,
  bg = 'bg-white',
  bgImage,
  children,
  noPadding = false,
  overlay = false,
}) => {
  return (
    <section
      id={id}
      className={`relative ${bg} ${noPadding ? '' : 'py-16 md:py-20'}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Optional overlay */}
      {overlay && <div className="absolute inset-0 bg-black/50 z-0" />}

      <div className="relative z-10 max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}

export default SectionWrapper
