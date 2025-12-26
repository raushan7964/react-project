import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">BrandName</h4>
          <p className="text-sm">Building delightful digital products for teams that move fast.</p>
        </div>

        <div className="flex gap-6">
          <NavLink to="/about" className="text-slate-300 hover:text-white">
            About
          </NavLink>
          <NavLink to="/contact" className="text-slate-300 hover:text-white">
            Contact
          </NavLink>
          <NavLink to="/blog" className="text-slate-300 hover:text-white">
            Blog
          </NavLink>
        </div>

        <div className="text-sm">
          <div>© {new Date().getFullYear()} BrandName. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
