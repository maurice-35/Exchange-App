import React from 'react'


const CurrencyIndex = props => {

	const {currencyOptions, selectedCurrency, handleOnChangeCurrency, amount, handleOnChangeAmount} = props
		

	return (
		
		<>
			<div>
				<input type="number" className="from" value={amount} onChange={handleOnChangeAmount} />
				<select className="select" value={selectedCurrency} onChange={handleOnChangeCurrency}>
					{currencyOptions.map(option => (
						<option key={option} value={option}>{option}</option>
					))}
				</select>
			</div>
		</>
	)
}


export default CurrencyIndex

