const appReducerState = {
    authToken: '', 
    portariaID: ''
    // isAdmin: false
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
        // case 'IS_ADMIN':
        //     return{
        //         ...state,
        //         isAdmin: action.isAdmin
        //     }
        default:
            return state
    }
}