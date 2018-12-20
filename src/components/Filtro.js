import React from 'react'
import { throws } from 'assert';

class Filtro extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            estadoSelected: false,
            estado: '',
            cidadeSelected: false,
            cidade: '',
            bairroSelected: false,
            bairro: '',
            err: ''
        }
    }

    onEstadoChange = (e) => {
        const estado = e.target.value
        this.setState(() => ({estado}))
    }

    onCidadeChange = (e) => {
        const cidade = e.target.value
        this.setState(() => ({cidade}))
    }

    onBairroChange = (e) => {
        const bairro = e.target.value
        this.setState(() => ({bairro}))
    }

    onFiltroSubmit = (e) => {
        e.preventDefault()
        let err = '';
        if(!this.state.estadoSelected && !this.state.cidadeSelected && !this.state.bairroSelected){
            err += 'Por favor selecione uma das opções para a busca!' + '\n'
        }
        if(this.state.estadoSelected && !this.state.estado){
            err += 'Por favor escolha um estado' + '\n'
        }
        if(this.state.cidadeSelected && !this.state.cidade){
            err += 'Por favor entre com um nome de cidade\n'
        }
        if(this.state.bairroSelected && !this.state.bairro){
            err += 'Por favor entre com um nome de um bairro\n'
        }
        this.setState(() => ({err}))
        this.sendUp(err)
    }

    sendUp = (err) => {
        if(err === ''){
            let info = {}
            if(this.state.estadoSelected){
                info = {...info, estado: this.state.estado}
            }
            if(this.state.cidadeSelected){
                info = {...info, cidade: this.state.cidade}
            }
            if(this.state.bairroSelected){
                info = {...info, bairro: this.state.bairro}
            }
            this.props.onSubmit(info)
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onFiltroSubmit}>
                <input type='checkbox'
                onChange={(e) => {
                    const estadoSelected = e.target.checked
                    this.setState(() => ({estadoSelected}))
                }}>
                </input>

                {/* <input type='text'
                placeholder='Estado'
                onChange={this.onEstadoChange}>
                </input> */}
                <select onChange={this.onEstadoChange}>
                    <option></option>
                    <option>SP</option>
                    <option>RS</option>
                </select>


                <input type='checkbox'
                onChange={(e) => {
                    const cidadeSelected = e.target.checked
                    this.setState(() => ({cidadeSelected}))
                }}>
                </input>

                <input type='text'
                placeholder='Cidade'
                onChange={this.onCidadeChange}>
                </input>

                <input type='checkbox'
                onChange={(e) => {
                    const bairroSelected = e.target.checked
                    this.setState(() => ({bairroSelected}))
                }}>
                </input>

                <input type='text'
                placeholder='Bairro'
                onChange={this.onBairroChange}>
                </input>

                <br/>

                <button
                // onClick={this.onButtonClick}
                >
                Buscar
                </button>
                {this.state.err && <p>{this.state.err}</p>}
                </form>
            </div>
        )
    }
}

export default Filtro