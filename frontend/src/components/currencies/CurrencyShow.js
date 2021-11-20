import React, { useState, useEffect } from 'react'
import CurrencyIndex from './CurrencyIndex'
import axios from 'axios'




const CurrencyShow = () => {
	const [currencyOptions, setCurrencyOptions] = useState([])


	useEffect(() => {
		const getData
	 = async () => {
			try {
				const { data } = await axios.get('https://api.exchangerate.host/latest')
				// console.log('DATA', data)
				setCurrencyOptions([data.base, ...Object.keys(data.rates)])
			} catch (err) {
				console.log('Error', err)
			}
		}
		getData()
	}, [])

	console.log(currencyOptions)



	return (
		<section className="container">
			<h3>Currency Converter</h3>
			
			<div className="forms">
				from<CurrencyIndex 
				currencyOptions={currencyOptions}
				/> 
				<div className="image1">
					<img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1635842813/Exchange/GB_flag_u8uymw.png" alt="GBP" />
				</div>
			<form className="to">
				to<CurrencyIndex 
				currencyOptions={currencyOptions}
				/>
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
