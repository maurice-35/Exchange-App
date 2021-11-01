import axios from 'axios'
import { useState, React, useEffect } from 'react'
// import { Form, FloatingLabel, Col } from 'react-bootstrap'



const CurrencyShow = () => {
	const [currencies, setCurrencies] = useState([])


	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('https://api.coinbase.com/v2/currencies')
				// console.log('DATA', data)
				const onDisplay = data.filter(item => item.onDisplay)
				setCurrencies(onDisplay)
			} catch (err) {
				console.log('Error', err)
			}
		}
		getData()
	}, [])


	return (
		<div container className="field">
			<form className="from">
				<label for="currency">Select a currency from:</label>
				<select id="currencies" name="currencies">
					<option value="currencies">currencies</option>
				</select>
			</form>
			<form className="to">
				<label for="currency">Select a currency to:</label>
				<select id="currencies" name="currencies">
					<option value="currencies">currencies</option>
				</select>
			</form>
			<div>
				<form>
					<div id="tofrom2">
						<span className="result">result</span>
						<input className="to" value="currency" type="hidden" />
						<input name="answer" value="" />
					</div>
				</form>
			</div>
		</div>
	)
}

export default CurrencyShow