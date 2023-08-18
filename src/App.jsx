import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Flowers from './pages/Flowers'
import Plants from './pages/Plants'
import Homepage from './pages/Homepage'
import Gifts from './pages/Gifts'
import Discount from './pages/Discount'
import NotFound from './pages/notFound'
import Cardpage from './pages/Cardpage'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
    <div className=''>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Flowers />} />
          <Route path='flowers' element={<Homepage />} />
          <Route path='flowers/:id' element={<Cardpage />} />

          <Route path='plants' element={<Plants />} />
          <Route path='plants/:id' element={<Cardpage />} />

          <Route path='discounts' element={<Discount />} />
          <Route path='gifts' element={<Gifts />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='cardpage' element={<Cardpage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App
