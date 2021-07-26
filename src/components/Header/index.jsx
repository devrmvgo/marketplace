import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/catalog.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo-icon" src={logo} alt="Rocketshoes" />
        <span className="logo-text">Marketplace</span>
      </Link>

      <Link to="/shopping-cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{cartSize}</strong> produtos
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  );
}