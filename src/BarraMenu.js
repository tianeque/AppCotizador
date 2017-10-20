import React from 'react';
import { Navbar } from 'reactstrap';
import CurrentUser from './CurrentUser'
class BarraMenu extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
            <CurrentUser {... this.props}/>
        </Navbar>
      </div>
    );
  }
}

export default BarraMenu