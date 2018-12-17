export const setAuthToken = (authToken = '') => ({
    type: 'SET_AUTH_TOKEN',
    authToken
})

export const setPortariaID = (portariaID = '') => ({
    type: 'SET_PORTARIAID',
    portariaID
})

export const isAdmin = (isAdmin = false) => ({
    type: 'IS_ADMIN',
    isAdmin
})