import React from 'react';
//STORE DATA AND ACTION DISPARATE
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS OF SHOPPING CART
import * as ShoppingCartActions from '../../store/modules/shoppingCart/actions';
//ROUTE HISTORY
import { useHistory } from 'react-router-dom';
//STYLE AND ICONS
import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi'
import './styles.css';

export default function ShoppingCart() {
  //ROUTE HISTORY TO REDIRECT
  const history = useHistory();
  //ACTIONS DISPATCH
  const dispatch = useDispatch();

  //STORE PRODUCTS DATA
  const shoppingCart = useSelector(state =>
    state.shoppingCart.map(product => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  //REDUCE TO COUNT TOTAL VALUE OF SHOPPING CART
  const total = useSelector(state =>
    state.shoppingCart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  // INCREMENT PRODUCT QUANTITY IN SHOPPING CART
  const increment = (product) => {
    dispatch(ShoppingCartActions.updateAmountShoppingCart({
      id: product.id,
      amount: product.amount + 1,
    }));
  }

  // INCREMENT PRODUCT QUANTITY IN SHOPPING CART
  const decrement = (product) =>  {
    dispatch(ShoppingCartActions.updateAmountShoppingCart({
      id: product.id,
      amount: product.amount - 1,
    }));
  }

  return (
    <main className="container">
      <div className="bag-container">
        <table className="product-table">
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map(product => (
              <tr key={product.id}>
                {/* REDIRECT TO PRODUCT DETAILS WHEN CLICKED */}
                <td className="product-content" onClick={() => { history.push(`/product/${product.id}`); }}>
                  <img src={product.image} alt={product.title} />
                </td>
                {/* REDIRECT TO PRODUCT DETAILS WHEN CLICKED */}
                <td className="product-content" onClick={() => { history.push(`/product/${product.id}`); }}>
                  <strong>{product.title}</strong>
                  <span>R$ {product.price}</span>
                </td>

                <td>
                  <div>
                    {/* DECREMENT PRODUCT QUANTITY WHEN CLICKED */}
                    <button type="button" onClick={() => decrement(product)}>
                      <FiMinusCircle size={20} color="#CE2533" />
                    </button>

                    <span>{product.amount}</span>

                    {/* INCREMENT PRODUCT QUANTITY WHEN CLICKED */}
                    <button type="button" onClick={() => increment(product)}>
                      <FiPlusCircle size={20} color="#CE2533" />
                    </button>
                  </div>
                </td>

                <td>
                  {/* MONEY FORMAT */}
                  <div>
                    <span>{product.subtotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                  </div>
                </td>

                <td>
                  {/* REMOVE PRODUCT QUANTITY WHEN CLICKED */}
                  <button
                    type="button"
                    onClick={() => dispatch(ShoppingCartActions.removeFromShoppingCart(product.id))}
                  >
                    <FiXCircle size={20} color="#CE2533" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer>
          <span>Total</span>

          <div className="total">
            {/* MONEY FORMAT */}
            <strong>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
          </div>
        </footer>
      </div>
    </main>
  );
}