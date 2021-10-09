import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Spinner, Alert } from 'react-bootstrap'
import { fetchCat } from '../../pages/Category/CategoryAction'
import {
  updateProductAction,
  fetchAProduct,
} from '../../pages/Product/ProductAction'
import { useParams } from 'react-router-dom'
import ProductCategoryList from '../Product-category-List/ProductCategoryList'

const initialState = {
  status: false,
  title: '',
  price: 0,
  salesPrice: 0,
  salesStartDate: undefined,
  salesEndDate: undefined,
  brand: '',
  qty: 0,
  description: '',
}

const EditProductForm = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  // const [product, setProduct] = useState(initialState)
  const [updateProduct, setUpdateProduct] = useState(initialState)
  const [images, setImages] = useState([])
  const [selectedCats, setSelectedCats] = useState([])
  const [imgToDelete, setImgToDelete] = useState([])

  const { isPending, productResponse, selectedProduct } = useSelector(
    (state) => state.product,
  )

  useEffect(() => {
    if (!selectedProduct?._id || slug !== selectedProduct.slug) {
      dispatch(fetchAProduct(slug))
      dispatch(fetchCat())
    }

    setUpdateProduct(selectedProduct)
    setSelectedCats(selectedProduct.categories)
  }, [dispatch, slug, selectedProduct, selectedProduct._id])

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target
    if (name === 'status') {
      setUpdateProduct({
        ...updateProduct,
        status: checked,
      })
      return
    }

    if (name === 'category') {
      setUpdateProduct({
        ...updateProduct,
        category: [value],
      })
      return
    }

    setUpdateProduct({
      ...updateProduct,
      [name]: value,
    })
  }

  const handleOnImageSelect = (e) => {
    const { files } = e.target

    setImages(files)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // combine forma data and images as multipart of form

    const formData = new FormData()

    const {
      createdAt,
      updatedAt,
      __v,
      categories,
      slug,
      ...rest
    } = updateProduct

    for (const key in rest) {
      if (key === 'images') {
        continue
      }
      if (key === 'salesStartDate' || key === 'salesEndDate') {
        const val = rest[key] ? rest[key] : ''

        formData.append(key, val)
        continue
      }
      formData.append(key, rest[key])
    }

    //keep old images
    formData.append('existingImages', rest.images)

    //add new uploaded images
    images?.length && [...images].map((img) => formData.append('images', img))

    //add categories
    formData.append('categories', selectedCats)

    //add images to be deleted
    formData.append('imgToDelete', imgToDelete)

    dispatch(updateProductAction(formData, slug))

    window.scrollTo(0, 0)
  }

  const handleOnCatSelect = (e) => {
    const { checked, value } = e.target
    if (checked) {
      //add on the state list
      setSelectedCats([...selectedCats, value])
    } else {
      //remove from the state list
      const args = selectedCats.filter((catId) => catId !== value)
      setSelectedCats(args)
    }
  }

  const handleOnImageDelete = (e) => {
    const { checked, value } = e.target
    console.log(checked, value)
    if (checked) {
      setImgToDelete([...imgToDelete, value])
    } else {
      const args = imgToDelete.filter((source) => source !== value)

      setImgToDelete(args)
    }
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
            checked={updateProduct.status}
            id="custom-switch"
            label="Status"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Title</Form.Label>
          <Form.Control
            name="title"
            value={updateProduct.title}
            placeholder="Product name"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>* Price</Form.Label>
          <Form.Control
            name="price"
            value={updateProduct.price}
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
            value={updateProduct.qty}
            type="number"
            placeholder="Qty"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Categories</Form.Label>
          <ProductCategoryList
            selectedCats={selectedCats}
            handleOnCatSelect={handleOnCatSelect}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sales Price</Form.Label>
          <Form.Control
            name="salesPrice"
            value={updateProduct.salesPrice}
            type="number"
            placeholder="$$$"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale Start Date</Form.Label>
          <Form.Control
            name="salesStartDate"
            value={
              updateProduct.salesStartDate
                ? updateProduct.salesStartDate?.substr(0, 10)
                : undefined
            }
            type="date"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale End Date</Form.Label>
          <Form.Control
            name="salesEndDate"
            value={
              updateProduct.salesEndDate
                ? updateProduct.salesEndDate?.substr(0, 10)
                : undefined
            }
            type="date"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            value={updateProduct.brand}
            placeholder="Brand Name"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={updateProduct.description}
            placeholder="..."
            style={{ height: '150px' }}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select an image to delete</Form.Label>
          <div className="d-flex">
            {updateProduct?.images &&
              updateProduct.images.map((imgLink, i) => (
                <div className="img-thumbnail" key={i}>
                  {' '}
                  <Form.Check
                    defaultValue={imgLink}
                    onChange={handleOnImageDelete}
                  />
                  <img src={imgLink} alt="product-img" width="150px" />
                </div>
              ))}
          </div>
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
          Update
        </Button>
      </Form>
    </div>
  )
}

export default EditProductForm
