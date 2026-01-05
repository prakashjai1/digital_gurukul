import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import Home from './components/Home'
import Teachers from './components/Teachers'
import Holidays from './components/Holidays'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import Footer from './components/Footer'


 
const App = () => {

  return (
         
    <>  
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<h1>Welcome to aur Website!</h1>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App