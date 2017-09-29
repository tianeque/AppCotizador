import React, {Component} from 'react';
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Cotizador from './Cotizador'
import Calculos from './Calculos'

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: null,
    }
  }
  
  componentWillMount(){
    auth.onAuthStateChanged(
      (user) => {
        this.setState({ user })
      }
    )
  }

  render() {
    const {user} = this.state
    const calculos = new Calculos()
    console.log(calculos.costoOperacional())
    
    return (
      <div>
        {this.state.user ? 
        <Cotizador {...this.state} /> : 
        <SignIn />}
        <div>
          tirajeUtil: {calculos.tirajeUtil()}
          <div></div>
          tirajeReal: {calculos.tirajeReal()}
          <div></div>
          costoDiseno: {calculos.costoDiseno()}
          <div></div>
          costoPapel: {calculos.costoPapel()}
          <div></div>
          costoImpresion: {calculos.costoImpresion()}
          <div></div>
          costoImpresionManoObra: {calculos.costoImpresionManoObra()}
          <div></div>
          costoAlzado: {calculos.costoAlzado()}
          <div></div>
          costoSeparado: {calculos.costoSeparado()}
          <div></div>
          costoCorcheteado: {calculos.costoCorcheteado()}
          <div></div>
          costoCorte: {calculos.costoCorte()}
          <div></div>
          costoPerforado: {calculos.costoPerforado()}
          <div></div>
          costoTerminado: {calculos.costoTerminado()}
          <div></div>
          costoOperacional: {calculos.costoOperacional()}
          <div></div>
          costoTotal: {calculos.costoTotal()}
          <div></div>
          precioDeVenta: {calculos.precioDeVenta()}
        </div>
      </div>
    );
  }
}

export default App