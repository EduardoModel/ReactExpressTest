import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import '../styles/components/_cadastro-page'
import Header from './Header'

class CadastroPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            portariaID: '',
            cidade: '',
            estado: ''
        }
    }

    render(){
        return (
            <div className='Cadastro-page' >
                <Header />
                <h1>Cadastro de Portarias</h1>
                <NavLink className='Cadastro-page__navlink' to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        portariaID: state.portariaID,
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(CadastroPage)