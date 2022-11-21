import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import {Navigate, Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
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

	const retrieveUserDetails = (token) => {
		fetch('https://powerful-meadow-76469.herokuapp.com/details', {
			method : 'GET',
			headers : {
				Authorization : `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setUser({
				id : data._id
			})

			
		})
	}

	const loginUser = e => {
		e.preventDefault()
		fetch('https://powerful-meadow-76469.herokuapp.com/login', {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({
				username : username,
				password : password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data) {
				localStorage.setItem('token', data.access)
				retrieveUserDetails(data.access)
				console.log(user)

				Swal.fire({
					title : "You are now logged in.",
					icon : "success"
				})
			} else {
				Swal.fire({
					title : "Username or password incorrect.",
					icon : "error",
					text : "Check username or password and try again."
				})
			}
			
		})

	}

	return (
		(user.id !== null) ?
			<Navigate to='/' />
		:
			<Container fluid className="front m-0 p-0">
				<Row className="justify-content-around align-items-center vh-100 m-0 p-0">
					<Col xs="10" md="5" align="center">
						<Form className="formLogin" onSubmit={e => loginUser(e)}>
							<h2 className="pb-2 pt-2">Login</h2>

							<Form.Group className="mb-3" controlId="username">
								<Form.Control type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="password">
								<Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
							</Form.Group>

							{ isActive ?
								<Button variant="primary" type="submit" id="submitBtn">
									Login
								</Button>
							:
								<Button variant="primary" type="submit" id="submitBtn" disabled>
									Login
								</Button>
							}

							<p></p>

							<p className="pb-5">If you're not yet registered. <Link className="links" to="/register">Sign up.</Link></p>
						</Form>				
					</Col>
					<Col md="5">
						<p> </p>
					</Col>
				</Row>
			</Container>
	)
}

export default Login