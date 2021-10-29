import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const NavBar = () => {





	return (
		<>
			<Navbar bg="light" expand={false}>
				<Container fluid>
					<Navbar.Brand href="#">Exchange Rates</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">Exchange</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#currencies">Currencies</Nav.Link>
								<Nav.Link href="#rates">Rates</Nav.Link>
								<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
									<NavDropdown.Item href="#converter">Converter</NavDropdown.Item>
									<NavDropdown.Item href="#more">More</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#markets rates">
										Market Rates
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}
export default NavBar
