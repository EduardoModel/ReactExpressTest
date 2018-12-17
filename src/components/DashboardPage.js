import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'

const DashboardPage = (props) => (
    <div>
        <Header/>
        <h1>Pagina inicial do rolê</h1>

    </div>
)

export default connect()(DashboardPage)