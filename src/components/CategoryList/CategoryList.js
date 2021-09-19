import React, {useEffect} from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCat, deleteCat } from "../../pages/Category/CategoryAction";
import { catRespReset } from "../../pages/Category/CategorySlice";

const CategoryList = () => {

    const dispatch = useDispatch()

    const { categories, categoryResponse } = useSelector(state => state.category)

    useEffect(() => {
        !categories.length && dispatch(fetchCat())

        return () => categoryResponse.status && dispatch(catRespReset())
    }, [categories, dispatch])


    //parentCat only
    const parentCat = categories.filter(row => !row.parentCat)

    //child cat only
    const childCat = categories.filter(row => row.parentCat)

    return (
        <div>
            <ListGroup variant="flush">
                {
                    parentCat?.length && parentCat.map((row, i) => {
                        return <div>
                            <ListGroup.Item key={row._id} className="d-flex justify-content-between align-items-center">
                            <span>{row.name}</span>
                            <span className="m-1">
                            <Button variant="primary">Edit</Button>
                            <Button variant="danger" onClick={() => dispatch(deleteCat(row._id))}>Delete</Button>
                            </span>
                            </ListGroup.Item>
                            {
                                childCat.map(item => item.parentCat === row._id ? <ListGroup.Item key={row._id} className="d-flex justify-content-between align-items-center">      
                                    <span>{" -> "}{item.name}</span>
                                    <span className="m-1">
                                        <Button variant="primary">Edit</Button>
                                        <Button variant="danger"onClick={() => dispatch(deleteCat(item._id))}>Delete</Button>
                                    </span></ListGroup.Item >: null)
                            }
                        </div>
                    })
                }
        </ListGroup>
        </div>
    )
}

export default CategoryList
