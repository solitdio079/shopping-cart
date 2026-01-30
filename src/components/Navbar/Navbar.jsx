import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useContext } from "react"
import { CartContext } from "../../utils/CartContext"
export default function Navbar(){
    const [cart] = useContext(CartContext)
    return(<>
    <div className={`${styles.navbarContainer}`}>
        <h1>byShop</h1>
        <ul className={` ${styles.links} `}>
            <li><Link to={"/"} >Home</Link></li>
            <li> <Link to={"/shop"} >Shop</Link></li>
            <li><Link to={"/cart"} >Cart {`[${cart.length || 0}]`} </Link></li>
        </ul>
    </div>
    </>)
}