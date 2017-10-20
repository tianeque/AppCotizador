import React, {Component} from 'react'
import BarraMenu from './BarraMenu'
import UltimasCotizaciones from './UltimasCotizaciones'

class Cotizador extends Component {

  render(){
    
    return(
      <div>
        <BarraMenu user={this.props.user} />
        <UltimasCotizaciones cotizaciones={this.props.cotizaciones}/>
      </div>
    )
  }
}
  
export default Cotizador