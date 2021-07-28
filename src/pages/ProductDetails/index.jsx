import React, { useState, useEffect } from 'react';
//STORE DATA AND ACTION DISPARATE
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS OF SHOPPING CART
import * as ShoppingCartActions from '../../store/modules/shoppingCart/actions';
//ROUTE PARAMS
import { useParams } from 'react-router-dom';
//PRODUCTS DATA
import { products } from '../../server.json'
//STYLE
import './styles.css';

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  //ACTIONS DISPATCH
  const dispatch = useDispatch();

  //HANDLER FOR ADD PRODUCT TO SHOPPING CART
  const addProduct = (product) => {
    dispatch(ShoppingCartActions.addToShoppingCart(product));
  }

  useEffect(() => {
    if (params.idProduct) {
      setProduct(Object.values(products).find(item => item.id == params.idProduct));
    }
  }, []);

  return (
    <main className="container">
      <div className="product-container-details">
        <img src={product.image} alt={product.title} />
        <div className="product-info-details">
          <strong>{product.title}</strong>
          <span>R$ {product.price}</span>
          <strong>{product.description}</strong>
        </div>

        {/* ADD ONE INCREMENT OF PRODUCT WHEN CLICKED */}
        <button type="button" onClick={() => { addProduct(product) }}>
          <span>Adiconar</span>
        </button>
      </div>
    </main>
  );
}