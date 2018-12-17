import React from 'react'
import {NavLink} from 'react-router-dom'
import { setAuthToken, setPortariaID } from '../actions/appActions';
import {connect} from 'react-redux'

const Header = (props) => (
    <header>
        <h1>Server ESP</h1>
        {props.portariaID && <p>Logado na portaria: {props.portariaID}</p>}
        <NavLink to='/' activeClassName="is-active" exact={true}>Pagina Inicial</NavLink>
        <NavLink to='/about' activeClassName="is-active">Sobre</NavLink>
        <NavLink to='/login' activeClassName="is-active">Login</NavLink>
        {props.authToken && 
        <div>
        <NavLink to='/acionamentos' activeClassName='is-active'>Visualizar Acionamentos</NavLink>
        <button onClick={() => {
            props.dispatch(setAuthToken())
            props.dispatch(setPortariaID())
        }}>Logout</button>
        </div>
        }
        
    </header>
)

const mapStateToProps = state => {
    return{
        portariaID: state.portariaID,
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(Header)