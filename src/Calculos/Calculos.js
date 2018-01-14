import ceil from 'lodash/ceil'

class Calculos {
  constructor(parametros){
    this.producto = 'Boletas'
    this.cantidad = parametros.cantidad
    this.multiplicidad = parametros.multiplicidad
    this.moldes = parametros.moldes
    this.sobrantes = parametros.sobrantes
    this.unTal = parametros.unTal
    this.alzado = true
    this.separado = true
    this.corcheteado = true
    this.corte = true
    this.perforado = true
    this.diseno = parametros.diseno
    this.tipoCliente = 'imprenta'


    this.pagoOperacionesMenores = 15
    this.pagoAlzado = 600
    this.pagoImpresion = 1600
    
    this.gg = .45
    this.utilidad = 0.2
    this.impuesto = 0.26

    this.hojasResma = 500
    this.valorResma = 2860
    this.valorTinta = 1.6
    
  }

  validacion(){
    if (this.producto && 
      this.cantidad &&  
      this.tipoCliente && 
      this.multiplicidad && 
      this.sobrantes && 
      this.moldes && 
      this.unTal && 
      this.diseno) {
      return true
    } else {
      return false
    }
  }

  tirajeUtil(){

    return this.validacion() ?
    this.cantidad*this.multiplicidad/this.moldes 
    : 0

  }
  
  tirajeReal(){
    return this.validacion() ?
    this.tirajeUtil() + this.sobrantes*this.multiplicidad
    : 0
  }

  costoDiseno(){
    return this.diseno
  }

  costoPapel(){
    return this.validacion() ?
    ceil(this.valorResma/this.hojasResma * this.tirajeReal())
    : 0
  }

  costoImpresion(){
    return this.tirajeReal()*this.valorTinta
  }
  costoImpresionManoObra(){
    return this.redondeoAMil(this.tirajeUtil())*this.pagoImpresion/1000
  }
  costoAlzado(){
    return this.alzado ? 
           this.redondeoAMil(this.tirajeUtil())*this.pagoAlzado/1000
           : 0
  }
  costoSeparado(){
    return this.separado && this.unTal? 
           this.tirajeUtil()/this.unTal*this.pagoOperacionesMenores
           : 0
  }
  costoCorcheteado(){
    return this.corcheteado && this.unTal? 
           this.tirajeUtil()/this.unTal*this.pagoOperacionesMenores
           : 0
  }
  costoCorte(){
    return this.corte && this.unTal? 
           this.tirajeUtil()/this.unTal*this.pagoOperacionesMenores
           : 0
  }
  costoPerforado(){
    return this.perforado ? 
           this.redondeoAMil(this.tirajeUtil())*this.pagoAlzado/1000
           : 0
  }
  costoTerminado(){
    return this.unTal ?
           this.tirajeUtil()/this.unTal*this.pagoOperacionesMenores
           : 0
  }
  redondeoAMil(x){
    return Math.ceil(x/1000)*1000
  }

  costoOperacional() {
    console.log(this.costoDiseno())
    const totalCostoOperacional =  parseInt(this.costoDiseno(),10) + 
      this.costoPapel() +
      this.costoImpresion() +
      this.costoImpresionManoObra() +
      this.costoAlzado() +
      this.costoSeparado() +
      this.costoCorcheteado() +
      this.costoPerforado() +
      this.costoCorte() +
      this.costoTerminado()

    return this.validacion() ? 
      ceil(totalCostoOperacional,0)
      : 0
  }

  costoTotal(){
    return ceil(this.costoOperacional()*(1+this.gg),0)
  }

  precioDeVenta(){
    return ceil(this.costoTotal()*(1+this.utilidad)+this.impuesto*this.costoTotal()*this.utilidad, -2)
  }
}

export default Calculos