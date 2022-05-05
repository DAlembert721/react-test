import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import MenuNavbar from "./components/MenuNavbar";
import OrderDetail from "./pages/OrderDetail";
import {Modal, Spinner} from "reactstrap";
import {useSelector} from "react-redux";

const App = () =>  {
    const {isLoading} = useSelector(state => state.ui);
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
        <Modal
            contentClassName="bg-transparent border-0"
            centered
            isOpen={isLoading}
        >
            <div className="d-flex justify-content-center">
                <Spinner
                    color="white"
                >
                    ...Loading
                </Spinner>
            </div>
        </Modal>
    </div>
  )
}

export default App
