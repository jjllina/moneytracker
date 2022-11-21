import {Nav, Container, Row, Col} from 'react-bootstrap'
import React, {useContext} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

function Home() {
	const {user} = useContext(UserContext)
	console.log(user)
	return (
		(user.id === null) ?
			<Navigate to="/login" />
		:
		<Container fluid className="vw-100 m-0 p-0">
			<p className="text-center header">Finance Tracker</p>
		    <Row className="vw-100">
				<Col md="2">
					<Nav className="flex-column">
						<Nav.Link className="page" as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/addIncome">Add Income</Nav.Link>
						<Nav.Link as={Link} to="/addBonus">Add 13th/14th Month Pay</Nav.Link>
						<Nav.Link as={Link} to="/viewIncome">View Monthly Income</Nav.Link>
						<Nav.Link as={Link} to="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link as={Link} to="/addExpense">Add Expense</Nav.Link>
						<Nav.Link as={Link} to="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
					</Nav>
					<p></p>
				</Col>
				<Col md="10">
					<p></p>
					<p>Welcome to Finance Tracker!</p>
					<p>The goal of this application is to track your annual salary and income taxes. This also has a feature that you can track all your expenses and savings based on your declared salaries.</p>
				</Col>
		    </Row>
		    <Row className="justify-content-center footer">
		      	Created by : Sofronas 2022
		    </Row>
		</Container>
	)
}

export default Home


