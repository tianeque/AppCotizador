import React, {Component} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Table, Card, CardTitle, CardText} from 'reactstrap';
import {database} from '../../firebase'
import calculos from '../../Calculos/Calculos'
import numberToCLPFormater from 'numbertoclpformater'

import './nueva-cotizacion.css'

const Boton = (props) => {
    return(
        <Button onClick = {props.onClick}>Generar</Button>
    )
}
//Esta clase se va a encargar de 
class NuevaCotizacion extends Component {
    constructor(){
        super()
        this.state = {
            nombre : '',
            empresa : '',
            cantidad : '',
            producto : '',
            fecha : '',
            archivo: '',
            multiplicidad: '',
            sobrantes: '',
            moldes: '',
            unTal: '',
            diseno: '',
            
            tipoCliente: '',
            
        }
        
        this.CLP = numberToCLPFormater.numberToCLPFormater
        this.cotizacionRef = database.ref('/cotizacion')

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.generarEstado = this.generarEstado.bind(this)
        
    }

    generarEstado(){
        this.setState({
            nombre: "Sebastian",
            empresa: "Castillo y Castillo Limitada",
            cantidad: 1000,
            producto: 'Boletas',
            fecha: Date(),
            multiplicidad: 4,
            sobrantes:10,
            moldes: 1,
            unTal:50,
            diseno:1000
        })
    }

