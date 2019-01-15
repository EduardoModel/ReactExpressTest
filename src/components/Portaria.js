import React from 'react'


const Portaria = (props) => (
    <div>
        <p><b>PortariaID:</b> {props.portaria.portariaID}</p>
        <p><b>Cidade:</b> {props.portaria.cidade}, {props.portaria.estado}</p>
        <p><b>Endereço:</b> {props.portaria.rua} {props.portaria.numero}, {props.portaria.bairro}</p>

    </div>
)

export default Portaria