import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {auth} from './firebase'

class CurrentUser extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        auth.signOut()
    }
    render(){
        const user = this.props.user
        return(
            <div>
                <img src={user.photoURL} alt={user.displayName} />
                <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <button onClick={this.handleClick}>Salir</button>
                </div>
            </div>
        )
    }

    
}

CurrentUser.propTypes = {
    user: PropTypes.shape({
      displayName: PropTypes.string,
      email: PropTypes.string.isRequired,
      photoURL: PropTypes.string,
      uid: PropTypes.string.isRequired
    })
  };
export default CurrentUser