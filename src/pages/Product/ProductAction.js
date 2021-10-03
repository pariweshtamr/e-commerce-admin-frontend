import {
  respondPending,
  respondFail,
  addProdSuccess,
  getProductsSuccess,
} from './ProductSlice'
import { getProduct, addProduct } from '../../api/productAPI'

export const fetchProducts = (slug) => async (dispatch) => {
  dispatch(respondPending())
  const data = await getProduct(slug)

  if (data.status === 'success') {
    data.products && dispatch(getProductsSuccess(data))
    return
  }

  dispatch(respondFail(data))
}

export const addProductAction = (newProduct) => async (dispatch) => {
  dispatch(respondPending())
  const data = await addProduct(newProduct)

  if (data.status === 'success') {
    dispatch(addProdSuccess(data))
    return
  }

  dispatch(respondFail(data))
}
