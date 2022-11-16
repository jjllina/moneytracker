import {Nav, Container, Row, Col, Table} from 'react-bootstrap'
import React, {useContext} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

function ViewExpense() {
	const {user} = useContext(UserContext)

	const data = [
	  { name: "Anom", age: 19, gender: "Male" },
	  { name: "Megha", age: 19, gender: "Female" },
	  { name: "Subham", age: 25, gender: "Male" },
	]
	 

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
					<label>Year: </label>
		    		<select>
			    		<option value="2022" selected>2022</option>
			    		<option value="2023">2023</option>
			    		<option value="2024">2024</option>
			    		<option value="2025">2025</option>
			    		<option value="2026">2026</option>
			    		<option value="2027">2027</option>
			    		<option value="2028">2028</option>
			    		<option value="2029">2029</option>
			    		<option value="2030">2030</option>
			    	</select>
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

						    	    <tbody>
			    		    	       	{data.map((val, key) => {
			    		    	        	return (
			    		    	           	<tr key={key}>
			    	    	            		<td>{val.name}</td>
			    	    	            		<td>{val.age}</td>
			    	    	            		<td>{val.gender}</td>
			    		    	           	</tr>
			    		    	        	)
			    		    	       	})}

			    		    	       	<tr>
			    			    	       	<td>Total</td>
			    			    	       	<td>Total</td>
			    			    	       	<td>Total</td>
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

						    	    <tbody>
			    		    	       	{data.map((val, key) => {
			    		    	        	return (
			    		    	           	<tr key={key}>
			    	    	            		<td>{val.name}</td>
			    	    	            		<td>{val.age}</td>
			    	    	            		<td>{val.gender}</td>
			    		    	           	</tr>
			    		    	        	)
			    		    	       	})}

			    		    	       	<tr>
			    			    	       	<td>Total</td>
			    			    	       	<td>Total</td>
			    			    	       	<td>Total</td>
			    		    	       	</tr>
						    	    </tbody>
					    	    </Table>
			    			</Col>
			    		</Row>
		    	  	</div>
				</Col>
		    </Row>
		</Container>
	)
}

export default ViewExpense


