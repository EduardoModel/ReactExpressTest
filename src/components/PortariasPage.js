import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Filtro from './Filtro';
import Portaria from './Portaria';
import '../styles/components/_portaria-page.scss'
import Header from './Header'
 
class PortariaPage extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            portarias: null
        }
        this.buscaPortarias = this.buscaPortarias.bind(this)
    }

    buscaPortarias = (info) => {
        console.log('A informação do filtro:', info)
        fetch('https://peaceful-shelf-58074.herokuapp.com/portarias', {
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
                    const portarias = JSON.parse(res)
                    portarias.sort((a,b) => a.portariaID-b.portariaID)
                    this.setState(()=> ({portarias}))
                })
            }
        })
        .catch(error => {
            console.log('Authorization failed : ' + error.message)
        })
    }

    render(){
        return (
            <div>
                <Header />
                <div className='Portaria-page'>
                    <h1>Visualizar Portarias</h1>
                    <NavLink className='Portaria-page__navlink' to='/dashboard' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
                    <Filtro onSubmit={this.buscaPortarias} />
                    {
                        this.state.portarias && 
                        <div className='Portaria-page__lista'>
                        <p className='Portaria-page__p-ID'><b>PortariaID</b></p>
                        <p className='Portaria-page__p-cidade'><b>Cidade</b></p>
                        <p className='Portaria-page__p-endereco'><b>Endereço</b></p>
                        </div>
                    }
                    {
                        this.state.portarias && this.state.portarias.map((portaria) => {
                            return <Portaria key={parseInt(portaria.portariaID)} portaria={portaria}/>
                        })
                    }
                </div>
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

export default connect(mapStateToProps)(PortariaPage)