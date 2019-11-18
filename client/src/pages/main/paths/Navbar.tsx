import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Span = styled.span`
  cursor: pointer;

  :hover {
    color: #664956;
  }
`;
const Nav = styled.ul`
  background: #ccbf0c;
`;

class Navbar extends PureComponent {
  render() {
    return (
      <Nav className="nav justify-content-end">
        <li className="nav-item">
          <Span className="nav-link ">Log out</Span>
        </li>
      </Nav>
    );
  }
}

export default connect()(Navbar);
