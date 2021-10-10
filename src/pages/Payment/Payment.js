import React from 'react'
import { Button } from 'react-bootstrap'
import PaymentOptionList from '../../components/PaymentList/PaymentOptionList'
import AdminLayout from '../Layout/AdminLayout'

const Payment = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Payment</h2>
        <hr />
        <div className="text-end">
          <Button variant="success">Add new payment option</Button>
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
