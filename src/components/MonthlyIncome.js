import {Nav, Container, Row, Col, Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import React, {useContext, useState, useEffect} from 'react'
import {Navigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'

export default function MonthlyIncome({incomeProp}) {
	const {user} = useContext(UserContext)

	const {_id, month, day, year, grossIncome, basicSalary, nonTaxables, SSS, philhealth, pagibig, TWH, netIncome} = incomeProp

	return (
	    <tbody className="view">
	           	<tr>
            		<td>{month}-{day}-{year}</td>
            		<td>{grossIncome}</td>
            		<td>{basicSalary}</td>
            		<td>{nonTaxables}</td>
            		<td>{SSS}</td>
            		<td>{philhealth}</td>
            		<td>{pagibig}</td>
            		<td>{TWH}</td>
            		<td>{netIncome}</td>
	           	</tr>
	    </tbody>
	)
}

MonthlyIncome.propTypes = {
	incomeProp : PropTypes.shape({
		month : PropTypes.string.isRequired,
		day : PropTypes.string.isRequired,
		year : PropTypes.string.isRequired,
		grossIncome : PropTypes.number.isRequired,
		basicSalary : PropTypes.number.isRequired,
		nonTaxables : PropTypes.number.isRequired,
		SSS : PropTypes.number.isRequired,
		philhealth : PropTypes.number.isRequired,
		pagibig : PropTypes.number.isRequired,
		TWH : PropTypes.number.isRequired,
		netIncome : PropTypes.number.isRequired
	})
}


