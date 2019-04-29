import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
 import { Link } from 'react-router-dom';

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
          <NavItem style={{padding:'10px'}}> 
          {/* <NavLink href="/personal" > Personal </NavLink> */}
          <Link to="/personal" >Personal</Link>
          </NavItem >
          <NavItem style={{padding:'10px'}} >
          <Link to="/educational" > Educational </Link>
          </NavItem>
          <NavItem style={{padding:'10px'}}>
          <Link to="/company" > Company </Link>
          </NavItem>
        </Nav> 
      </div>
    )
  }
}


