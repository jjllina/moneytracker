import {Navigate} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import UserContext from '../UserContext'

const Logout = () => {
	const {unsetUser, setUser} = useContext(UserContext)
	
	unsetUser()

	useEffect(() => {
		setUser({id : null})
	})

	return (
		<Navigate to='/' />
	)
}

export default Logout