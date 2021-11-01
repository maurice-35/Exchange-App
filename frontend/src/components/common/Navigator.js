import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const Navigator = () => {





	return (
		<>
			<Navbar bg="light" expand={false}>
				<Container fluid>
						<diV>
							<Link to="/#Home">฿฿</Link>
						</diV>
						<diV>
							<Link to="/Currencies/:id">Exchange Rates</Link>
						</diV>
						<diV>
							<Link to="/Login">Login</Link>
						</diV>
						<diV>
							<Link to="/Register">Register</Link>
						</diV>
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
								<Nav.Link href="#Rates">Rates</Nav.Link>
								<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
									<NavDropdown.Item href="#Converter">Converter</NavDropdown.Item>
									<NavDropdown.Item href="#More">More</NavDropdown.Item>
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


export default Navigator