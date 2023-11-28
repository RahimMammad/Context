import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useBasket } from '../context/BasketContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { basket, addToBasket, removeBasket } = useBasket();
  console.log(basket);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://northwind.vercel.app/api/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p>{product.name}</p>
              <span>{product.unitPrice}</span>
              <button onClick={() => addToBasket(product)}>Add To Cart</button>
              <button onClick={() => removeBasket(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
