import React from 'react'
import '../styles/components/_filtro.scss'
import titleize from 'titleize'

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
            eventoSelected: false,
            evento: '',
            portariaIDSelected: false,
            portariaID: '',
            err: ''
        }
    }

    onEstadoChange = (e) => {
        const estado = e.target.value
        if(estado !== 'Estado'){
            this.setState(() => ({estado}))
        }
        else{
            this.setState(() => ({estado : ''}))
        }
    }

    onCidadeChange = (e) => {
        const cidade = e.target.value
        this.setState(() => ({cidade}))
    }

    onBairroChange = (e) => {
        const bairro = e.target.value
        this.setState(() => ({bairro}))
    }

    onEventoChange = (e) => {
        const evento = e.target.value
        if(evento !== 'Eventos'){
            this.setState(() => ({evento}))
        }
    }

    onPortariaIDChange = (e) => {
        const portariaID = e.target.value
        if(portariaID.length <= 3){
            this.setState(() => ({portariaID}))
        }
        else{
            this.setState(() => ({portariaID: ''}))
        }
    }

    onFiltroSubmit = (e) => {
        e.preventDefault()
        let err = '';
        if(!this.state.estadoSelected && !this.state.cidadeSelected && !this.state.bairroSelected && !this.state.portariaIDSelected){
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
        if(this.state.portariaIDSelected && !this.state.portariaID){
            err += 'Por favor entre com a portariaID\n'
        }
        this.setState(() => ({err}))
        this.sendUp(err)
    }

    sendUp = (err) => {
        if(err === ''){
            let info = {}
            if(this.state.estadoSelected){
                info = {...info, estado: titleize(this.state.estado.toLowerCase())}
            }
            if(this.state.cidadeSelected){
                info = {...info, cidade: titleize(this.state.cidade.toLowerCase())}
            }
            if(this.state.bairroSelected){
                info = {...info, bairro: titleize(this.state.bairro.toLowerCase())}
            }
            if(this.state.portariaIDSelected){
                info = {...info, portariaID: this.state.portariaID}
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

                <select className='Filtro__text-input' 
                onChange={this.onEstadoChange}>
                    <option>Estado</option>
                    <option>SP</option>
                    <option>RS</option>
                </select>


                <input type='checkbox'
                onChange={(e) => {
                    const cidadeSelected = e.target.checked
                    this.setState(() => ({cidadeSelected}))
                }}>
                </input>

                <input className='Filtro__text-input' 
                type='text'
                placeholder='Cidade'
                onChange={this.onCidadeChange}>
                </input>

                <input type='checkbox'
                onChange={(e) => {
                    const bairroSelected = e.target.checked
                    this.setState(() => ({bairroSelected}))
                }}>
                </input>

                <input className='Filtro__text-input'
                type='text'
                placeholder='Bairro'
                onChange={this.onBairroChange}>
                </input>

                <br/>

                {this.props.isAcionamentos && 
                <input type='checkbox'
                onChange={(e) => {
                    const eventoSelected = e.target.checked
                    this.setState(() => ({eventoSelected}))
                }}>
                </input>
                }

                {this.props.isAcionamentos && 
                <select 
                onChange={this.onEstadoChange}>
                    <option>Eventos</option>
                    <option>Todos</option>
                    <option>Panico</option>
                    <option>Suspeita</option>
                    <option>Ocorrencia</option>
                </select>
                }

                {this.props.isAcionamentos && 
                <input type='checkbox'
                className='Filtro__checkbox'
                onChange={(e) => {
                    const portariaIDSelected = e.target.checked
                    this.setState(() => ({portariaIDSelected}))
                }}>
                </input>
                }
                
                {this.props.isAcionamentos &&
                <input className='Filtro__text-input' 
                type='text'
                placeholder='PortariaID'
                onChange={this.onPortariaIDChange}>
                </input>
                }

                <br/>
                <button
                className='Filtro__button'
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