import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap'
import ModalBox from '../Modal/ModalBox'
import { addNewPaymentOption } from '../../pages/Payment/PaymentAction'

const initialPaymentOption = {
  status: false,
  name: '',
  info: '',
}

const AddPaymentOption = ({ show, onHide }) => {
  const dispatch = useDispatch()
  const [paymentOpt, setPaymentOpt] = useState(initialPaymentOption)

  const { paymentResponse, isPending } = useSelector((state) => state.payment)

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target
    console.log(checked, name, value)

    if (name === 'status') {
      return setPaymentOpt({
        ...paymentOpt,
        status: checked,
      })
    }
    setPaymentOpt({
      ...paymentOpt,
      [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewPaymentOption(paymentOpt))
  }
  return (
    <ModalBox show={show} onHide={onHide} title="Add a new payment">
      {isPending && <Spinner variant="primary" animation="border" />}
      {paymentResponse?.message && (
        <Alert
          variant={paymentResponse?.status === 'success' ? 'success' : 'danger'}
        >
          {paymentResponse?.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col sm="1">
            <Form.Check
              name="status"
              type="switch"
              defaultValue={paymentOpt.status}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="name"
              value={paymentOpt.name}
              onChange={handleOnChange}
              placeholder="Payment option Name"
              required
            />
          </Col>
          <Col sm="6">
            <Form.Control
              name="info"
              value={paymentOpt.info}
              onChange={handleOnChange}
              placeholder="info"
              requied
            />
          </Col>
        </Row>
        <div className="d-grid gap-2 mt-4">
          <Button type="submit" variant="warning" size="lg">
            ADD
          </Button>
        </div>
      </Form>
    </ModalBox>
  )
}

export default AddPaymentOption
