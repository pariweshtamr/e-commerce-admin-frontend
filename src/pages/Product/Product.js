import React from 'react'
import { Button } from 'react-bootstrap'
import ProductTable from '../../components/ProductTable/ProductTable'
import AdminLayout from '../Layout/AdminLayout'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Product</h2>
        <div className="top-btn text-end">
          <NavLink to="/products/new">
            <Button variant="primary">
              {''}
              <i class="fas fa-plus-square me-2"></i>Add New Product
            </Button>
          </NavLink>
        </div>
        <hr />
        <div className="product-list">
          <ProductTable />
        </div>
      </AdminLayout>
    </div>
  )
}

export default Product
