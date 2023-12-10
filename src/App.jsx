
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Compopnents/NavBar/NavBar'
import Footer from './Compopnents/Footer/Footer'






function App() {

  return (
    <>

      <div className='mx-auto'>

        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
