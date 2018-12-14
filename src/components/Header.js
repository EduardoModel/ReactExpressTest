import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Server ESP</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Pagina Inicial</NavLink>
        <NavLink to='/about' activeClassName="is-active">Sobre</NavLink>
        <NavLink to='/login' activeClassName="is-active">Login</NavLink>
    </header>
)

export default Header