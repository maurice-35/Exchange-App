import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import CurrencyIndex from './CurrencyIndex'




const CurrencyShow = () => {
	const [currencies, setCurrencies] = useState('')


	useEffect(() => {
		const getData = async () => {
			try {
				// const { data } = await axios.get('https://api.exchangerate.host/latest')
				// console.log('DATA', data)
				setCurrencies()
				displayCurrencies()
			} catch (err) {
				console.log('Error', err)
			}
		}
		getData()
	}, )

	console.log('currencies on state', currencies)

	function displayCurrencies() {
		const currenciesHTMLArray = currencies.map(currency => {
			return `<h2>${currency.name}</h2>`
		})
		console.log('currenciesHTMLArray', currenciesHTMLArray)
	}

	return (
		<section className="container">
			<h3>Currency Converter</h3>
			<div className="forms">
			<form className="from">
				<label for="currency">Select a currency from:</label>
				<select id="currencies" name="currencies">
					<option
						value={CurrencyIndex}>currencies
					</option>
				</select>
				<div className="image1">
					<img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1635842813/Exchange/GB_flag_u8uymw.png" alt="GBP" />
				</div>
			</form><br />
			<form className="to">
				<label for="currency">Select a currency to:</label>
				<select id="currencies" name="currencies">
					<option value="currencies">currencies</option>
				</select>
				<div>
					<img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1635889813/Exchange/flag_US_e8yhen.png" alt="US" />
				</div>
			</form>
			<div><br />
				<form>
					<div id="tofrom2">
						<span className="result">current rate:</span>
						<input className="to" value="currency" type="hidden" />
						<input name="answer" value="rate" />
					</div>
				</form>
				</div>
			</div>
		</section>
	)
}

export default CurrencyShow
