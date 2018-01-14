import React, {Component} from 'react'
import { Table, Container } from 'reactstrap'
import faker from '../../data'
import {database} from '../../firebase'
import Pedidos from './Pedidos'
import Clientes from './Clientes'


class Gestion extends Component {

    constructor(){
        super()
        this.state = {
            pedidos: null,
            clientes: null,
        }
    }

    componentDidMount(){
        this.pedidosDbRef = database.ref('pedidos')
        this.clientesDbRef = database.ref('clientes')
        this.pedidosDbRef.on('value', snapshot => {
            this.setState({
                pedidos: snapshot.val()
            })
        })
        this.clientesDbRef.on('value', snapshot => {
            this.setState({
                clientes: snapshot.val()
            })
        })
    }
    render() {
        const {pedidos, clientes} = this.state
        return(
            <Container>
                <Pedidos pedidos={pedidos} />
                <Clientes clientes={clientes} />
            </Container>
        )
    }
}

export default Gestion