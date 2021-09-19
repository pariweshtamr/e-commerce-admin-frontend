import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Form, Row, Button, Spinner, Alert} from 'react-bootstrap'
import { createCat } from "../../pages/Category/CategoryAction";

const initialState = {
    name: "",
    parentCat: ""
}
export const CategoryForm = () => {
    const dispatch = useDispatch()
    const [newCat, setNewCat] = useState(initialState)

    const {isLoading, categoryResponse, categories} = useSelector(state => state.category)

    const handleOnChange = e => {
        const {name, value} = e.target

        setNewCat({
            ...newCat,
            [name]:value,
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!newCat.name){
           return alert("Please enter the category name.")
        }

        dispatch (createCat(newCat))
        console.log(newCat)
    }

    const parentCat = categories.filter(row => !row.parentCat)

    return (
<>
{isLoading && <Spinner variant ="primary" animation="border" />}
{categoryResponse?.message && <Alert variant={categoryResponse?.status === "success" ? "success" : "danger"}>{categoryResponse?.message}</Alert>}
<Form onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control name="name" onChange={handleOnChange} placeholder="Category Name" />
    </Col>
    <Col>
    <Form.Select name="parentCat" onChange={handleOnChange} aria-label="Select parent category">
        <option value="">Select Parent Category</option>
        {parentCat?.length && parentCat.map(row =><option key={row._id} value={row._id}>{row.name}</option>)}
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
