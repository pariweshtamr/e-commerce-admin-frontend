import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPending: false,
  paymentResponse: {},
  paymentOptions: [],
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    paymentRespPending: (state) => {
      state.isPending = true
    },

    paymentRespSuccess: (state, { payload = {} }) => {
      state.isPending = false
      state.paymentResponse = payload
    },

    getPaymentsRespSuccess: (state, { payload = [] }) => {
      state.isPending = false
      state.paymentOptions = payload
    },

    paymentRespError: (state, { payload }) => {
      state.isPending = false
      state.paymentResponse = payload
    },
  },
})

const { reducer, actions } = paymentSlice

export const {
  paymentRespPending,
  paymentRespError,
  paymentRespSuccess,
  getPaymentsRespSuccess,
} = actions

export default reducer