    handleChange(ev){
        ev.target.id === 'nombre' && this.setState({nombre: ev.target.value})
        ev.target.id === 'empresa' && this.setState({empresa: ev.target.value})
        ev.target.id === 'cantidad' && this.setState({cantidad: ev.target.value})
        ev.target.id === 'producto' && this.setState({producto: ev.target.value})
        ev.target.id === 'fecha' && this.setState({fecha: ev.target.value})

        ev.target.id === 'multiplicidad' && this.setState({multiplicidad: ev.target.value})
        ev.target.id === 'sobrantes' && this.setState({sobrantes: ev.target.value})
        ev.target.id === 'moldes' && this.setState({moldes: ev.target.value})
        ev.target.id === 'unTal' && this.setState({unTal: ev.target.value})
        ev.target.id === 'diseno' && this.setState({diseno: ev.target.value})

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
                multiplicidad: this.state.multiplicidad,
                sobrantes: this.state.sobrantes,
                moldes: this.state.moldes,
                unTal: this.state.unTal,
                diseno: this.state.diseno,
                tipoCliente: this.state.tipoCliente,
            }
        )
    }

    handleClick(ev){
        ev.target.id === 'clienteImprenta' && this.setState({tipoCliente: 'imprenta'})
        ev.target.id === 'clienteFinal' && this.setState({tipoCliente: 'cliente'})
    }
    componentDidMount(){

    }
    render(){

        //creando una instancia de la clase Calculos.js
        const calcs = new calculos({...this.state})

        const camposParametrosTecnicos = [
            {nombre:"multiplicidad",valor:this.state.multiplicidad}, 
            {nombre:"sobrantes",valor:this.state.sobrantes}, 
            {nombre:"moldes",valor:this.state.moldes}, 
            {nombre:"unTal",valor:this.state.unTal}, 
            {nombre:"diseno",valor:this.state.diseno},
        ]
        
        const camposInformacionAdicional = [
            {campo: 'Tiraje Util', id:'tirajeUtil', valor: calcs.tirajeUtil(), tipoDeValor: 'escalar'},
            {campo: 'Tiraje Real', id:'tirajeReal', valor: calcs.tirajeReal(), tipoDeValor: 'escalar'},
            {campo: 'Costo Papel', id:'costoPapel', valor: this.CLP(calcs.costoPapel()), tipoDeValor: 'moneda'},
            {campo: 'Costo Impresion Tinta', id:'costoImpresionTinta', valor: this.CLP(calcs.costoImpresion()), tipoDeValor: 'moneda'},
            {campo: 'Costo Impresion MO', id:'costoImpresionMO', valor: this.CLP(calcs.costoImpresionManoObra()), tipoDeValor: 'moneda'},
            {campo: 'Costo Alzado', id:'costoAlzado', valor: this.CLP(calcs.costoAlzado()), tipoDeValor: 'moneda'},
            {campo: 'Costo Separado', id:'costoSeparado', valor: this.CLP(calcs.costoSeparado()), tipoDeValor: 'moneda'},
            {campo: 'Costo Corcheteado', id:'costoCorcheteado', valor: this.CLP(calcs.costoCorcheteado()), tipoDeValor: 'moneda'},
            {campo: 'Costo Corte', id:'costoCorte', valor: this.CLP(calcs.costoCorte()), tipoDeValor: 'moneda'},
            {campo: 'Costo Perforado', id:'costoPerforado', valor: this.CLP(calcs.costoPerforado()), tipoDeValor: 'moneda'},
            {campo: 'Costo Terminado', id:'costoTerminado', valor: this.CLP(calcs.costoTerminado()), tipoDeValor: 'moneda'},
            {campo: 'Costo Operacional', id:'costoOperacional', valor: this.CLP(calcs.costoOperacional()), tipoDeValor: 'moneda'},
            {campo: 'Costo Total', id:'costoTotal', valor: this.CLP(calcs.costoTotal()), tipoDeValor: 'moneda'},
        ]

        return(

            <Row>
                {/* Informacion Base */}
                <Col>
                    <Boton onClick = {this.generarEstado} />
                    <Form className="nueva-cotizacion">
                        <FormGroup row>
                            <Label for="nombre" sm={2}>Nombre</Label>
                            <Col sm={10}>
                                <Input type="text" name="nombre" id="nombre" onChange={this.handleChange} value={this.state.nombre}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="empresa" sm={2}>Empresa</Label>
                            <Col sm={10}>
                                <Input type="text" name="empresa" id="empresa" onChange={this.handleChange} value={this.state.empresa}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="cantidad" sm={2}>Cantidad</Label>
                            <Col sm={10}>
                                <Input type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={this.state.cantidad}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="producto" sm={2}>Producto</Label>
                            <Col sm={10}>
                                <Input type="text" name="producto" id="producto" onChange={this.handleChange} value={this.state.producto}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fecha" sm={2}>Fecha</Label>
                            <Col sm={10}>
                                <Input type="date" name="fecha" id="fecha" onChange={this.handleChange} value={this.state.fecha}/>
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
                                        <Input type="radio" name="radio2" id="clienteImprenta" onClick={this.handleClick}/>{' '}
                                        Imprenta
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" id="clienteFinal" onClick={this.handleClick}/>{' '}
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
                {/* Parametros tecnicos */}
                <Col>
                    <h3>Parámetros Técnicos</h3>
                    <Form className="nueva - cotizacion">
                        {camposParametrosTecnicos.map(
                            (campo, key) => {
                                return(
                                    <FormGroup row key={key}>
                                        <Label for={campo.nombre} sm={2} id = {key}>{campo.nombre}</Label>
                                        <Col sm={{size:8, push:1}} id={key}>
                                            <Input type="text" name={campo.nombre} id={campo.nombre} onChange={this.handleChange} value={campo.valor} />
                                        </Col>
                                    </FormGroup>
                                )
                            }
                        )}
                    </Form>
                    <Card className='card--precio' >
                        <CardTitle className="card--valor">{this.CLP(calcs.precioDeVenta())}</CardTitle>
                        <CardText className="card--descripcion">Producto y cantidad</CardText>
                        <Button>Generar PDF</Button>
                    </Card>
                </Col>

                {/* Informacion adicional */}
                <Col>
                    <h3>Informacion Adicional</h3>
                    <Table size = "sm">

                        
                        <tbody>
                            {camposInformacionAdicional.map(
                                (informacionAdicional, key) => {
                                    return(
                                        <tr key={key}>
                                            <th>{informacionAdicional.campo}</th>
                                            <td>{informacionAdicional.valor}</td>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </Table>
                    
                </Col>
            </Row>
            
        )
    }
    
}

export default NuevaCotizacion