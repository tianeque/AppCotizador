import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

import Datos from './Datos'
import Pliego from './Pliego'
import Resultado from './Resultado'



class CalculadoraDeCorte extends Component {
  constructor(){
    super()
    this.state = {
      papel_ancho: null,
      papel_largo: null,
      corte_ancho: null,
      corte_largo: null,
      cortes_deseados: null,
      tipo_de_corte: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.target.id === "papel_ancho" && this.setState({papel_ancho: e.target.value})
    e.target.id === "papel_largo" && this.setState({papel_largo: e.target.value})
    e.target.id === "corte_ancho" && this.setState({corte_ancho: e.target.value})
    e.target.id === "corte_largo" && this.setState({corte_largo: e.target.value})
    e.target.id === "cortes_deseados" && this.setState({cortes_deseados: e.target.value})
  }

  render(){
    return(
      <div>
        <Row>
          <Col>
            <Datos onChange={this.handleChange}/>
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