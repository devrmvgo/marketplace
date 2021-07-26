import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

export default function Header({ items }) {
  const history = useHistory();

  return (
    <ul className="book-catalog">
      {items.map(item => (
        <li key={item.id} className="book-container">
          <div className="book-info" onClick={() => { history.push(`/product/${item.id}`); }}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>R$ {item.price}</span>
          </div>

          <button type="button" onClick={() => { }}>
            <div>
              <FiShoppingBag size={16} color="#33BFCB" />{' '}
              0
            </div>

            <span>Adiconar</span>
          </button>
        </li>
      ))}
    </ul>
  );
}