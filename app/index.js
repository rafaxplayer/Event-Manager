import React from 'react'
import { render } from 'react-dom'
import './styles/normalize.css'
import App from './components/App'
import { store }from './store'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));