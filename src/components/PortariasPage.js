import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const PortariaPage = () => (
    <div>
        <p>Portarias</p>
        <NavLink to='/' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
    </div>   
)

const mapStateToProps = state => {
    return{
        portariaID: state.portariaID,
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(PortariaPage)