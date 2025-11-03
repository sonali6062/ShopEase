
import { Outlet } from 'react-router-dom'
import './App.css'
import NaveItems from './components/NaveItems'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
    <NaveItems/>
    <div className='min-vh-100'>
    <Outlet/>
      <Toaster/>
    </div>
    <Footer/>
   
    </>
  )
}

export default App
