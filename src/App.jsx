import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import CheckOutPage from './pages/CheckOutPage/CheckOutPage'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {

  const [cart, setCart] = useState([])

  const loadCartData = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data)
  }

  useEffect(() => {

    loadCartData()

  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} loadCartData={loadCartData}/>}></Route>
        <Route path="/checkOut" element={<CheckOutPage cart={cart} loadCartData={loadCartData}/>}></Route>
        <Route path="/order" element={<OrderPage cart={cart} />}></Route>
      </Routes>

    </>
  )
}

export default App
