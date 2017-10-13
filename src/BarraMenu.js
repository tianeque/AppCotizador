import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Media } from 'reactstrap';
import CurrentUser from './CurrentUser'
class BarraMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <CurrentUser {... this.props}/>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default BarraMenu