import React, {useEffect} from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCat, deleteCat } from "../../pages/Category/CategoryAction";
import { catRespReset, onCategorySelect } from "../../pages/Category/CategorySlice";
import EditCategoryForm from '../CategoryForm/EditCategoryForm';

const CategoryList = () => {

    const dispatch = useDispatch()

    const { categories, categoryResponse } = useSelector(state => state.category)

    useEffect(() => {
        !categories.length && dispatch(fetchCat())

        // return () => categoryResponse.status && dispatch(catRespReset())
    }, [categories, dispatch])

    const handleOnEdit = cat => {

        dispatch(onCategorySelect(cat))
        console.log(cat)
    }

    //parentCat only
    const parentCat = categories.filter(row => !row.parentCat)

    //child cat only
    const childCat = categories.filter(row => row.parentCat)

    const handleOnDelete = _id => {
        const hasChildCategory = childCat.filter(item => item.parentCat === _id)
        if(hasChildCategory.length){
            return alert("This Category has child categories. Please re allocate or remove any child categories before deleting this category")
        }
        dispatch(deleteCat(_id))
    }

    return (
        <div>
            <EditCategoryForm />
            <ListGroup variant="flush">
                {
                    parentCat?.length && parentCat.map((row, i) => {
                        return <div>
                            <ListGroup.Item key={row._id} className="d-flex justify-content-between align-items-center">
                            <span>{row.name}</span>
                            <span className="m-1">
                            <Button onClick={()=>handleOnEdit(row)} variant="primary" className="mx-2">Edit</Button>
                            <Button variant="danger" onClick={() => handleOnDelete(row._id)}>Delete</Button>
                            </span>
                            </ListGroup.Item>
                            {
                                childCat.map(item => item.parentCat === row._id ? <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">      
                                    <span>{" -> "}{item.name}</span>
                                    <span className="m-1">
                                        <Button onClick={()=>handleOnEdit(item)} variant="primary" className="mx-2">Edit</Button>
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
