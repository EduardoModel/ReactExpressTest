import React from 'react'
import Header from './Header'
import '../styles/components/_about-page.scss'


const DashboardPage = () => (
    <div>
        <Header/>
        <div className='About-page'>
            <h1>Sobre a aplicação</h1>
            <p>Aplicação desenvolvida pela empresa Olho na Rua</p>
            <h3>Grupo</h3>
            <p>Milena Marques</p>
            <p>Pedro Fairbanks</p>
            <p>Felipe Marques</p>
            <p>Eduardo Model</p>
            <p>Italo Nolasco</p>
            <p>Matheus Gelsdorf</p>
            <p>Guilherme Wollmann</p>
            <p className='About-page__developer'>Developed by Eduardo Model</p>
            <div align='right'>
            <a className='About-page__link' href='https://github.com/EduardoModel'>GitHub</a>
            </div>
            
        </div>
        
    </div>
)

export default DashboardPage