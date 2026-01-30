import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./styles/shop.module.css";
import { CartContext } from "../utils/CartContext";
export default function Shop() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  


  useEffect(() => {
    const productsFetch = async () => {
      try {
        const req = await fetch("https://fakestoreapi.com/products");
        if (!req.ok) {
          setError(req.statusText);
          setIsLoading(false);
          return;
        }
        const response = await req.json();
        console.log(response)
        setProducts(response);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    productsFetch();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className={`${styles.error}`}> {error} </p>;
  return (
    <>
      <h3> {products.length || 0} products </h3>
      <div className={`${styles.productsGrid}`}>
        {" "}
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
