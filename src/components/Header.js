import React from 'react'
import {NavLink} from 'react-router-dom'
import { setAuthToken, setPortariaID } from '../actions/appActions';
import {connect} from 'react-redux'
import logo from '../img/Logo.png'
import '../styles/components/_header.scss'

const Header = (props) => (
    <div class="sidenav">
        <header className='Header'>
            <img className="Header__img" src={logo}/>
            
            {props.portariaID && <p className='Header__portariaLogada'>Logado na portaria: {props.portariaID}</p>}
            <NavLink className="Header__options" to='/dashboard' activeClassName="is-active" exact={true}>Pagina Inicial</NavLink>
            <NavLink className="Header__options" to='/about' activeClassName="is-active">Sobre</NavLink>
            {!props.authToken && <NavLink className="Header__options" to='/' activeClassName="is-active">Login</NavLink>}
            {props.authToken && 
                <div className="header">
                <NavLink className="Header__options" to='/acionamentos' activeClassName='is-active'>Visualizar Acionamentos</NavLink>
                <NavLink className="Header__options" to='/portarias' activeClassName='is-actuve'>Visualizar Portarias</NavLink>
                <button onClick={() => {
                    props.dispatch(setAuthToken())
                    props.dispatch(setPortariaID())
                    localStorage.removeItem('portariaID')
                    localStorage.removeItem('authToken')
                }}>Logout</button>
                </div>
            }
        </header>
    </div>
    
)

const mapStateToProps = state => {
    return{
        portariaID: state.portariaID,
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(Header)
//<h1 className="Header__title">Server ESP</h1>