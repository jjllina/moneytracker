import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import {Navigate, useNavigate, Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const Register = () => {
	const {user} = useContext(UserContext)
	const history = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [password1, setPassword1] = useState('')
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		if(username !== '' && password === password1) {
			setIsActive(true)
		}
		else {
			setIsActive(false)
		}
	},
	[username, password, password1])

	const registerUser = (e) => {
		e.preventDefault()
		fetch('https://moneytracker-6vep.onrender.com/register', {
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
		.then(data => {
			console.log(data)
			if(data === true) {
				Swal.fire({
					title : "You are now registered.",
					icon : "success"
				})


				history("/login")

			} else {
				Swal.fire({
					title : "Username already registered.",
					icon : "error"
				})
			}
		})
	}

	return (
		(user.id !== null) ?
			<Navigate to="/" />
		:
			<Container fluid className="front m-0 p-0">
				<Row className="justify-content-around align-items-center vh-100 m-0 p-0">
					<Col xs="10" md="5" align="center">
						<Form onSubmit={e => registerUser(e)} className="formLogin">
							<h2 className="pb-2 pt-2">Register</h2>

							<Form.Group className="mb-3" controlId="username">
								<Form.Control type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="password">
								<Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="password1">
								<Form.Control type="password" placeholder="Confirm Password" value={password1} onChange={e => setPassword1(e.target.value)} required />
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