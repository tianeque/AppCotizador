import React from 'react'
import {Input,InputGroup, InputGroupAddon, Button} from 'reactstrap'


const Titulo = () => {
    return(
        <h3>Introduzca Datos</h3>
    )
}

const TamanoDelPliego = (props) => {
    return(
        <div>
            <h6>Tamaño del grupo</h6>
            <InputGroup>
                <Input placeholder="Ancho" id="papel_ancho" onChange={props.onChange} />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input placeholder="Largo" id="papel_largo" onChange={props.onChange} />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
        </div>
    )
}

const MedidasDeCorte = (props) => {
    return(
        <div>
            <h6>Medidas de corte</h6>
            <InputGroup>
                <Input placeholder="Ancho" id="corte_ancho" onChange={props.onChange}/>
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input placeholder="largo" id="corte_largo" onChange={props.onChange}/>
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
        </div>
    )
}

const Ejemplares = (props) => {
    return(
        <div>
            <h6>Medidas de corte</h6>
                <InputGroup>
                    <Input placeholder="Número de cortes deseados" id="cortes_deseados" onChange={props.onChange}/>
                    <InputGroupAddon>un</InputGroupAddon>
                </InputGroup>
            </div>
    )
}

const Botones = () => {
    return(
        <div>
            <h6>Opciones</h6>
            <Button id="maximo">Máximo</Button>
            <Button id="horizontal" >Horizontal</Button>
            <Button id="vertical" >Vertical</Button>
            <Button id="reinicial">Reiniciar</Button>
        </div>
    )
}

const Datos = (props) => {
    return(
      <div>
        <Titulo />
        <TamanoDelPliego onChange={props.onChange}/>
        <MedidasDeCorte onChange={props.onChange}/>
        <Ejemplares onChange={props.onChange}/>
        <Botones />
      </div>
    )
  }

export default Datos