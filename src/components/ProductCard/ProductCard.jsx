import { useState, useContext } from "react"
import styles from "./ProductCard.module.css"
import { CartContext } from "../../utils/CartContext"

export default function ProductCard({item}){
    const [qty,setQty] = useState(0)

    // use the context
    const [cart, setCart] = useContext(CartContext)
    //console.log(cart.find(existing => existing && existing.id===item.id))
    const addToCart = () => {
        if(qty<=0) return
        const newCartItem = {id:item.id,title: item.title, price:item.price,image:item.image,qty:qty}
        //console.log(cart.find(existing => existing.id===item.id))
        if(cart.length>0 && cart.find(existing => existing.id===item.id)) return
        setCart([...cart, newCartItem])
        setQty(0)


    }
    return (<>
        <div className={`${styles.card}`} >
            <img src={item.image} />
            <h5> {item.title} </h5>
            <p> ${item.price} </p>
            <div className={`${styles.qtyContainer}`}>
                <button className={`${styles.btn} ${styles.outline}`} onClick={() => {setQty(qty-1>=0 ? qty-1:0)}} >-</button>
                <input type="text" readOnly name="qty" value={qty} />
                <button className={`${styles.btn} ${styles.outline}`} onClick={()=> {setQty(qty+1)}}>+</button>
            </div>
            <p> {item.category} </p>
            <button className={`${styles.btn}`} onClick={addToCart}> Add to cart </button>
        </div>
    </>)
}