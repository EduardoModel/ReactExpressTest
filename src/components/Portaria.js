import React from 'react'
import '../styles/components/_portaria.scss'


const Portaria = (props) => (
    <div>
        <p className='Portaria__p-id'>{props.portaria.portariaID}</p>
        <p className='Portaria__p-cidade'>{props.portaria.cidade}, {props.portaria.estado}</p>
        <p className='Portaria__p-endereco'>{props.portaria.rua} {props.portaria.numero}, {props.portaria.bairro}</p>

    </div>
)

export default Portaria