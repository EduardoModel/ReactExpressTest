import React from 'react'
import '../styles/components/_acionamento.scss'
import Collapsible from 'react-collapsible';
import moment from 'moment'

const verificaLocomocao = (val) => {
    switch(val){
        case '1':
            return 'A pé'
        case '2':
            return 'Bicicleta'
        case '3':
            return 'Moto'
        default:
            return 'Não especificado'
    }
}

const verificaDirecao = (dir) => {
    switch(dir){
        case 'D':
            return 'Direita'
        case 'E':
            return 'Esquerda'
        default:
            return 'Não especificado'
    }
}

const Acionamento = (props) => (
    <div>
    <h3>PortariaID: {props.acionamento.portariaID}</h3>
    <h3>Total de acionamentos: {props.acionamento.panico.length + props.acionamento.suspeita.length +
        props.acionamento.ocorrencia.length}</h3>
        {
            (!props.evento || props.evento === 'Pânico') && 
            <Collapsible trigger={"Pânico Total: " + props.acionamento.panico.length}>
                {props.acionamento.panico.map((panico) => {
                    return(
                    <div className='Acionamento__div'>
                        <p className='Acionamento__p' >Hora: {moment(panico.createdAt).utcOffset(-3).format('HH:mm:ss')}</p>
                        <p className='Acionamento__p' >Data: {moment(panico.createdAt).utcOffset(-3).format('DD/MM/YYYY')}</p>
                    </div>
                    )
                })}
            </Collapsible>
        }
        
        {
            (!props.evento || props.evento === 'Suspeita') && 
            <Collapsible trigger={'Suspeita Total: ' + props.acionamento.suspeita.length}>
                {props.acionamento.suspeita.map((suspeita) => {
                    return(
                        <div className='Acionamento__div'>
                            <p className='Acionamento__p' >Hora: {moment(suspeita.createdAt).utcOffset(-3).format('HH:mm:ss')}</p>
                            <p className='Acionamento__p' >Data: {moment(suspeita.createdAt).utcOffset(-3).format('DD/MM/YYYY')}</p>
                            <p >Direção: {verificaDirecao(suspeita.direcao)}</p>
                            <p className='Acionamento__p' >Forma de locomoção: {verificaLocomocao(suspeita.ameaca)}</p>
                        </div>
                    )
                })}
            </Collapsible>
        }
            
        {
            (!props.evento || props.evento === 'Ocorrência') && 
            <Collapsible trigger={'Ocorrência       Total: ' + props.acionamento.ocorrencia.length}>
                {props.acionamento.ocorrencia.map((ocorrencia) => {
                    return(
                        <div className='Acionamento__div'>
                            <p className='Acionamento__p' >Hora: {moment(ocorrencia.createdAt).utcOffset(-3).format('HH:mm:ss')}</p>
                            <p className='Acionamento__p' >Data: {moment(ocorrencia.createdAt).utcOffset(-3).format('DD/MM/YYYY')}</p>
                            <p >Direção: {verificaDirecao(ocorrencia.direcao)}</p>
                            <p className='Acionamento__p' >Forma de locomoção: {verificaLocomocao(ocorrencia.ameaca)}</p>
                        </div>
                    )
                })}
            </Collapsible>
        }
    </div>
)

export default Acionamento