import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      auth: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    alert('hola')
  }
  
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="display-6">Cotizaciones Imprenta ROM</h1>
            <p className="lead">Bienvenido a nuestro sistema de cotizaciones</p>
            <hr className="my-2" />
            <p>Para poder utilizar nuestro cotizador debe acceder con una cuenta de Gmail</p>
            <p className="lead">
              <Button color="primary" onClick={this.handleClick}>Ingresar</Button>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
