import React from 'react'
// import axios from 'axios'
// import CurrencyCard from './currencies/CurrencyCard'


const Home = () => {

	// const [currencies, setCurrencies] = useState([])
	// const [hasError, setHasError] = useState()


	// useEffect(() => {

	// 	const getData = async () => {
	// 		try {
	// 		const { data } = await axios.get('https://api.coinbase.com/v2/currencies')
	// 		// console.log('DATA', data)
	// 		setCurrencies(data)
	// 		} catch {

	// 		setHasError(true)
	// 		console.log('Error', hasError)	
	// 	}
	// }
	// 	getData()
	// }, )

  // const handleChange = (event) => {
	// 	setCurrencies (event.target.value)
	// }

	

	return (
<section className="hero is-fullheight-with-navbar is-success">
      <div className="hero-body">
			<div class="ball">
        <div className="container">
          <h1 className="title">
            <span className="logo-emoji" role="img" aria-label="logo">฿</span>
            Exchange Rate
            <span className="logo-emoji" role="img" aria-label="logo">฿</span>
          </h1>
        </div>
      </div>
			</div>
    </section>

	// 	<>
	// 		<div className="container">

	// 			{currencies ?
	// 			<div className="field">
	// 				<h2 className="title has-text-centered">{currencies.id}</h2>
	// 				<form className="column is-half is-offset-half box">
	// 					<select value={currencies.name} onChange={handleChange}>
	// 					{currencies.length > 0 ? 
  //         <div className="columns is-multiline">
  //           {currencies.map(currency => {
  //             return <CurrencyCard key={currency._id} {...currency}/>
  //           })}
  //         </div>
  //         :
  //         <h2 className="title has-text-centered">
  //           {hasError ? 'Something has gone wrong!' : 'loading...🧀'}
  //         </h2>
  //       }
	// 						{/* <option value=>currencies</option> */}
	// 						{/* <option value="GBP">GBP</option>
	// 						<option value="EUR">EUR</option> */}
	// 					</select>
	// 				</form>
	// 				{/* <form>
	// 					<select value={currencies.name} onChange={handleChange}>
	// 						<option value="USD">USD</option>
	// 						<option value="GBP">GBP</option>
	// 						<option value="EUR">EUR</option>
	// 					</select>
	// 				</form> */}
	// 			</div>
	// 			:
	// 			<h2 className="title has-text-centered">
	// 				{hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 📀'}
	// 			</h2>
	// 		}
	// 		</div>
	// 		<div className="container">
	// 			<div className="field">
	// 				<input
	// 					type="text"
	// 					placeholder="Exchange rate"
	// 					name="currency"
	// 				/>
	// 			</div>
	// 			<div className="field">
	// 				<input
	// 					type="number"
	// 					placeholder="Amount"
	// 					name="currency"
	// 				/>
	// 			</div>
	// 		</div>
	// 	</>
 )
}
export default Home

