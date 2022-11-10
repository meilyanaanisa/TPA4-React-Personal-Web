import {Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage'
import Course from './components/Course/Course'
import DetailCourse from './components/DetailCourse'
import Blog from './components/Blog/Blog'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="container">
    <NavBar />

    <Routes>
      
      <Route path='/' exact element={ <Home/> }/>

      {/* Menampilkan halaman about */}
      <Route path='about' element={ <About/> } />

      <Route path='course' element={ <Course/> } />

      {/* Menampilkan halaman course */}
      <Route path='course/:id' element={ <DetailCourse/> }/>

      {/* Menampilkan halaman Blog */}
      <Route path='blog' element={ <Blog /> }/>

      {/* Menampilkan halaman yang tidak ditemukan */}
      <Route path='*' element={ <ErrorPage/> } />
      
    </Routes>
    <Footer/>
    </div>
      
  )
}

export default App
