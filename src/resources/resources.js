import React from 'react'
import { List, Datagrid, TextField, NumberField, DateField,
  Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = {
  col1w1: { display: 'inline-block', width: '10%', paddingRight: '10%' },
  col2w1: { display: 'inline-block', width: '30%' },
  w50: { width: '50%' },
  w70: { width: '70%' }
}

export const resList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='unit' />
      <NumberField source='minStock' />
      <NumberField source='minOrder' />
      <NumberField source='orderPeriod' />
      <NumberField source='defPrice' />
      <DateField source='initialDate' />
      <DateField source='initialQnt.date' />
      <NumberField source='initialQnt.qnt' />
      <NumberField source='initialQnt.price' />
    </Datagrid>
  </List>
)

export const resEdit = withStyles(styles)(({ classes, ...props }) => (
  <Edit {...props}>
    <SimpleForm classes={classes.w70}>
      <TextInput source='id' fullWidth formClassName={classes.col1w1} />
      <TextInput source='unit' fullWidth formClassName={classes.col1w1} />
      <TextInput source='title' fullWidth formClassName={classes.w50} />
      <NumberInput source='minStock' />
      <NumberInput source='minOrder' />
      <NumberInput source='orderPeriod' />
      <NumberInput source='defPrice' />
      <DateInput source='initialQnt.date' />
    </SimpleForm>
  </Edit>
))
