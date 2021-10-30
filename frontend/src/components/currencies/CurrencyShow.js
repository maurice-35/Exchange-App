import React from 'react'
import { Form , FloatingLabel, Row, Col } from 'react-bootstrap'


const CurrencyShow = () => {


	return (
		<>
			<Row className="g-2">
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
</Row>
		</>
	)
}

export default CurrencyShow