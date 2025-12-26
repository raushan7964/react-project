import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = ({ mode }) => {
  const navigate = useNavigate()
  const isRegister = mode === 'register'

  // Form state
  const [form, setForm] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const { name, gender, email, password } = form

    if (!email || !password || (isRegister && !name)) {
      setError('Please fill all required fields')
      return
    }

    // Get users from localStorage or empty array
    const users = JSON.parse(localStorage.getItem('users')) || []

    if (isRegister) {
      // Check if email already exists
      const userExists = users.find((user) => user.email === email)
      if (userExists) {
        setError('Email already registered')
        return
      }

      // Save user
      const newUser = { name, gender, email, password }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      setSuccess('Registration successful! You can now login.')
      setForm({ name: '', gender: '', email: '', password: '' })
    } else {
      // LOGIN
      const user = users.find((u) => u.email === email && u.password === password)
      if (user) {
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('currentUser', JSON.stringify(user))
        setError('')
        navigate('/')
      } else {
        setError('Invalid email or password')
      }
    }
  }

  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-slate-100">
      {/* Left branding */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-lg opacity-90">
          Manage your projects, track progress, and grow your business with us.
        </p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-2">
            {isRegister ? 'Create your account' : 'Sign in to your account'}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-6">
            {isRegister ? 'Start your journey with us' : 'Enter your credentials to continue'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            {isRegister && (
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            )}

            {/* Gender */}
            {isRegister && (
              <div>
                <label className="text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Error / Success */}
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-md">{error}</div>
            )}
            {success && (
              <div className="bg-green-50 text-green-600 text-sm px-3 py-2 rounded-md">
                {success}
              </div>
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-slate-600">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => navigate(isRegister ? '/login' : '/register')}
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              {isRegister ? 'Login' : 'Register'}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AuthForm
