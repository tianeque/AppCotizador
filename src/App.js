import React, {Component} from 'react';
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Cotizador from './Cotizador'

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
        this.cotizacionDbRef = database.ref('cotizacion')
        this.cotizacionDbRef.on('value', snapshot => {
            this.setState({
                cotizaciones : snapshot.val()
            })
        })
      }
    )
  }

  render() {
    const {user, cotizaciones} = this.state

    return (
      <div>
        {user ? 
        
        <Cotizador 
          user={user}
          cotizaciones={cotizaciones} 
          cotizacionDbRef={this.cotizacionDbRef}
        />
        : 
        <SignIn />}
      </div>
    );
  }
}

export default App