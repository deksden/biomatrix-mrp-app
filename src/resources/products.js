import { List, Datagrid, TextField, DateField } from 'react-admin'

export const ProductList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='unit' />
      <DateField source='startQnt.date' />
    </Datagrid>
  </List>
)
