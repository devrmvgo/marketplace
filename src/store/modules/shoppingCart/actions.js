import { createAction } from '@reduxjs/toolkit';
 
export const addToShoppingCart = createAction('shoppingCart/add_book');
export const removeFromShoppingCart = createAction('shoppingCart/remove_book');
export const updateAmountShoppingCart = createAction('shoppingCart/update_amount');