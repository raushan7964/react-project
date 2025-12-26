import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import AuthForm from '../components/Auth/AuthForm'
import ProtectedRoute from '../router/ProtectedRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/register',
    element: <AuthForm mode="register" />,
  },
  {
    path: '/login',
    element: <AuthForm mode="login" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
