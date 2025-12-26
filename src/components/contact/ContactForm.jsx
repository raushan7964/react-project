import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting, isSubmitSuccessful } = formState

  const submit = async (data) => {
    if (onSubmit) return onSubmit(data)
    // placeholder: emulate async send
    await new Promise((r) => setTimeout(r, 800))
    alert('Thanks! We received your message.')
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-slate-700">Full name</label>
        <input
          {...register('name', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm py-2 px-3"
          placeholder="Your name"
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          {...register('email', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm py-2 px-3"
          placeholder="you@company.com"
          type="email"
        />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          {...register('message', { required: true })}
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm py-2 px-3"
          placeholder="How can we help?"
        />
        {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
        {isSubmitSuccessful && <span className="text-green-600">Message sent</span>}
      </div>
    </form>
  )
}

export default ContactForm
