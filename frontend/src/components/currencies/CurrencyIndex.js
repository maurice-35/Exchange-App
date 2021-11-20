import React from 'react'


const CurrencyIndex = props => {

	const {currencyOptions, selectedCurrency, amount} = props
		

	return (
		<>
			<div>
				<input type="number" className="from" value={amount} />
				<select className="select" value={selectedCurrency} >
					{currencyOptions.map(option => (
						<option key={option} value={option}>{option}</option>
					))}
				</select>
			</div>
		</>
	)
}


export default CurrencyIndex

