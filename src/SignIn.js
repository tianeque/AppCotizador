import React, {Component} from 'react'
import { Container, } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {auth, googleAuthProvider} from './firebase'

class SignIn extends Component {
    constructor(){
      super()
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
      auth.signInWithPopup(googleAuthProvider)
    }

    render(){
        return(
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
        )
    }
}
    

  export default SignIn