import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, data } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CheckOutPage from './pages/CheckOutPage/CheckOutPage'
import OrderPage from './pages/OrderPage/OrderPage'
import './App.css'

function App() {

  const [cart, setCart] = useState([])


  useEffect(() => {

    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        console.log(response.data)
        setCart(response.data)
      })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />}></Route>
        <Route path="/checkOut" element={<CheckOutPage cart={cart} />}></Route>
        <Route path="/order" element={<OrderPage cart={cart} />}></Route>
      </Routes>

    </>
  )
}

export default App
