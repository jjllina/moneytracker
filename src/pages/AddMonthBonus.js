import {Nav, Container, Row, Col} from 'react-bootstrap'
import React, {useContext, useState} from 'react'
import {Navigate, Link, useNavigate} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

function AddMonthBonus() {
	const {user} = useContext(UserContext)
	const history = useNavigate()

	const [month, setMonth] = useState('')
	const [day, setDay] = useState('')
	const [year, setYear] = useState('')
	const [TWH, setTWH] = useState()
	const [amount, setAmount] = useState()
	
	const addBonus = e => {
		e.preventDefault()
		fetch('https://powerful-meadow-76469.herokuapp.com/newMonth', {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				Authorization : `Bearer ${localStorage.getItem('token')}`
			},
			body : JSON.stringify({
				month : month,
			    day : day,
			    year : year,
			    amount : amount,
			    TWH : TWH
			})
		})
		.then(res => res.json())
		.then(data => {
			Swal.fire({
			title : "13th/14th Month pay is saved.",
			icon : "success"
			})

			history("/")
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
						<Nav.Link className="page" as={Link} to="/addIncome">Add Income</Nav.Link>
						<Nav.Link as={Link} to="/viewIncome">View Monthly Income</Nav.Link>
						<Nav.Link as={Link} to="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link as={Link} to="/addExpense">Add Expense</Nav.Link>
						<Nav.Link as={Link} to="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
					</Nav>
				</Col>
				<Col md="10">
					<p></p>
			        <form onSubmit={e => addBonus(e)}>
						<Row>
							<Col md="2">
						    	<label>Month:</label>
						    </Col>
						    <Col>
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
						    </Col>  
					    </Row>
					    <p></p>
					    <Row>
					    	<Col md="2">
					    		<label>Day:</label>
					    	</Col>
					    	<Col>
					    		<select onChange={e => setDay(e.target.value)}>
					    			<option value="none">----</option>
						    		<option value="01">01</option>
						    		<option value="02">02</option>
						    		<option value="03">03</option>
						    		<option value="04">04</option>
						    		<option value="05">05</option>
						    		<option value="06">06</option>
						    		<option value="07">07</option>
						    		<option value="08">08</option>
						    		<option value="09">09</option>
						    		<option value="10">10</option>
						    		<option value="11">11</option>
						    		<option value="12">12</option>
						    		<option value="13">13</option>
						    		<option value="14">14</option>
						    		<option value="15">15</option>
						    		<option value="16">16</option>
						    		<option value="17">17</option>
						    		<option value="18">18</option>
						    		<option value="19">19</option>
						    		<option value="20">20</option>
						    		<option value="21">21</option>
						    		<option value="22">22</option>
						    		<option value="23">23</option>
						    		<option value="24">24</option>
						    		<option value="25">25</option>
						    		<option value="26">26</option>
						    		<option value="27">27</option>
						    		<option value="28">28</option>
						    		<option value="29">29</option>
						    		<option value="30">30</option>
						    		<option value="31">31</option>
						    	</select>
					    	</Col>
					    </Row>
					    <p></p>
				        <Row>
				        	<Col md="2">
				        		<label>Year:</label>
				        	</Col>
				        	<Col>
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
				        	</Col>
				        </Row>
				        <p></p>
				        <Row>
				        	<Col md="2">
				        		<label>13th/14th Month Pay:</label>
				        	</Col>
				        	<Col>
				        		<input type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} />
				        	</Col>
				        </Row>
				        <p></p>
				        <Row>
				        	<Col md="2">
				        		<label>Tax Withheld:</label>
				        	</Col>
				        	<Col>
				        		<input type="number" min="0" value={TWH} onChange={e => setTWH(e.target.value)} />
				        	</Col>
				        </Row>
				        <p></p>
				        <input type="submit" />
					</form>
					
				</Col>
		    </Row>
		</Container>
	)
}

export default AddMonthBonus


