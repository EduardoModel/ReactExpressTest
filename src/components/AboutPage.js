import React from 'react'
import Header from './Header'
import '../styles/components/_about-page.scss'


const DashboardPage = () => (
    <div>
        <Header/>
        <div className='About-page'>
            <h1>Sobre a aplicação</h1>
            <p>Aplicação desenvolvida pela empresa Olho na Rua</p>
        </div>
        
    </div>
)

export default DashboardPage