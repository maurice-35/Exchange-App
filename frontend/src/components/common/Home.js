import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

	const [USD, setUSD] = useState([])
	const [currency, setCurrency] = useState([])
	const [error, setError] = useState([])


	useEffect(() => {

		const getData = async () => {
			try {
			const { data } = await axios.get('https://v6.exchangerate-api.com/v6/df125311940707489475a75a/latest/currency')
			// console.log('DATA', data)
			setUSD(data)
			} catch {

			setError(true)
			console.log('Error', error)	
		}
	}
		getData()
	}, [])

  const handleChange = (event) => {
		setUSD (event.target.value)
		setCurrency (event.target.value)
	}

	return (
		<>
			<div className="container">
				<div className="field" id="first">
					<form className="column is-half is-offset-half box">
						<select value={USD} onChange={handleChange}>
							<option value="USD">USD</option>
							<option value="GBP">GBP</option>
							<option value="EUR">EUR</option>
						</select>
					</form>
					<form>
						<select value={currency} onChange={handleChange}>
							<option value="USD">USD</option>
							<option value="GBP">GBP</option>
							<option value="EUR">EUR</option>
						</select>
					</form>
				</div>
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

