import React, {useState} from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

const initialState = {
    name: "",
    parentCat: ""
}

const CategoryForm = () => {
    const [newCat, setNewCat] = useState(initialState)

    const handleOnChange = e => {
        const {name, value} = e.target

        setNewCat({
            ...newCat,
            [name]:value,
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(newCat)
    }
    return (
        <>
<Form onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control name="name" onChange={handleOnChange} placeholder="Category name" />
    </Col>
    <Col>
    <Form.Select name="parentCat" onChange={handleOnChange} aria-label="Select parent category">
        <option value="">Select parent category</option>
        <option value="1"></option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
    </Col>
    <Col>
    <Button type="submit" variant="warning">Add Category</Button>
    </Col>
  </Row>
</Form>       
</>
    )
}

export default CategoryForm
