import React from 'react';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

export default function Header({ items, handler }) {
  console.log(handler)
  
  return (
    <ul className="book-catalog">
      {items.map(item => (
        <li key={item.id} className="book-container">
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
          <span>R$ {item.price}</span>

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