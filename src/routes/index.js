import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import ProductsList from '../pages/ProductsList';
import ShoppingCart from '../pages/ShoppingCart';
 
export default function Routes() {
 return (
   <Switch>
      <Route path="/products" exact component={ProductsList} />
      <Route path="/shoppingCart" exact component={ShoppingCart} />
      <Route render={() => <Redirect to="/products" />} />
   </Switch>
 );
}