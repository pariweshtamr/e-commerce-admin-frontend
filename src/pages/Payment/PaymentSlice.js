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

    deletePaymentsRespSuccess: (state, { payload = {} }) => {
      state.isPending = false
      state.paymentResponse = payload
    },

    resetResponseMsg: (state) => {
      state.isPending = false
      state.paymentResponse = {}
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
  deletePaymentsRespSuccess,
  resetResponseMsg,
  getPaymentsRespSuccess,
} = actions

export default reducer
