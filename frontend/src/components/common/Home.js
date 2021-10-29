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
 )
}
export default Home

