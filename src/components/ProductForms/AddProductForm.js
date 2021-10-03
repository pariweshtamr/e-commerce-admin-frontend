import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Spinner, Alert } from 'react-bootstrap'
import { fetchCat } from '../../pages/Category/CategoryAction'
import { addProductAction } from '../../pages/Product/ProductAction'

const initialState = {
  status: '',
  title: '',
  price: 0,
  salesPrice: 0,
  salesStartDate: '',
  salesEndDate: '',
  brand: '',
  qty: 0,
  description: '',
  category: [],
}

const AddProductForm = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState(initialState)
  const [images, setImages] = useState([])

  const { categories } = useSelector((state) => state.category)
  const { isPending, productResponse } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchCat())
  }, [dispatch])

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target
    if (name === 'status') {
      setProduct({
        ...product,
        status: checked,
      })
      return
    }

    if (name === 'category') {
      setProduct({
        ...product,
        category: [...product.category, value],
      })
      return
    }

    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleOnImageSelect = (e) => {
    const { name, files } = e.target

    setImages(files)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // combine forma data and images as multipart of form

    const formData = new FormData()

    for (const key in product) {
      formData.append(key, product[key])
    }
    images.length && [...images].map((img) => formData.append('images', img))

    dispatch(addProductAction(formData))
  }
  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      {productResponse?.message && (
        <Alert
          variant={productResponse?.status === 'success' ? 'success' : 'danger'}
        >
          {productResponse?.message}
        </Alert>
      )}

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label="Status"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Title</Form.Label>
          <Form.Control
            name="title"
            placeholder="Product name"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="$$$"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Quantity</Form.Label>
          <Form.Control
            name="qty"
            type="number"
            placeholder="Qty"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Category</Form.Label>
          <Form.Select
            name="category"
            onChange={handleOnChange}
            aria-label="Select category"
            multiple
          >
            <option value="">Select Category</option>
            {categories?.length &&
              categories.map((row) => (
                <option key={row._id} value={row._id}>
                  {row.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sales Price</Form.Label>
          <Form.Control
            name="salesPrice"
            type="number"
            placeholder="$$$"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale Start Date</Form.Label>
          <Form.Control
            name="salesStartDate"
            type="date"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale End Date</Form.Label>
          <Form.Control
            name="salesEndDate"
            type="date"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            placeholder="Brand Name"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="..."
            style={{ height: '150px' }}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        {/* Image uploader */}
        <Form.Group className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            name="image"
            type="file"
            onChange={handleOnImageSelect}
            multiple
            accept="image/*"
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  )
}

export default AddProductForm
