import axios from 'axios'
import { useState, React, useEffect } from 'react'
import { Card, ListGroup, Form, FloatingLabel, Col } from 'react-bootstrap'
import CurrencyIndex from '../currencies/CurrencyIndex'



const CurrencyShow = () => {
	const [currencies, setCurrencies] = useState([])
	const [formInfo, setFormInfo] = useState([])
	const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

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

	const openForm = e => {
		const userInput = e.target.id
		const filterArray = currencies.filter(currency => userInput === currency.id)
		setFormInfo(filterArray)
		setShow(true)
	}


	return (
		<>
			<Col md>
				<FloatingLabel controlId="floatingInputGrid" label="currency">
					<Form.Control type="text" placeholder="currency" />
				</FloatingLabel>
			</Col>
			<Col md>
				<FloatingLabel controlId="floatingSelectGrid" label="Your currency">
					<Form.Select aria-label="Floating label select example">
						<option>Select a currencies</option>
						<option value="1">USD</option>
						<option value="2">GBP</option>
						<option value="3">EUR</option>
					</Form.Select>
				</FloatingLabel>
			</Col>
			<Card style={{ width: '18rem' }}>
				<ListGroup variant="flush">
					{formInfo.map(info =>
					<CurrencyIndex
					show={show}
					handleClose={handleClose}
					key={info.id}
					name={info.name}
					openForm={openForm}
					/>)}
					<ListGroup.Item>Currency</ListGroup.Item>
					<ListGroup.Item>Currency</ListGroup.Item>
					<ListGroup.Item>Currency</ListGroup.Item>
				</ListGroup>
			</Card>
		</>
	)
}

export default CurrencyShow