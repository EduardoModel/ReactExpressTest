import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import DashboardPage from './../components/DashboardPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={DashboardPage} exact={true}/>
                <Route path='/about' component={AboutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter