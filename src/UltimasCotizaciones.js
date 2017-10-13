import React, {Component} from 'react'
import {Container, Row, Col, Button, Table} from 'reactstrap'

class UltimasCotizaciones extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col><h2>Ultimas Cotizaciones</h2></Col>
                    </Row>
                    <Row>
                        <Button color="primary">Nueva</Button>
                        <Button color="primary">Configuración</Button>
                    </Row>
                    <Row>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Empresa</th>
                                    <th>Cantidad</th>
                                    <th>Producto</th>
                                    <th>Fecha</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sebastian</td>
                                    <td>Castillo y Castillo Ltda.</td>
                                    <td>100</td>
                                    <td>Boletas</td>
                                    <td>12/10/2107</td>
                                    <td><a href="#">Ver</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sebastian</td>
                                    <td>Castillo y Castillo Ltda.</td>
                                    <td>100</td>
                                    <td>Boletas</td>
                                    <td>12/10/2107</td>
                                    <td><a href="#">Ver</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sebastian</td>
                                    <td>Castillo y Castillo Ltda.</td>
                                    <td>100</td>
                                    <td>Boletas</td>
                                    <td>12/10/2107</td>
                                    <td><a href="#">Ver</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                
            </div>
            
        )
    }
}

export default UltimasCotizaciones