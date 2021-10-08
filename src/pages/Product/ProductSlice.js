import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPending: false,
  productResponse: {},
  productList: [],
  selectedProduct: {},
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
    getSingleProductsSuccess: (state, { payload = {} }) => {
      state.isPending = false
      state.selectedProduct = payload.products
    },
    resetSingleProductsSuccess: (state) => {
      state.isPending = false
      state.selectedProduct = {}
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
  resetSingleProductsSuccess,
  getSingleProductsSuccess,
} = actions

export default reducer
