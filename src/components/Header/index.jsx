import React from 'react';
//LINK REDIRECT
import { Link } from 'react-router-dom';
//STORE DATA
import { useSelector } from 'react-redux';
// STYLE AND ICONS
import logo from '../../assets/catalog.png';
import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

export default function Header() {
  //ITEMS QUANTITY IN SHOPPING CART
  const shoppingCartSize = useSelector(state =>
    state.shoppingCart.reduce((sumAmount, product) => {
      sumAmount = (parseInt(sumAmount) || 0) + parseInt(product.amount);

      return sumAmount;
    }, 0));

  return (
    <header className="header">
      {/* REDIRECT TO HOME (PRODUCTS LIST) WHEN CLICKED */}
      <Link to="/" className="logo">
        <img className="logo-icon" src={logo} alt="Rocketshoes" />
        <span className="logo-text">Marketplace</span>
      </Link>


      {/* REDIRECT TO SHOPPING CART WHEN CLICKED */}
      <Link to="/shopping-cart" className="header-shopping-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{shoppingCartSize}</strong> produtos
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  );
}