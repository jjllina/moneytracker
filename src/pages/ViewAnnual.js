import {Nav, Container, Row, Col, Table} from 'react-bootstrap'
import React, {useContext, useState, useEffect, Fragment} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'
import MonthlyIncome from '../components/MonthlyIncome'

function ViewAnnual() {
	const {user} = useContext(UserContext)

	const [annuals, setAnnuals] = useState([])
	const [total, setTotal] = useState([])

	const viewAnnual = () => {
		fetch(`https://moneytracker-6vep.onrender.com/AnnualIncome`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setAnnuals(data)
			viewTotal()
		})
	}

	viewAnnual()

	const viewTotal = () => {
		fetch(`https://moneytracker-6vep.onrender.com/AnnualTotal`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => setTotal(data))
	}

	return (
		(user.id === null) ?
			<Navigate to="/login" />
		:
		<Container fluid className="vw-100 m-0 p-0">
			<p className="text-center header">Finance Tracker</p>
		    <Row className="vw-100">
				<Col md="2">
					<Nav className="flex-column">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/addIncome">Add Income</Nav.Link>
						<Nav.Link as={Link} to="/addBonus">Add 13th/14th Month Pay</Nav.Link>
						<Nav.Link as={Link} to="/viewIncome">View Monthly Income</Nav.Link>
						<Nav.Link className="page" as={Link} to="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link as={Link} to="/addExpense">Add Expense</Nav.Link>
						<Nav.Link as={Link} to="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
						<Nav.Link as={Link} disabled>      </Nav.Link>
					</Nav>
					<p></p>
				</Col>
				<Col md="10">
			    	<p></p>
	    	    	<div className="App">
	    	    	    <Table>
	    	    	    	<thead>
	    		    	       	<tr>
	    		    	        	<th>Date</th>
	    		    	        	<th>Gross Income</th>
	    		    	        	<th>Basic Salary</th>
	    		    	        	<th>Non-Taxables</th>
	    		    	        	<th>SSS Contribution</th>
	    		    	        	<th>Philhealth Contribution</th>
	    		    	        	<th>Pagibig Contribution</th>
	    		    	        	<th>Tax Withheld</th>
	    		    	        	<th>Net Income</th>
	    		    	       	</tr>
	    		    	    </thead>

		    	    	    <tbody className="view">
	    		    	       	{annuals.map(income => {
	    		    	        	return (
	    		    	           	<tr>
	    	    	            		<td>{income.year}</td>
	    	    	            		<td>{income.grossIncome}</td>
	    	    	            		<td>{income.basicSalary}</td>
	    	    	            		<td>{income.nonTaxables}</td>
	    	    	            		<td>{income.SSS}</td>
	    	    	            		<td>{income.philhealth}</td>
	    	    	            		<td>{income.pagibig}</td>
	    	    	            		<td>{income.TWH}</td>
	    	    	            		<td>{income.netIncome}</td>
	    		    	           	</tr>
	    		    	        	)
	    		    	       	})}
		    	    	    </tbody>
		    	    	    <tfoot>
       		    	           	<tr>
       	    	            		<td>Total</td>
       	    	            		<td>{total[0]}</td>
       	    	            		<td>{total[1]}</td>
       	    	            		<td>{total[2]}</td>
       	    	            		<td>{total[3]}</td>
       	    	            		<td>{total[4]}</td>
       	    	            		<td>{total[5]}</td>
       	    	            		<td>{total[6]}</td>
       	    	            		<td>{total[7]}</td>
       		    	           	</tr>
				    	    </tfoot>
			    	    </Table>
			    	</div>
			    </Col>
			</Row>
			<p className="text-center footer">Created by : Sofronas 2022</p>
		</Container>
	)
}

export default ViewAnnual