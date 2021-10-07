import {
  respondPending,
  respondFail,
  addProdSuccess,
  deleteProdSuccess,
  getProductsSuccess,
} from './ProductSlice'
import { getProduct, addProduct, deleteProduct } from '../../api/productAPI'
import { updateAccessJWT } from '../../api/tokenAPI'
import { userLogout } from '../admin-auth-slice/userAction'

export const fetchProducts = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getProduct()

  // auto re-auth
  if (data.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(fetchProducts())
    } else {
      dispatch(userLogout())
    }
  }
  //end auto re-auth

  if (data?.status === 'success') {
    data.products && dispatch(getProductsSuccess(data))
    return
  }

  dispatch(respondFail(data))
}

export const addProductAction = (newProduct) => async (dispatch) => {
  dispatch(respondPending())
  const data = await addProduct(newProduct)

  // auto re-auth
  if (data.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(addProductAction(newProduct))
    } else {
      dispatch(userLogout())
    }
  }
  //end auto re-auth

  if (data?.status === 'success') {
    dispatch(addProdSuccess(data))
    dispatch(fetchProducts())
    return
  }

  dispatch(respondFail(data))
}

export const deleteProductAction = (_id) => async (dispatch) => {
  dispatch(respondPending())

  //call api
  const data = await deleteProduct(_id)

  // auto re-auth
  if (data.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(deleteProductAction(_id))
    } else {
      dispatch(userLogout())
    }
  }
  //end auto re-auth

  if (data?.status === 'success') {
    dispatch(deleteProdSuccess(data))
    dispatch(fetchProducts())
    return
  }

  dispatch(respondFail(data))
}
