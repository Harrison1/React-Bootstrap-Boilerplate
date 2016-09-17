import React from "react";
import { IndexLink, Link } from "react-router";
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class NavbarTop extends React.Component {
	render() {
		//console.log(this.props.location.pathname);

		//const { location } = this.props.location;
	    const featuredClass = this.props.location.pathname === "/" ? "active" : "";
	    const archivesClass = this.props.location.pathname.match(/^\/archives/) ? "active" : "";
	    const settingsClass = this.props.location.pathname.match(/^\/settings/) ? "active" : "";

		return (
			  <Navbar inverse>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Harry Theme</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			      	<IndexLinkContainer to="/">
			        	<NavItem eventKey={1}>Featured</NavItem>
			        </IndexLinkContainer>
			        <LinkContainer to="/archives">
			        	<NavItem eventKey={2}>Archives</NavItem>
			        </LinkContainer>
			        <LinkContainer to="/settings">
			        	<NavItem eventKey={3}>Settings</NavItem>
			        </LinkContainer>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
}