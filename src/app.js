import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setAuthToken, setPortariaID} from './actions/appActions'

const store = configureStore()

// store.dispatch(setAuthToken('123455672'))

// store.dispatch(setPortariaID('002'))

// store.dispatch(setPortariaID())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))