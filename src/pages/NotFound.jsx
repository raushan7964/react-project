import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4">Page not found</p>
      <Link to="/" className="mt-6 text-blue-600 underline">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
