import {Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
	let url = new URL(window.location.href)
	return (
		<Container className="vw-100" fluid>
			<Row className="justify-content-center align-items-center">
				<Col className="p-5 errorText" xs={9} md={5}>
					<span className="textBold">404.</span><span className="grayText"> That's an error.</span>

					<p></p>

					<span>The requested URL {url.pathname} was not found on this server.</span>

					<span className="grayText"> That's all we know.</span>
					
					<p>Go back to <Link as={Link} to="/">homepage.</Link></p>
				</Col>
			</Row>
		</Container>
	)
}