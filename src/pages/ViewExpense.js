import {Nav, Container, Row, Col, Table} from 'react-bootstrap'
import React, {useContext, useState} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

function ViewExpense() {
	const {user} = useContext(UserContext)

	const [fixed, setFixed] = useState([])
	const [others, setOthers] = useState([])
	const [totalFixed, setTotalFixed] = useState(0)
	const [totalOthers, setTotalOthers] = useState(0)
	const [total, setTotal] = useState(0)
	const [income, setIncome] = useState(0)
	const [year, setYear] = useState('')
	const [month, setMonth] = useState('')

	const viewFixed = e => {
		e.preventDefault()
		fetch(`https://powerful-meadow-76469.herokuapp.com/expensef/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => setFixed(data))

		viewOthers()
		viewTotalFixed()
		viewTotalOthers()
		viewTotal()
		viewIncome()
		
	}

	const viewOthers = () => {
		fetch(`https://powerful-meadow-76469.herokuapp.com/expenseo/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setOthers(data)
		})

	}

	const viewTotalFixed = () => {
		fetch(`https://powerful-meadow-76469.herokuapp.com/totalf/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setTotalFixed(data[0])
		})
	}

	const viewTotalOthers = () => {
		fetch(`https://powerful-meadow-76469.herokuapp.com/totalo/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setTotalOthers(data[0])
		})
	}

	const viewTotal = () => {
		fetch(`https://powerful-meadow-76469.herokuapp.com/totalm/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setTotal(data[0])
		})
	}

	const viewIncome = () => {
		fetch(`https://powerful-meadow-76469.herokuapp.com/income/${year}/${month}`, {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setIncome(data[0])
		})
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
						<Nav.Link as={Link} to="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link as={Link} to="/addExpense">Add Expense</Nav.Link>
						<Nav.Link className="page" as={Link} to="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
					</Nav>
					<p></p>
				</Col>
				<Col md="10">
					<p></p>
					<form onSubmit={e => viewFixed(e)}>
						<label>Year: </label>
			    		<select onChange={e => setYear(e.target.value)}>
			    			<option value="none">----</option>
				    		<option value="2022">2022</option>
				    		<option value="2023">2023</option>
				    		<option value="2024">2024</option>
				    		<option value="2025">2025</option>
				    		<option value="2026">2026</option>
				    		<option value="2027">2027</option>
				    		<option value="2028">2028</option>
				    		<option value="2029">2029</option>
				    		<option value="2030">2030</option>
				    	</select>
				    	<span>      </span>

				    	<label>Month: </label>
			    		<select onChange={e => setMonth(e.target.value)}>
				    		<option value="none">----</option>
				    		<option value="JAN">January</option>
				    		<option value="FEB">February</option>
				    		<option value="MAR">March</option>
				    		<option value="APR">April</option>
				    		<option value="MAY">May</option>
				    		<option value="JUN">June</option>
				    		<option value="JUL">July</option>
				    		<option value="AUG">August</option>
				    		<option value="SEP">September</option>
				    		<option value="OCT">October</option>
				    		<option value="NOV">November</option>
				    		<option value="DEC">December</option>
				    	</select>
				    	<span>      </span>
				    	<input type="submit" />
			    	</form>
			    	<p></p>
			    	<div className="App">
			    		<Row>
			    			<Col>
			    				<p>Fixed Expenses</p>
					    	    <Table>
					    	    	<thead>
						    	       	<tr>
						    	        	<th>Date</th>
						    	        	<th>Category</th>
						    	        	<th>Price</th>
						    	       	</tr>
						    	    </thead>

						    	    <tbody className="fixedExpense">
						    	    	{fixed.map(fix => {
						    	    		return (
    						    	    		<tr>
    			    	    	            		<td>{fix.month}-{fix.day}-{fix.year}</td>
    			    	    	            		<td>{fix.category}</td>
    			    	    	            		<td>{fix.price}</td>
    			    		    	           	</tr>
						    	    		)
						    	    	})}
						    	    </tbody>
    	    			    	    <tfoot>
    	        	        	       	<tr>
    	        	    	    	       	<td>Total</td>
    	        	    	    	       	<td></td>
    	        	    	    	       	<td>{totalFixed}</td>
    	        	        	       	</tr>
    	    			    	    </tfoot>
					    	    </Table>
    	    		    	    <Table>
    	    		    	    	<thead>
    	    			    	       	<tr>
    	    			    	        	<th>Income</th>
    	    			    	        	<th>Expense</th>
    	    			    	        	<th>Savings</th>
    	    			    	       	</tr>
    	    			    	    </thead>

    	    			    	    <tbody>
    	        		    	       	<tr>
    	        			    	       	<td>{income}</td>
    	        			    	       	<td>{total}</td>
    	        			    	       	<td>{income - total}</td>
    	        		    	       	</tr>
    	    			    	    </tbody>
    	    		    	    </Table>
			    			</Col>
			    			<Col>
			    				<p>Other Expenses</p>
					    	    <Table>
					    	    	<thead>
						    	       	<tr>
						    	        	<th>Date</th>
						    	        	<th>Category</th>
						    	        	<th>Price</th>
						    	       	</tr>
						    	    </thead>
						    	    <tbody className="otherExpense">
    	        		    	       	{others.map(oth => {
    	        		    	       		return (
       						    	    		<tr>
       			    	    	            		<td>{oth.month}-{oth.day}-{oth.year}</td>
       			    	    	            		<td>{oth.category}</td>
       			    	    	            		<td>{oth.price}</td>
       			    		    	           	</tr>
    	        		    	       		)
						    	    	})}
						    	    </tbody>
						    	    <tfoot>
			    	        	       	<tr>
			    	    	    	       	<td>Total</td>
			    	    	    	       	<td></td>
			    	    	    	       	<td>{totalOthers}</td>
			    	        	       	</tr>
						    	    </tfoot>
					    	    </Table>
			    			</Col>
			    		</Row>
		    	  	</div>
				</Col>
		    </Row>
		    <Row className="justify-content-center footer">
		      	Created by : Sofronas 2022
		    </Row>
		</Container>
	)
}

export default ViewExpense


