import React from 'react';
//STORE DATA AND ACTION DISPARATE
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS OF SHOPPING CART
import * as ShoppingCartActions from '../../store/modules/shoppingCart/actions';
//ROUTE HISTORY
import { useHistory } from 'react-router-dom';
//STYLE AND ICONS
import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

export default function List({ items }) {
  //ROUTE HISTORY TO REDIRECT
  const history = useHistory();
  //ACTIONS DISPATCH
  const dispatch = useDispatch();
  //HANDLER FOR ADD PRODUCT TO SHOPPING CART
  const addProduct = (product) => {
    dispatch(ShoppingCartActions.addToShoppingCart(product));
  }
  //COLLECT THE AMOUNT OF EACH PRODUCTS IN THE SHOPPING CART
  const amount = useSelector(state =>
    state.shoppingCart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  return (
    <ul className="product-catalog">
      {items.map(item => (
        <li key={item.id} className="product-container">
          {/* REDIRECT TO PRODUCT DETAILS WHEN CLICKED */}
          <div className="product-info" onClick={() => { history.push(`/product/${item.id}`); }}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>R$ {item.price}</span>
          </div>

          {/* ADD ONE INCREMENT OF PRODUCT WHEN CLICKED */}
          <button type="button" onClick={() => { addProduct(item) }}>
            <div>
              {amount[item.id] || 0}
            </div>

            <span>Adiconar</span>
          </button>
        </li>
      ))}
    </ul>
  );
}