import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

	const [currencies, setCurrencies] = useState([])
	const [hasError, setHasError] = useState()


	useEffect(() => {

		const getData = async () => {
			try {
			const { data } = await axios.get('https://api.coinbase.com/v2/currencies')
			// console.log('DATA', data)
			setCurrencies(data)
			} catch {

			setHasError(true)
			console.log('Error', hasError)	
		}
	}
		getData()
	}, )

  const handleChange = (event) => {
		setCurrencies (event.target.value)
	}

	

	return (
		<>
			<div className="container">

				{currencies ?
				<div className="field" id="first">
					<h2 className="title has-text-centered">{currencies.name}</h2>
					<form className="column is-half is-offset-half box">
						<select value={currencies.name} onChange={handleChange}>
							<option value="USD">USD</option>
							<option value="GBP">GBP</option>
							<option value="EUR">EUR</option>
						</select>
					</form>
					<form>
						<select value={currencies.name} onChange={handleChange}>
							<option value="USD">USD</option>
							<option value="GBP">GBP</option>
							<option value="EUR">EUR</option>
						</select>
					</form>
				</div>
				:
				<h2 className="title has-text-centered">
					{hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 📀'}
				</h2>
			}
			</div>
			<div className="container">
				<div className="field">
					<input
						type="text"
						placeholder="Exchange rate"
						name="currency"
					/>
				</div>
				<div className="field">
					<input
						type="number"
						placeholder="Amount"
						name="currency"
					/>
				</div>
			</div>
		</>
	)
}

export default Home

