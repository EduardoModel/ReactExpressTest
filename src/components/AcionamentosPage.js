import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Filtro from './Filtro'

const AcionamentoPage = (props) => (
    <div>
        <p>Acionamentos</p>
        <NavLink to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
        <Filtro
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