import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class extends React.Component {

  render() {
    return (
        <>
        <Nav tabs>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/skills">Skills</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/work">Work</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/education">Education</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/references">References</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/catalog">Knowledge Catalog</NavLink>
          </NavItem>
        </Nav>
        </>
    )
  }
}