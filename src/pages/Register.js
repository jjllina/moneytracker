import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import {Navigate, Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const Register = () => {
	const {user, setUser} = useContext(UserContext)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		if(username !== '' && password !== '') {
			setIsActive(true)
		}
		else {
			setIsActive(false)
		}
	},
	[username, password])

	const registerUser = () => {
		fetch('localhost:4000/register', {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({
				username : username.toLowerCase(),
				password : password
			})
		})
		.then(res => res.json())
		.then(data => data)

		Swal.fire({
			title : "You are now registered.",
			icon : "success"
		})

		history("/login")
	}

	return (
		(user.id !== null) ?
			<Navigate to="/" />
		:
			<Container fluid className="front m-0 p-0">
				<Row className="justify-content-around align-items-center vh-100 m-0 p-0">
					<Col xs="10" md="5" align="center">
						<Form onSubmit={e => registerUser(e)} className="formLogin">
							<h2 className="pb-2 pt-2">Login</h2>

							<Form.Group className="mb-3" controlId="username">
								<Form.Control type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="password">
								<Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
							</Form.Group>

							{ isActive ?
								<Button variant="primary" type="submit" id="submitBtn">
									Register
								</Button>
							:
								<Button variant="primary" type="submit" id="submitBtn" disabled>
									Register
								</Button>
							}

							<p></p>

							<p className="pb-5">If you have an account. <Link className="links" to="/login">Login.</Link></p>
						</Form>				
					</Col>
					<Col md="5">
						<p> </p>
					</Col>
				</Row>
			</Container>
	)
}

export default Register