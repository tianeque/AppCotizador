import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

import Datos from './Datos'
import Pliego from './Pliego'
import Resultado from './Resultado'



class CalculadoraDeCorte extends Component {
  constructor(){
    super()
    this.state = {
      estado: 'estado'
    }
  }

  render(){
    return(
      <div>
        <Row>
          <Col>
            <Datos />
          </Col>
          <Col>
            <Pliego />
          </Col>
          <Col>
            <Resultado />
          </Col>
        </Row>
      </div>
    )
  }
}

export default CalculadoraDeCorte