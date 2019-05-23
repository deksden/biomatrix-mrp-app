import fakeDataProvider from 'ra-data-fakerest';
import manufacturings from './manufacturing'
import process from './process'
import products from './products'
import resources from './resources'

 export const dataProvider = fakeDataProvider({
    posts: [
        { id: 0, title: 'Hello, world!' },
        { id: 1, title: 'FooBar' },
    ],
    comments: [
        { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
        { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
    ],
  manufacturings,
  process,
  products,
  resources
})