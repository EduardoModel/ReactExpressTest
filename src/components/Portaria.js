import React from 'react'
import '../styles/components/_portaria.scss'
import Collapsible from 'react-collapsible'


const Portaria = (props) => (
    <Collapsible trigger={<div className='Portaria'>
    <p className='Portaria__p-id'>{props.portaria.portariaID}</p>
    <p className='Portaria__p-cidade'>{props.portaria.cidade}, {props.portaria.estado}</p>
    <p className='Portaria__p-endereco'>{props.portaria.rua} {props.portaria.numero}, {props.portaria.bairro}</p>
    </div>}>
        <p>Telefone: {props.portaria.telefone}</p>
    </Collapsible>
    
)

export default Portaria