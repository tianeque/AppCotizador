import React, {Component} from 'react'
import {Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap'

const CardAgregarPedido = () => {
  return(
        <Card>
          <CardTitle>Agregar Pedido</CardTitle>
          <CardText>Agregue un pedido por su rut</CardText>
          <Button>Agregar</Button>
        </Card>
  )
}

class Pedidos extends Component {
  constructor(props){
    super(props)
    this.state = {
      operacion: ''
    }
  }

  render(){
    return (
      <Row>
        <Col sm={6}>
          <CardAgregarPedido />
        </Col>
      </Row>
    )
  }
}

export default Pedidos