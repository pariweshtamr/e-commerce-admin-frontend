import {catRequestPending, catResponseSuccess,fetchCatRespSuccess, catRequestFail} from './CategorySlice'
import { createCategory, fetchCategory, deleteCategory, updateCategory } from "../../api/categoryAPI";


export const createCat = newCategory => async dispatch => {
    
    dispatch(catRequestPending())

    //call api
    const data = await createCategory(newCategory)

    if(data?.status === "success"){
        dispatch(fetchCat())
       return dispatch(catResponseSuccess(data))
    } 
    dispatch(catRequestFail(data))
}

export const fetchCat = () => async dispatch => {
    
    dispatch(catRequestPending())

    //call api
    const {status, message, categories} = await fetchCategory()

    if(status === "success"){
       return dispatch(fetchCatRespSuccess(categories))
    } 
    dispatch(catRequestFail({status, message}))
}

export const deleteCat = (_id) => async dispatch => {
    
    dispatch(catRequestPending())

    //call api
    const data = await deleteCategory(_id)

    if(data.status === "success"){
        dispatch(fetchCat())
       return dispatch(catResponseSuccess(data))
    } 
    dispatch(catRequestFail(data))
}

export const updateCat = catObj => async dispatch => {
    
    dispatch(catRequestPending())

    //call api
    const data = await updateCategory(catObj)

    if(data.status === "success"){
        dispatch(fetchCat())
       return dispatch(catResponseSuccess(data))
    } 
    dispatch(catRequestFail(data))
}

