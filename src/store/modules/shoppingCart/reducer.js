import { createReducer } from '@reduxjs/toolkit';
import {
  addToShoppingCart,
  removeFromShoppingCart,
  updateAmountShoppingCart,
} from './actions';

const shoppingCart = createReducer([], {
  [addToShoppingCart]: (state, action) => {
    const { payload } = action;
    const { id } = payload;

    const productExists = state.find(product => product.id === id);

    if (productExists) {
      productExists.amount = productExists.amount + 1;
    } else {
      payload.amount = 1;
      state.push(payload);
    }
  },
  [removeFromShoppingCart]: (state, action) => {
    const productIndex = state.findIndex(product => product.id === action.payload);

    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
  },
  [updateAmountShoppingCart]: (state, action) => {
    const { id, amount } = action.payload;
    const productExists = state.find(product => product.id === id);

    if (productExists) {
      console.log(action.payload)
      const productIndex = state.findIndex(product => product.id === productExists.id);

      if (productIndex >= 0 && amount >= 0) {
        state[productIndex].amount = Number(amount);
      }
    }

    return state;
  },
});

export default shoppingCart