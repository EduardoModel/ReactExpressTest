import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DashboardPage from './../components/DashboardPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import AcionamentoPage from './../components/AcionamentosPage'

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={DashboardPage} exact={true}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/acionamentos' component={AcionamentoPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter