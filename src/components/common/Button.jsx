import React from 'react'

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick }) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded transition cursor-pointer'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
