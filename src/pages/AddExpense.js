import {Nav, Container, Row, Col} from 'react-bootstrap'
import React, {useContext} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

function AddExpense() {
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
						<Nav.Link classname="page" href="/addIncome">Add Income</Nav.Link>
						<Nav.Link href="/viewIncome">View Monthly Income</Nav.Link>
						<Nav.Link href="/viewAnnual">View Annual Salary</Nav.Link>
						<Nav.Link href="/addExpense">Add Expense</Nav.Link>
						<Nav.Link href="/viewExpense">View Expenses</Nav.Link>
						<Nav.Link href="/logout">Logout</Nav.Link>
					</Nav>
				</Col>
				<Col md="9">
					<p></p>
					<form>
						<Row>
							<Col md="2">
						    	<label>Month:</label>
						    </Col>
						    <Col>
						        <select>
						        	<option value="1" selected>January</option>
						        	<option value="2">February</option>
						        	<option value="3">March</option>
						        	<option value="4">April</option>
						        	<option value="5">May</option>
						        	<option value="6">June</option>
						        	<option value="7">July</option>
						        	<option value="8">August</option>
						        	<option value="9">September</option>
						        	<option value="10">October</option>
						        	<option value="11">November</option>
						        	<option value="12">December</option>
						        </select>
						    </Col>  
					    </Row>
					    <p></p>
					    <Row>
					    	<Col md="2">
					    		<label>Day:</label>
					    	</Col>
					    	<Col>
					    		<select>
						    		<option value="1" selected>01</option>
						    		<option value="2">02</option>
						    		<option value="3">03</option>
						    		<option value="4">04</option>
						    		<option value="5">05</option>
						    		<option value="6">06</option>
						    		<option value="7">07</option>
						    		<option value="8">08</option>
						    		<option value="9">09</option>
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
				        	</Col>
				        </Row>
				        <p></p>
				        <Row>
				        	<Col md="2">
				        		<label>Category:</label>
				        	</Col>
				        	<Col>
				        		<input type="text" min="0" />
				        	</Col>
				        </Row>
				        <p></p>
				        <Row>
				        	<Col md="2">
				        		<label>Price:</label>
				        	</Col>
				        	<Col>
				        		<input type="number" min="0" />
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

export default AddExpense