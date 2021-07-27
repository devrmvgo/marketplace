import React from 'react';
//PRODUCTS LIST
import { products } from '../../server.json';
//LIST COMPONENT GENERAL
import List from '../../components/List'

export default function ProductList() {
  return (
    <main className="container">
      <List items={products} />
    </main>
  );
}