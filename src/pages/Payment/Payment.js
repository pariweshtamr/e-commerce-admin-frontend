import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import AddPaymentOption from '../../components/NewPaymentOption/AddPaymentOption'
import PaymentOptionList from '../../components/PaymentList/PaymentOptionList'
import AdminLayout from '../Layout/AdminLayout'
import { resetResponseMsg } from '../../pages/Payment/PaymentSlice'

const Payment = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  useEffect(() => {
    return () => {
      dispatch(resetResponseMsg())
    }
  }, [dispatch])

  const onHide = () => {
    setShow(false)

    dispatch(resetResponseMsg())
  }

  return (
    <div>
      <AdminLayout>
        <h2>Payment</h2>
        <hr />
        <div className="text-end">
          <Button variant="success" onClick={() => setShow(true)}>
            <i className="fas fa-plus me-2"></i>
            <i className="fas fa-credit-card me-2"></i>Add new payment option
          </Button>
          {<AddPaymentOption show={show} onHide={onHide} />}
        </div>
        <div>
          <hr />
          <PaymentOptionList />
        </div>
      </AdminLayout>
    </div>
  )
}

export default Payment
