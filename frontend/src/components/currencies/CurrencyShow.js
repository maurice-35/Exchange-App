import React, { useState, useEffect } from 'react'
import CurrencyIndex from './CurrencyIndex'
import axios from 'axios'




const CurrencyShow = () => {
	const [currencyOptions, setCurrencyOptions] = useState([])
	const [fromCurrency, setFromCurrency] = useState()
	const [toCurrency, setToCurrency] = useState()
	const [exchangeRate, setExchangeRate] = useState()
	const [amount, setAmount] = useState()
	const [amountOfFromCurrency, setAmountOfFromcurrency] = useState(true)

	let toAmount, fromAmount
	if (amountOfFromCurrency) {
		fromAmount = amount
		toAmount = amount + exchangeRate
	} else {
		toAmount = amount
		fromAmount = amount / exchangeRate
	}


	useEffect(() => {
		const getData
			= async () => {
				try {
					const { data } = await axios.get('https://api.exchangerate.host/latest')
					// console.log('DATA', data)
					const firstCurrency = Object.keys(data.rates)[0]
					setCurrencyOptions([data.base, ...Object.keys(data.rates)])
					setFromCurrency(data.base)
					setToCurrency(firstCurrency)
					setExchangeRate(data.rates[firstCurrency])
				} catch (err) {
					// console.log('Error', err)
					
				}
			}
		getData()
	}, [])

	// console.log(currencyOptions)

	// console.log('Exchange', exchangeRate)

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
		axios.get(`$(https://api.exchangerate.host/latest)?base=${fromCurrency}&symbols=${toCurrency}`)
		.then(res => res.json())
		.then(data => setExchangeRate(data.rates[toCurrency]))
		}
	}, [fromCurrency, toCurrency])

	function handleFromAmountChange(e) {
		setAmount(e.target.value)
		setAmountOfFromcurrency(true)
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value)
		setAmountOfFromcurrency(false)
	}


	return (
		<section className="container">
			<h3>Currency Converter</h3>
			<div className="forms">
				<CurrencyIndex
					currencyOptions={currencyOptions}
					selectedCurrency = {fromCurrency}
					handleOnChangeCurrency={e => setFromCurrency(e.target.value)}
					handleOnChangeAmount={handleFromAmountChange}
					amount = {fromAmount}
				/>
				<div className="image1">
					<img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1635842813/Exchange/GB_flag_u8uymw.png" alt="GBP" />
				</div>

					<CurrencyIndex
						currencyOptions={currencyOptions}
						selectedCurrency = {toCurrency}
						handleOnChangeCurrency={e => setToCurrency(e.target.value)}
						handleOnChangeAmount={handleToAmountChange}
						amount = {toAmount}
					/>
					<div>
						<img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1635889813/Exchange/flag_US_e8yhen.png" alt="US" />
					</div>
				<div>
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
