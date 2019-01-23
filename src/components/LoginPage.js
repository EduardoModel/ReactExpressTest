import React from 'react'
import {connect} from 'react-redux'
import {setAuthToken, setPortariaID} from './../actions/appActions'
import '../styles/components/_login-page.scss'
import logo from '../img/Logo.png'


class LoginPage extends React.Component{
    constructor(props){
        super(props)
        if(localStorage.getItem("authToken") !== null && localStorage.getItem("portariaID") !== null){
            this.props.dispatch(setPortariaID(localStorage.getItem("portariaID")))
            this.props.dispatch(setAuthToken(localStorage.getItem("authToken")))
            this.props.history.push('/dashboard')
        }

        this.state = {
            portariaID: '',
            senha: '',
            err: ''
        }
    }

    onSubmit = (e) => {
        //Evita que a página atualize
        e.preventDefault()
                
        fetch('https://peaceful-shelf-58074.herokuapp.com/portaria/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                portariaID: this.state.portariaID,
                senha: this.state.senha
            })
        }).then(response => {
            if(response.status === 200){
                this.state.err = ''
                this.props.dispatch(setPortariaID(this.state.portariaID))
                localStorage.setItem('portariaID', this.state.portariaID)
                this.props.dispatch(setAuthToken(response.headers.get('x-auth')))
                localStorage.setItem('authToken', response.headers.get('x-auth'))
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => {
            console.log('Authorization failed : ' + error.message)
            this.setState(() => {err: 'Não foi possível realizar o login, tente novamente!'})
        })
    }

    onPortariaIDChange = (e) => {
        const portariaID =  e.target.value
        this.setState(() => ({portariaID}))
    }

    onPasswordChange = (e) => {
        const senha = e.target.value
        this.setState(() => ({senha}))
    }

    render(){
        return (
            <div className='Login-page'>
            <img className='Login-page__logo' src={logo} />
                <form onSubmit={this.onSubmit}>
                    <input 
                        className='Login-page__input'
                        type='text'
                        placeholder="PortariaID"
                        autoFocus
                        required
                        onChange={this.onPortariaIDChange}
                    />
                    <br/>
                    <input 
                        className='Login-page__input'
                        type='password'
                        placeholder="Senha"
                        required
                        onChange={this.onPasswordChange}
                    />
                    <br/>
                    <button className='Login-page__button'>Login</button>
                </form>
                {this.state.err && <p>{this.state.err}</p>}
            </div>
        )
    }
}

export default connect()(LoginPage)