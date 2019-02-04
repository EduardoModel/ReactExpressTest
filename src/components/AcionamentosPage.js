import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Filtro from './Filtro'
import '../styles/components/_acionamentos-page'
import Header from './Header'
import Acionamento from './Acionamento';

class AcionamentosPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            acionamentos: [],
            evento: null
        }
    }

    buscaAcionamentos = (info) => {
        if(info.evento !== ''){
            this.setState(() => ({evento: info.evento}))
        }
        else{
            this.setState(() => ({evento:null}))
        }
        fetch('https://peaceful-shelf-58074.herokuapp.com/acionamentos', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'x-auth': this.props.authToken
        },
            body: JSON.stringify(info)
        }).then((response) => {
            if(response.status === 200){
                response.text().then((res) => {
                    const acionamentos = JSON.parse(res)
                    acionamentos.sort((a,b) => a.portariaID-b.portariaID)
                    this.setState(()=> ({acionamentos}))
                    console.log(acionamentos)
                })
            }
        })
        .catch(error => {
            console.log('Authorization failed : ' + error.message)
        })
    }

    render(){
        return (
            <div className='Acionamento-page' >
                <Header />
                <h1>Visualizar Acionamentos</h1>
                <NavLink className='Acionamentos-page__navlink' to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
                <Filtro
                    isAcionamentos={true}            
                    onSubmit={(info) => this.buscaAcionamentos(info)}
                />
                {this.state.acionamentos && this.state.acionamentos.map((acionamento) => {
                        return <Acionamento key={parseInt(acionamento.portariaID)} acionamento={acionamento} evento={this.state.evento}/>
                    })
                }
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

export default connect(mapStateToProps)(AcionamentosPage)