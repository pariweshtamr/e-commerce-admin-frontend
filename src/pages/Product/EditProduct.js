import React from 'react'
import EditProductForm from '../../components/ProductForms/EditProductForm'
import AdminLayout from '../Layout/AdminLayout'

const EditProduct = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Update Product</h2>
        <hr />

        <EditProductForm />
      </AdminLayout>
    </div>
  )
}

export default EditProduct
