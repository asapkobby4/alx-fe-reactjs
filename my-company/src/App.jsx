import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'


function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Routes path='/' element={<Home />} />
        <Routes path='/about' element={<About />} />
        <Routes path='/contact' element={<Contact />} />
        <Routes path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App 