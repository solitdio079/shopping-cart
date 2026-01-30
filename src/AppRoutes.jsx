import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./routes/layout";
import App from "./App";
import Shop from "./routes/shop";
import Cart from "./routes/cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<App/>} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  );
}
