import { useContext, useState } from "react"
import {CartContext} from "../utils/CartContext"
import styles from "./styles/cart.module.css"
export default function Cart(){
    const [cart,setCart] = useContext(CartContext)

    const changeQty = (item, qty) => {
        //const cartItem  = cart.find(existing => existing.id === item.id)[0]
        if(qty === 0){
            setCart(cart.filter(existing => existing.id !== item.id))
            return
        }
        setCart(cart.map(existing => {
            if(existing.id === item.id){
                return {...existing,qty}
            }
            return existing
        }))
    }
    return(<div className={`${styles.cartContainer}`}>
    <p> {cart.length} items </p>
    <table>
        <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
        </tr>
        </thead>
      
        <tbody>
            { cart.map(cartItem => (<tr>
                <td><img width={"60px"} src={cartItem.image} /> </td>
            <td>{cartItem.title}</td>
            <td>  <div className={`${styles.qtyContainer}`}>
                            <button className={`${styles.btn} ${styles.outline}`} onClick={() =>{changeQty(cartItem, cartItem.qty-1>=0?cartItem.qty-1:0) }} >-</button>
                            <input type="text" readOnly name="qty" value={cartItem.qty} />
                            <button className={`${styles.btn} ${styles.outline}`} onClick={() => { changeQty(cartItem,cartItem.qty+1) } }>+</button>
                        </div></td>
            <td>$ {cartItem.price}</td>
            <td>$ {cartItem.qty*cartItem.price}</td>

            </tr>))}
        </tbody>
    </table>
    <div className={`${styles.subtotalContainer}`}>
        <h3>Total:</h3>
        <p>$ {cart.reduce((acc,curr)=> acc +=curr.qty*curr.price,0)}</p>
    </div>
    </div>)
}