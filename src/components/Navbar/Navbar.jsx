import styles from "./Navbar.module.css"

export default function Navbar(){
    return(<>
    <div className={`${styles.navbarContainer}`}>
        <h1>myFakeShop</h1>
        <ul className={` ${styles.links} `}>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    </div>
    </>)
}