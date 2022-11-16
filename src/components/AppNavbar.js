import {Navbar, Nav, NavDropdown, Container, Row, Col} from 'react-bootstrap'

function AppNavbar() {
  return (
	<Navbar expand="lg">
		<Container>
			<Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Row className="vw-100 justify-content-between">
						<Col style={{display:'flex', justifyContent:'start'}}>
							<Nav.Link href="/home">Home</Nav.Link>
							<NavDropdown title="Income" id="basic-nav-dropdown">
								<NavDropdown.Item href="/addIncome">Add Income</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/viewIncome">View Monthly Income</NavDropdown.Item>
								<NavDropdown.Item href="/viewAnnual">View Annual Salary</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Expense" id="basic-nav-dropdown">
								<NavDropdown.Item href="/addExpense">Add Expense</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/viewExpense">View Expenses</NavDropdown.Item>
							</NavDropdown>
						</Col>
						<Col>
							<Nav.Link href="/logout">Logout</Nav.Link>
						</Col>
					</Row>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
  )
}

export default AppNavbar