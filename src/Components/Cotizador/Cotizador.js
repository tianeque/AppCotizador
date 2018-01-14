import React, {Component} from 'react'
import BarraMenu from './BarraMenu'
import UltimasCotizaciones from './UltimasCotizaciones'
import NuevaCotizacion from './NuevaCotizacion'
import {Container} from 'reactstrap'

class Cotizador extends Component {

  render(){
    
    return(
  
      <Container>
        <BarraMenu user={this.props.user} />
        <NuevaCotizacion />
        <UltimasCotizaciones cotizaciones={this.props.cotizaciones} cotizacionDbRef={this.cotizacionDbRef} />
      </Container>
    )
  }
}
  
export default Cotizador