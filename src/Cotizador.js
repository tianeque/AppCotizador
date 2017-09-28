import React, {Component} from 'react'
import CurrentUser from './CurrentUser'

class Cotizador extends Component {
  constructor(props){
    super(props)
  }
  render(){
    
    return(
      <div>
        <CurrentUser user={this.props.user} />
      </div>
    )
  }
}
  
export default Cotizador