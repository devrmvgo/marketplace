import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProductDetails from '../pages/ProductDetails';
import ProductsList from '../pages/ProductsList';
import ShoppingCart from '../pages/ShoppingCart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/product/:idProduct" component={ProductDetails} />
      <Route path="/products" exact component={ProductsList} />
      <Route path="/shopping-cart" exact component={ShoppingCart} />
      <Route render={() => <Redirect to="/products" />} />
    </Switch>
  );
}