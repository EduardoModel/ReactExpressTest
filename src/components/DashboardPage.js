import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import '../styles/components/_dashboard-page.scss'

const DashboardPage = (props) => (
    <div>
        <Header/>
        <div className='Dashboard-page'>
            <h1>Pagina inicial</h1>
        </div>
        
    </div>
)

export default connect()(DashboardPage)