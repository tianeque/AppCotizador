import React, {Component} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {database} from './firebase'
import './nueva-cotizacion.css'

class NuevaCotizacion extends Component {
    constructor(){
        super()
        this.state = {
            nombre : '',
            empresa : '',
            cantidad : '',
            producto : '',
            fecha : '',
        }
        this.cotizacionRef = database.ref('/cotizacion')
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ev){
        ev.target.id === 'nombre' && this.setState({nombre: ev.target.value})
        ev.target.id === 'empresa' && this.setState({empresa: ev.target.value})
        ev.target.id === 'cantidad' && this.setState({cantidad: ev.target.value})
        ev.target.id === 'producto' && this.setState({producto: ev.target.value})
        ev.target.id === 'fecha' && this.setState({fecha: ev.target.value})
    }



    handleSubmit(ev){
        ev.preventDefault()
        this.cotizacionRef.push(
            {
                nombre: this.state.nombre,
                empresa: this.state.empresa,
                cantidad: this.state.cantidad,
                producto: this.state.producto,
                fecha: this.state.fecha,
            }
        )
    }

    componentDidMount(){

    }
    render(){
        return(
            <Row>
                <Col>
                    <Form className="nueva-cotizacion">
                        <FormGroup row>
                            <Label for="nombre" sm={2}>Nombre</Label>
                            <Col sm={10}>
                                <Input type="text" name="nombre" id="nombre" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="empresa" sm={2}>Empresa</Label>
                            <Col sm={10}>
                                <Input type="text" name="empresa" id="empresa" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="cantidad" sm={2}>Cantidad</Label>
                            <Col sm={10}>
                                <Input type="text" name="cantidad" id="cantidad" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="producto" sm={2}>Producto</Label>
                            <Col sm={10}>
                                <Input type="text" name="producto" id="producto" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fecha" sm={2}>Fecha</Label>
                            <Col sm={10}>
                                <Input type="date" name="fecha" id="fecha" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="archivo" sm={2}>Archivo</Label>
                            <Col sm={10}>
                                <Input type="file" name="archivo" id="archivo" />
                                <FormText color="muted">
                                Puede subir archivos de hasta 20 MB.
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup tag="fieldset" row>
                            <legend className="col-form-legend col-sm-2">Tipo Cliente</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                        Imprenta
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                        Cliente
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.handleSubmit}>Guardar</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col>
                    Parámetros técnicos
                </Col>
                <Col>
                    Informacion Adicional
                </Col>
            </Row>
            
        )
    }
    
}

export default NuevaCotizacion