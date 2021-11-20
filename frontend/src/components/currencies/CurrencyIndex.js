import React from 'react'


const CurrencyIndex = props => {

	const {
		currencyOptions
	} = props

	return (
		<div>
			<input type="number" className="from" />
			<select className="select">
				{currencyOptions.map(option => (
					<option value={option}>{option}</option>
				))}
			</select>
		</div>
	)
}


export default CurrencyIndex

