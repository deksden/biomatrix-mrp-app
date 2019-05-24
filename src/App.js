import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin'
import { dataProvider } from './data-provider/data-provider'
import MyLayout from './components/my-layout'

function App() {
  return (
    <Admin appLayout={MyLayout} dataProvider={dataProvider}>
       <Resource name="products" list={ListGuesser} />
       <Resource name="resources" list={ListGuesser} />
       <Resource name="processes" list={ListGuesser} />
       <Resource name="manufacturings" list={ListGuesser} />
       <Resource name="stages" list={ListGuesser} options={ { hideFromSideMenu: true } }/>
    </Admin>
  );
}

export default App;
