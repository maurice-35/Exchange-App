import React from 'react'

const ExchangeRate = props => {
	const { amount, handleOnChangeAmount} = props


	return (
		<div>
			<form>
						<div id="tofrom2">
							<span className="result">Exchange rate:</span> 
							<input className="to" value={amount} onChange={handleOnChangeAmount} />
						</div>
					</form>
		</div>
	)
}

export default ExchangeRate
