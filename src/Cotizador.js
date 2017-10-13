import React, {Component} from 'react'
import BarraMenu from './BarraMenu'
import CurrentUser from './CurrentUser'
import UltimasCotizaciones from './UltimasCotizaciones'

class Cotizador extends Component {
  constructor(props){
    super(props)
  }
  render(){
    
    return(
      <div>
        <BarraMenu user={this.props.user} />
        <UltimasCotizaciones />
      </div>
    )
  }
}
  
export default Cotizador