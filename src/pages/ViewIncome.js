import {Nav, Container, Row, Col} from 'react-bootstrap'
import React, {useContext} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

function Home() {
	const {user} = useContext(UserContext)

	return (
		(user.id !== null) ?
			<Navigate to="/" />
		:
		<Container fluid className="vw-100 m-0 p-0">
			<p className="text-center header">Finance Tracker</p>
		    <Row className="vw-100">
				<Col md="3">
					<Nav className="flex-column">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/addIncome">Add Income</Nav.Link>
						<Nav.Link classname="page" href="/viewIncome">View Monthly Income</Nav.Link>
						<Nav.Link href="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link href="/addExpense">Add Expense</Nav.Link>
						<Nav.Link href="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link href="/logout">Logout</Nav.Link>
					</Nav>
					<p></p>
				</Col>
				<Col md="9">
					<p></p>
					<p>Welcome to Finance Tracker!</p>
					<p>The goal of this application is to track your annual salary and income taxes. This also has a feature that you can track all your expenses and savings based on your declared salaries.</p>
				</Col>
		    </Row>
		</Container>
	)
}

export default Home


