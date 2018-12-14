import React from 'react'

class LoginPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            portariaID: '',
            senha: ''
        }
    }

    onSubmit = (e) => {
        //Evita que a página atualize
        e.preventDefault()
        //Tem que mudar pra uma variável de ambiente
        fetch('https://peaceful-shelf-58074.herokuapp.com/portaria/login', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:1234',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, x-auth'
            },
            //mode: 'no-cors',
            body: JSON.stringify(this.state)
        }).then(response => console.log(response))
        .catch(error => console.log('Authorization failed : ' + error.message));
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder="PortariaID"
                        autoFocus
                        required
                        onChange={this.onPortariaIDChange}
                    />
                    <br/>
                    <input 
                        type='password'
                        placeholder="Senha"
                        required
                        onChange={this.onPasswordChange}
                    />
                    <br/>
                    <button>Entrar</button>
                </form>
            </div>
        )
    }
}

export default LoginPage