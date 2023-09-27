import './App.css';
import { Routes, Route } from "react-router-dom"
import toast from 'react-hot-toast';
import {useEffect} from "react"

import Header from "./Pages/Header/Header"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Checkout from './Pages/Checkout/Checkout';
import WishList from './Pages/WishList/WishList';
import Footer from './Pages/Footer/Footer';
import Product from "./Pages/Product/Product"
import ProductDetails from './Pages/Product/ProductDetail/productDetails';
import Profile from "./Pages/Profile/Profile"



function App() {

  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
