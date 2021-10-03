import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../pages/Product/ProductAction'

const ProductTable = () => {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.product)

  useEffect(() => {
    !productList.length && dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>STATUS</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {!productList?.length
            ? 'No products to display'
            : productList.map((row) => (
                <tr key={row._id}>
                  <td>1</td>
                  <td>Online</td>
                  <td className="text-start">{row.title}</td>
                  <td>${row.price}</td>
                  <td>
                    <Button variant="info">
                      <i class="fas fa-pencil-alt"></i>Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger">
                      <i class="fas fa-trash"></i>Delete
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductTable
