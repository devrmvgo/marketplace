import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/shoppingCart/actions';

import { useHistory } from 'react-router-dom';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

export default function Header({ items }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const addProduct = (book) => {
    dispatch(CartActions.addToCart(book));
  }

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, book) => {
      sumAmount[book.id] = book.amount;

      return sumAmount;
    }, {})
  );

  return (
    <ul className="book-catalog">
      {items.map(item => (
        <li key={item.id} className="book-container">
          <div className="book-info" onClick={() => { history.push(`/product/${item.id}`); }}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>R$ {item.price}</span>
          </div>

          <button type="button" onClick={() => { addProduct(item) }}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />{' '}
              {amount[item.id] || 0}
            </div>

            <span>Adiconar</span>
          </button>
        </li>
      ))}
    </ul>
  );
}