import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import About from './pages/About/About'
import Error from './pages/Error/Error'


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/detail/:id' element= {<Detail/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/*' element= {<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
