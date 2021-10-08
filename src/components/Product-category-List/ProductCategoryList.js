import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ProductCategoryList = ({ handleOnCatSelect, selectedCats }) => {
  const { categories } = useSelector((state) => state.category)

  return (
    <div className="product-list-category">
      <ListGroup>
        {categories?.length &&
          categories.map((row, i) => (
            <ListGroup.Item key={i}>
              <input
                type="checkbox"
                name="category"
                checked={selectedCats?.includes(row._id)}
                defaultValue={row._id}
                onChange={handleOnCatSelect}
              />
              {''}
              {row.name}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  )
}

export default ProductCategoryList
