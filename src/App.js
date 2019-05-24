import React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { dataProvider } from './data-provider/data-provider'
import MyLayout from './components/my-layout'

import { resList as ResourceList, resEdit as ResourceEdit } from './resources/resources'

function App () {
  return (
    <Admin appLayout={MyLayout} dataProvider={dataProvider}>
      <Resource name='products' list={ListGuesser} />
      <Resource
        name='resources'
        list={ResourceList}
        edit={ResourceEdit}
      />
      <Resource name='processes' list={ListGuesser} />
      <Resource name='manufacturings' list={ListGuesser} />
      <Resource name='stages' list={ListGuesser} options={{ hideFromSideMenu: true }} />
    </Admin>
  )
}

export default App
