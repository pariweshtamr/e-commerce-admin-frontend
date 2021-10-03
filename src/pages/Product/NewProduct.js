import React from 'react'
import AddProductForm from '../../components/ProductForms/AddProductForm'
import AdminLayout from '../Layout/AdminLayout'

const NewProduct = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Add new Product</h2>
        <hr />
        <AddProductForm />
      </AdminLayout>
    </div>
  )
}

export default NewProduct
