import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navigation/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
