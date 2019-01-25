import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Filtro from './Filtro'
import '../styles/components/_acionamentos-page'
import Header from './Header'

const AcionamentoPage = (props) => (
    <div className='Acionamento-page' >
        <Header />
        <h1>Visualizar Acionamentos</h1>
        <NavLink className='Acionamentos-page__navlink' to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
        <Filtro
            isAcionamentos={true}            
            onSubmit={(info) => {
                console.log('A informação do filtro:', info)
            }}
        />
    </div>
)

const mapStateToProps = state => {
    return{
        portariaID: state.portariaID,
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(AcionamentoPage)