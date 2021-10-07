import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPending: false,
  productResponse: {},
  productList: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isPending = true
    },
    getProductsSuccess: (state, { payload = [] }) => {
      state.isPending = false
      state.productList = payload.products
    },
    addProdSuccess: (state, { payload }) => {
      state.isPending = false
      state.productResponse = payload
    },
    deleteProdSuccess: (state, { payload }) => {
      state.isPending = false
      state.productResponse = payload
    },
    respondFail: (state, { payload }) => {
      state.isPending = false
      state.productResponse = payload
    },
  },
})

const { reducer, actions } = productSlice
export const {
  respondPending,
  respondFail,
  addProdSuccess,
  deleteProdSuccess,
  getProductsSuccess,
} = actions

export default reducer
