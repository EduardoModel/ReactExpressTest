import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DashboardPage from './../components/DashboardPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import AcionamentoPage from './../components/AcionamentosPage'
import PortariaPage from './../components/PortariasPage'
import CadastroPage from './../components/CadastroPage'

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/dashboard'  component={DashboardPage}/>
                <Route path='/acionamentos' component={AcionamentoPage}/>
                <Route path='/portarias' component={PortariaPage}/>
                <Route path='/cadastroportaria' component={CadastroPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter