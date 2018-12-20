import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Filtro from './Filtro';
import Portaria from './Portaria';

class PortariaPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            portarias: []
        }
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
        }).then(response => {
            if(response.status === 200){
                response.text().then((res) => {
                    console.log('vai setar as portarias?')
                    const portarias = JSON.parse(res)
                    console.log(portarias)
                    this.setState(()=> {portarias}) 
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
                <p>Portarias</p>
                <NavLink to='/' activeClassName="is-active" exact={true}>Voltar para a pagina inicial</NavLink>
                <Filtro onSubmit={this.buscaPortarias} />
                {
                    this.state.portarias && this.state.portarias.map((portaria) => {
                        return <Portaria key={parseInt(portaria.portariaID)} portaria={portaria}/>
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

export default connect(mapStateToProps)(PortariaPage)