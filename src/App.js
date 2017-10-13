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

    return (
      <div>
        {this.state.user ? 
        
        <Cotizador {...this.state} /> : 
        <SignIn />}
      </div>
    );
  }
}

export default App