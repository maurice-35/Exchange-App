import React, { useEffect } from 'react'
import axios from 'axios'


const Home = () => {

	useEffect(() => {
		
		const getData = async () => {
			const { data } = await axios.get('https://v6.exchangerate-api.com/v6/df125311940707489475a75a/latest/USD')
			console.log('DATA', data)
		}
		getData()
	}, )
	


	return (
		<>
		<h1>This is Home</h1>
		</>
	)
}

export default Home