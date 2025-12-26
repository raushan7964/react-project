import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
