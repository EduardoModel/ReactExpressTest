import React from 'react'
import {NavLink} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h1>Desculpe, nada aqui :(</h1>
            <NavLink to='/' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
    </div>
)

export default NotFoundPage