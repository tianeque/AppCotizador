import React, {Component} from 'react'
import {Container, Row, Col, Button, Table, NavLink} from 'reactstrap'
import map from 'lodash/map'
import NuevaCotizacion from './NuevaCotizacion'
import {database} from './firebase'

class UltimasCotizaciones extends Component{
    constructor(props){
        super(props)
        this.state = {
            nuevaCotizacion : true,
        }

        this.refCotizacion = database.ref().child('cotizacion')

    }


    render(){
        const {cotizaciones} = this.props
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

                    {this.state.nuevaCotizacion && <NuevaCotizacion />}

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
                                {
                                    map(cotizaciones,(cotizacion, key) => {
                                        return(
                                        <tr key={key}>
                                            <th scope="row">{key}</th>
                                            <td>{cotizacion.nombre}</td>
                                            <td>{cotizacion.empresa}</td>
                                            <td>{cotizacion.cantidad}</td>
                                            <td>{cotizacion.producto}</td>
                                            <td>{cotizacion.fecha}</td>
                                            <td><NavLink href="#">Ver</NavLink></td>
                                            <td><input type="button" value ="Borrar" onClick={() => this.refCotizacion.child(key).remove()} /></td>
                                        </tr>
                                    )
                                    })
                                }
                                
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default UltimasCotizaciones