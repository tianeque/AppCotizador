import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {auth} from '../../firebase'
import {Media, Button} from 'reactstrap'
import './CurrentUser.css'

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
                <Media left>
                    <span>
                        <img src={user.photoURL} alt={user.displayName} className='CurrentUser--photo' />
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                        <Button onClick={this.handleClick}>Salir</Button>
                    </span>
                </Media>
                
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