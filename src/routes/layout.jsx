import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useState } from "react";
import { CartContext } from "../utils/CartContext";

export default function Layout() {
  const [cart,setCart] = useState([])
 
  //const updateCart = (newCart) => {setCart(newCart)}
  return (
    <>
    <CartContext.Provider value={[cart,setCart]}>
      <Navbar />
      <Outlet />
      <Footer />
      </CartContext.Provider>
    </>
  );
}
