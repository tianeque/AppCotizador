import React from 'react'
import {Input,InputGroup, InputGroupAddon, Button} from 'reactstrap'


const Titulo = () => {
    return(
        <h3>Introduzca Datos</h3>
    )
}

const TamanoDelPliego = () => {
    return(
        <div>
            <h6>Tamaño del grupo</h6>
            <InputGroup>
                <Input placeholder="Ancho" />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input placeholder="largo" />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
        </div>
    )
}

const MedidasDeCorte = () => {
    return(
        <div>
            <h6>Medidas de corte</h6>
            <InputGroup>
                <Input placeholder="Ancho" />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input placeholder="largo" />
                <InputGroupAddon>cm</InputGroupAddon>
            </InputGroup>
        </div>
    )
}

const Ejemplares = () => {
    return(
        <div>
            <h6>Medidas de corte</h6>
                <InputGroup>
                    <Input placeholder="Número" />
                    <InputGroupAddon>un</InputGroupAddon>
                </InputGroup>
            </div>
    )
}

const Botones = () => {
    return(
        <div>
            <h6>Opciones</h6>
            <Button>Máximo</Button>
            <Button>Horizontal</Button>
            <Button>Vertical</Button>
            <Button>Reiniciar</Button>
        </div>
    )
}

const Datos = () => {
    return(
      <div>
        <Titulo />
        <TamanoDelPliego />
        <MedidasDeCorte />
        <Ejemplares />
        <Botones />
      </div>
    )
  }

export default Datos