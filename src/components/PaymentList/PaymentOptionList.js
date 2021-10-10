import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { getPaymentOptions } from '../../pages/Payment/PaymentAction'

const PaymentOptionList = () => {
  const dispatch = useDispatch()
  const { isPending, paymentResponse, paymentOptions } = useSelector(
    (state) => state.payment,
  )

  useEffect(() => {
    dispatch(getPaymentOptions())
  }, [dispatch])

  return (
    <div>
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
                  {row.status ? (
                    <span className="text-success">Active</span>
                  ) : (
                    <span className="text-warning">Inactive</span>
                  )}
                </td>
                <td>{row.name}</td>
                <td>{row.info}</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PaymentOptionList
