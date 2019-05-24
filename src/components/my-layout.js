import React from 'react'
import { Layout } from 'react-admin'
import MyMenu from './my-menu'
import MyAppBar from './my-appbar'

const MyLayout = (props) => <Layout {...props} menu={MyMenu} appBar={MyAppBar} />

export default MyLayout
