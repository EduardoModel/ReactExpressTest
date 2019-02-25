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
            senha: '',
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            telefone: '',
            subordinados: [{portariaID: '', posicao: ''}],
            err: ''
        }
    }

    onCadastroSubmit = (e) => {
        e.preventDefault()
        if(this.state.portariaID === '' || this.state.senha === '' || this.state.estado === '' || this.state.cidade === '' ||
        this.state.bairro === '' || this.state.numero === '' || this.state.telefone === ''){
            this.setState({err: 'Está faltando preencher campos obrigatórios!!!'})
        }
        else{
            this.setState({err: ''})
            const portaria = {
                portariaID: this.state.portariaID,
                senha: this.state.senha,
                estado: this.state.estado,
                cidade: this.state.cidade,
                bairro: this.state.bairro,
                rua: this.state.rua,
                numero: this.state.numero,
                telefone: this.state.telefone,
                subordinados: this.state.subordinados
            }
            console.log(JSON.stringify(portaria))
            this.sendPortaria(portaria)
        }
    }

    sendPortaria = (portaria) => {
        fetch('https://peaceful-shelf-58074.herokuapp.com/portaria', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'x-auth': this.props.authToken
        },
            body: JSON.stringify(portaria)
        }).then((response) => {
            if(response.status === 200){
                alert('Portaria cadastrada com sucesso!!!')
                this.setState({
                    portariaID: '',
                    senha: '',
                    estado: '',
                    cidade: '',
                    bairro: '',
                    rua: '',
                    numero: '',
                    telefone: '',
                    subordinados: [{portariaID: '', posicao: ''}],
                    err: ''
                })
            }
        })
        .catch(error => {
            console.log('Authorization failed : ' + error.message)
        })
    }

    addSubordinado = (e) => {
        e.preventDefault()
        this.setState({
            subordinados: this.state.subordinados.concat([{portariaID: '', posicao: ''}])
        })
    }

    onPortariaIDChange = (e) => {
        const portariaID = e.target.value.toString()
        if(portariaID.length <= 3){
            this.setState(() => ({portariaID}))
        }
    }

    onSenhaChange = (e) => {
        const senha = e.target.value
        this.setState({senha})
    }

    onEstadoChange = (e) => {
        const estado = e.target.value
        this.setState({estado})
    }

    onCidadeChange = (e) => {
        const cidade = e.target.value
        this.setState({cidade})
    }

    onBairroChange = (e) => {
        const bairro = e.target.value
        this.setState({bairro})
    }

    onRuaChange = (e) => {
        const rua = e.target.value
        this.setState({rua})
    }

    onNumeroPredioChange = (e) => {
        const numero = e.target.value.toString()
        this.setState({numero})
    }

    onTelefoneChange = (e) => {
        const telefone = e.target.value
        this.setState({telefone})
    }

    handleSubordinadoIDChange = idx => e => {
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
                <form>
                    <p className='Cadastro-page__p'>PortariaID</p>
                    <input
                    type='number'
                    onChange={this.onPortariaIDChange}
                    placeholder='PortariaID'
                    className='Cadastro-page__input'
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Senha</p>
                    <input 
                    type='password'
                    onChange={this.onSenhaChange}
                    placeholder='Senha'
                    className='Cadastro-page__input'
                    ></input>


                    <p className='Cadastro-page__p'>Estado</p>
                    <select
                    className='Cadastro-page__input'
                    onChange={this.onEstadoChange}
                    >
                        <option>Estado</option>
                        <option>SP</option>
                        <option>RS</option>
                    </select>

                    <p className='Cadastro-page__p'>Cidade</p>
                    <input
                    className='Cadastro-page__input'
                    type='text'
                    placeholder='Cidade'
                    onChange={this.onCidadeChange}
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Bairro</p>
                    <input
                    type='text'
                    placeholder='Bairro'
                    onChange={this.onBairroChange}
                    className='Cadastro-page__input'
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Rua</p>
                    <input
                    type='text'
                    placeholder='Rua'
                    onChange={this.onRuaChange}
                    className='Cadastro-page__input'
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Nº do Prédio</p>
                    <input
                    type='number'
                    placeholder='Nº do prédio'
                    onChange={this.onNumeroPredioChange}
                    className='Cadastro-page__input'
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Nº de Telefone</p>
                    <input
                    type='text'
                    placeholder='Telefone'
                    onChange={this.onTelefoneChange}
                    className='Cadastro-page__input'
                    > 
                    </input>

                    <p className='Cadastro-page__p'>Subordinados</p>
                    {this.state.subordinados.map((subordinado, idx)=> {
                        return (
                            <div>
                                <input
                                type='text'
                                placeholder='PortariaID'
                                value={subordinado.portariaID}
                                onChange={this.handleSubordinadoIDChange(idx)}
                                className='Cadastro-page__input'
                                >
                                </input>

                                <select
                                className='Cadastro-page__input'
                                onChange={this.onPosicaoChange(idx)}>
                                    <option>Posição</option>
                                    <option value='D'>Direita</option>
                                    <option value='E'>Esquerda</option>
                                </select>

                                <button
                                onClick={this.handleRemoveSubordinado(idx)}
                                >Remover</button>
                            </div>
                        )
                    })}
                    <button className='Cadastro-page__novoSubordinadoButton' onClick={this.addSubordinado}
                    >Novo subordinado</button>
                    <br/>
                    <button 
                    onClick={this.onCadastroSubmit}
                    className='Cadastro-page__enviarButton'
                    >Enviar</button>

                    {this.state.err && <p>{this.state.err}</p>}
                </form>            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        authToken: state.authToken
    }
}

export default connect(mapStateToProps)(CadastroPage)