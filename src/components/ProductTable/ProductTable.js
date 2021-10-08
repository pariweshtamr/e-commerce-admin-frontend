import React, { useEffect } from 'react'
import { Table, Button, Spinner, Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  fetchProducts,
  deleteProductAction,
} from '../../pages/Product/ProductAction'

const ProductTable = () => {
  const dispatch = useDispatch()
  const { productList, isPending, productResponse } = useSelector(
    (state) => state.product,
  )

  useEffect(() => {
    !productList?.length && dispatch(fetchProducts())
  }, [dispatch])

  const handleOnDelete = (_id) => {
    if (window.confirm('Are you sure you want to delete the product?')) {
      _id && dispatch(deleteProductAction(_id))
    }
  }
  return (
    <div>
      {isPending && <Spinner variant="info" animation="border" />}

      {productResponse.message && (
        <Alert
          variant={productResponse.status === 'success' ? 'success' : 'danger'}
        >
          {' '}
          {productResponse.message}
        </Alert>
      )}
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>THUMBNAIL</th>
            <th>STATUS</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {!productList?.length ? (
            <tr>
              <td colSpan="6" className="text-center">
                No products to display
              </td>
            </tr>
          ) : (
            productList.map((row, i) => (
              <tr key={row._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={row?.images[0]} alt={row.title} width="150px" />
                </td>
                <td>
                  {row.status ? (
                    <span className="text-success">Online</span>
                  ) : (
                    <span className="text-warning">Offline</span>
                  )}
                </td>
                <td className="text-start px-2">{row.title}</td>
                <td>${row.price}</td>
                <td>
                  <NavLink to={`/products/edit/${row.slug}`}>
                    <Button variant="info">
                      <i className="fas fa-pencil-alt me-2"></i>Edit
                    </Button>
                  </NavLink>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(row._id)}
                  >
                    <i className="fas fa-trash me-2"></i>Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductTable
