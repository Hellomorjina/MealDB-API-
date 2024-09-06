import './App.css'
import Info from './component/Info'
import Main from './component/main'
import './index.css'
import {Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
 
      {/* <Main /> */}
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/:Mealid' element={<Info />}/>
      </Routes>

  

    </>
  )
}

export default App