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

    onCadastroSubmit = () => {
        console.log('vrauuu')
    }

    addSubordinado = (e) => {
        e.preventDefault()
        
    }

    render(){
        return (
            <div className='Cadastro-page' >
                <Header />
                <h1>Cadastro de Portarias</h1>
                <NavLink className='Cadastro-page__navlink' to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
                <form onSubmit={this.onCadastroSubmit}>
                    <input
                    type='number'
                    placeholder='PortariaID'
                    > 
                    </input>

                    <select>
                        <option>Estado</option>
                        <option>SP</option>
                        <option>RS</option>
                    </select>

                    <input
                    type='text'
                    placeholder='Cidade'
                    > 
                    </input>

                    <input
                    type='text'
                    placeholder='Bairro'
                    > 
                    </input>

                    <input
                    type='text'
                    placeholder='Rua'
                    > 
                    </input>

                    <input
                    type='number'
                    placeholder='Nº do prédio'
                    > 
                    </input>

                    <input
                    type='text'
                    placeholder='Telefone'
                    > 
                    </input>

                    <p>Subordinados</p>
                    <button onClick={this.addSubordinado}
                    >Novo subordinado</button>



                </form>            
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