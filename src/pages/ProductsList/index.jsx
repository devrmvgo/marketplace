import React from 'react';
import { products } from '../../server.json';

import List from '../../components/List'
import './styles.css';

export default function ProductList() {

  return (
    <main className="container">
      <List items={products} />
    </main>
  );
}