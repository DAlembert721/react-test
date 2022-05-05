import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import MenuNavbar from "./components/MenuNavbar";
import OrderDetail from "./pages/OrderDetail";

const App = () =>  {

  return (
    <div className="App">
        <MenuNavbar/>
        <div className="w-100 p-0">
            <Routes>
                <Route path="/" element={<Orders />} >
                    <Route path="orders" element={<Orders />} />
                </Route>
                <Route path="/orders/:orderId" element={<OrderDetail />} />
                <Route path="products" element={<Products />}  />
            </Routes>
        </div>
    </div>
  )
}

export default App
