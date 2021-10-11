import React, { useEffect, useState } from 'react'
import { Table, Button, Spinner, Alert, Form } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import {
  getPaymentOptions,
  deletePaymentOptionsAction,
  udatePaymentOptionAction,
} from '../../pages/Payment/PaymentAction'

const PaymentOptionList = () => {
  const dispatch = useDispatch()

  const { isPending, paymentResponse, paymentOptions } = useSelector(
    (state) => state.payment,
  )

  useEffect(() => {
    dispatch(getPaymentOptions())
  }, [dispatch])

  const handleOnDelete = (_id) => {
    if (!_id) {
      alert('ID missing')
    }
    dispatch(deletePaymentOptionsAction(_id))
  }

  const handleOnChange = (e) => {
    const { checked, value } = e.target

    if (window.confirm('Are you sure you want to change the status?')) {
      dispatch(udatePaymentOptionAction({ _id: value, status: checked }))
    }
  }

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      {paymentResponse?.message && (
        <Alert
          variant={paymentResponse?.status === 'success' ? 'success' : 'danger'}
        >
          {paymentResponse?.message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>STATUS</th>
            <th>NAME</th>
            <th>INFO</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {paymentOptions?.length &&
            paymentOptions.map((row, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    name="status"
                    type="switch"
                    checked={row.status}
                    defaultValue={row._id}
                    onChange={handleOnChange}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.info}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(row._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PaymentOptionList
