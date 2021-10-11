import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import AdminLayout from '../Layout/AdminLayout'

const orders = [
  {
    _id: '777',
    fname: 'Pariwesh',
    lname: 'Tamrakar',
    qty: 2,
    amount: 640,
    paymentStatus: 'paid',
  },
  {
    _id: '778',
    fname: 'Rashud',
    lname: 'Shrestha',
    qty: 1,
    amount: 320,
    paymentStatus: 'pending',
  },
]

const data = orders.map((row) => {
  const { _id, fname, qty, amount, paymentStatus } = row
  return { _id, fname, qty, amount, paymentStatus }
})

const Order = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Orders</h2>
        <hr />
        <CustomTable data={data} />
      </AdminLayout>
    </div>
  )
}

export default Order
