import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../server.json'

import './styles.css';

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params.idProduct) {
      setProduct(Object.values(products).find(item => item.id == params.idProduct));
    }
  }, []);

  return (
    <main className="container">
      <div className="bag-container">
        {product.title}
        

        <footer>
          <button type="button">Encomendar</button>

          <div className="total">
          </div>
        </footer>
      </div>
    </main>
  );
}