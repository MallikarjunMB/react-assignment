import React, { Component } from 'react';
import { Nav, NavItem,NavLink } from 'reactstrap';

export default class home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" >Personal </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Company</NavLink>
          </NavItem>
        </Nav> 
      </div>
    )
  }
}


