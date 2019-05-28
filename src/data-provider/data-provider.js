import fakeDataProvider from 'ra-data-fakerest';
import manufacturings from './plan'
import processes from './process'
import products from './products'
import resources from './resources'
import stages from './stages'

 export const dataProvider = fakeDataProvider({
  manufacturings,
  processes,
  products,
  resources,
  stages
})