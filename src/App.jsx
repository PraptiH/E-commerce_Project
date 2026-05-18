import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CheckOutPage from './pages/CheckOutPage/CheckOutPage'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/checkOut" element={<CheckOutPage/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
