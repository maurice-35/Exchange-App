import React, { useState, useEffect } from 'react'
import CurrencyIndex from './CurrencyIndex'
import axios from 'axios'
import ExchangeRate from '../currencies/ExchangeRate'




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
					selectedCurrency={fromCurrency}
					currencyFlag={fromCurrency}
					handleOnChangeCurrency={e => setFromCurrency(e.target.value)}
					handleOnChangeAmount={handleFromAmountChange}
					amount={fromAmount}
				/>
				<div className="image1">
					<img src="http://www.geonames.org/flags/l/uk.gif" alt="GBP" />
				</div>

				<CurrencyIndex
					currencyOptions={currencyOptions}
					selectedCurrency={toCurrency}
					currencyFlag={toCurrency}
					handleOnChangeCurrency={e => setToCurrency(e.target.value)}
					handleOnChangeAmount={handleToAmountChange}
					amount={toAmount}
				/>
				<div className="image1">
					<img src="http://www.geonames.org/flags/l/us.gif" alt="US" />
				</div>
				<div>
					<ExchangeRate
						currencyOptions={currencyOptions}
						selectedCurrency={fromCurrency}
						handleOnChangeCurrency={e => setFromCurrency(e.target.value)}
						handleOnChangeAmount={handleFromAmountChange}
						amount={fromAmount}

					/>
				</div>
			</div>
		</section>
	)
}

export default CurrencyShow
