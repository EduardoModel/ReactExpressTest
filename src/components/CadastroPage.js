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
            estado: '',
            rua: '',
            numero: '',
            telefone: '',
            subordinados: [{portariaID: '', posicao: ''}]
        }
    }

    onCadastroSubmit = () => {
        console.log('vrauuu')
    }

    addSubordinado = (e) => {
        e.preventDefault()
        this.setState({
            subordinados: this.state.subordinados.concat([{portariaID: '', posicao: ''}])
        })
    }

    handleSubordinadoIDChange = idx => e => {
        console.log('vraauuu')
        const novosSubordinados = this.state.subordinados.map((subordinado, sidx) => {
            if(idx !== sidx){
                return subordinado
            }
            return {...subordinado, portariaID: e.target.value}
        })
        this.setState(() => ({subordinados: novosSubordinados}))
    }

    handleRemoveSubordinado = idx => e => {
        this.setState({
            subordinados: this.state.subordinados.filter((s, sidx) => idx !== sidx)
        })
    }

    onPosicaoChange = idx => e => {
        if(e.target.value === ''){
            return
        }
        const novosSubordinados = this.state.subordinados.map((subordinado, sidx) => {
            if(idx !== sidx){
                return subordinado
            }
            return {...subordinado, posicao: e.target.value}
        })
        this.setState(() => ({subordinados: novosSubordinados}))
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
                    {this.state.subordinados.map((subordinado, idx)=> {
                        return (
                            <div>
                                <input
                                type='text'
                                placeholder={`${subordinado.portariaID}`}
                                value={subordinado.portariaID}
                                onChange={this.handleSubordinadoIDChange(idx)}
                                >
                                </input>

                                <select
                                onChange={this.onPosicaoChange(idx)}>
                                    <option>Posição</option>
                                    <option value='D'>Direita</option>
                                    <option value='E'>Esquerda</option>
                                </select>

                                <button onClick={this.handleRemoveSubordinado(idx)}
                                >Remover</button>
                            </div>
                        )
                    })}
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