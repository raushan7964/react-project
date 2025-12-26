const SectionHeading = ({ title, subtitle, eyebrow }) => {
  return (
    <div className="text-center mb-12">
      {eyebrow && <div className="text-sm text-blue-500 font-medium mb-2">{eyebrow}</div>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="mt-6 flex justify-center">
        <span className="w-16 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-full" />
      </div>
    </div>
  )
}

export default SectionHeading
