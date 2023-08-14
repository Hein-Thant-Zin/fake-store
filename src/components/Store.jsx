import { useEffect, useState } from 'react';
import './Store.css';
export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    //callback function

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        //async
        setProducts(data);
        setloading(false);
      });
    console.log(products);
  }, []); //dependency array

  return (
    <>
      <h2 className="title">Our Store</h2>
      <ul className="store-container">
        {loading ? <p>loading...</p> : null}
        <p className="title"></p>
        {products.map((item) => {
          return (
            <li className="product" key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
