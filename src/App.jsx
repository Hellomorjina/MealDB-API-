import './App.css'
import Home from './component/Home'
import Info from './component/Info'


import './index.css'
import {Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
 
      {/* <Main /> */}
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:Mealid' element={<Info />}/>
      </Routes>

  

    </>
  )
}

export default App