import { createAction } from '@reduxjs/toolkit';
 
export const addToCart = createAction('shoppingCart/add_book');
export const removeFromCart = createAction('shoppingCart/remove_book');
export const updateAmount = createAction('shoppingCart/update_amount');