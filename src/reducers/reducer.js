const appReducerState = {
    authToken: '', 
    portariaID: ''
}

export default (state = appReducerState, action) => {
    switch(action.type){
        case 'SET_AUTH_TOKEN':
            return{
                ...state,
                authToken: action.authToken
            }
        case 'SET_PORTARIAID':
            return{
                ...state,
                portariaID: action.portariaID
            }
        default:
            return state
    }
}