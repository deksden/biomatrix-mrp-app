import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin'
import { dataProvider } from './data-provider/data-provider'
import products from './data-provider/products'
import process from './data-provider/process'

function App() {
  return (
    <Admin dataProvider={dataProvider}>
       <Resource name="products" list={ListGuesser} />
       <Resource name="resources" list={ListGuesser} />
       <Resource name="process" list={ListGuesser} />
       <Resource name="manufacturings" list={ListGuesser} />
    </Admin>
  );
}

export default App;
