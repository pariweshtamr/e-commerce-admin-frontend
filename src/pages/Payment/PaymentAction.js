import {
  paymentRespPending,
  paymentRespError,
  paymentRespSuccess,
  deletePaymentsRespSuccess,
  getPaymentsRespSuccess,
} from './PaymentSlice'

import {
  addPaymentOption,
  fetchPaymentOptions,
  deletePaymentOption,
  updatePaymentOption,
} from '../../api/paymentAPI'
import { updateAccessJWT } from '../../api/tokenAPI'
import { userLogout } from '../admin-auth-slice/userAction'

export const addNewPaymentOption = (obj) => async (dispatch) => {
  dispatch(paymentRespPending())

  //call api
  const data = await addPaymentOption(obj)

  // re-auth
  if (data?.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(addNewPaymentOption(obj))
    } else {
      dispatch(userLogout())
    }
  }
  // end re-auth

  if (data?.status === 'success') {
    dispatch(paymentRespSuccess(data))
    dispatch(getPaymentOptions())
    return
  }
  dispatch(paymentRespError(data))
}

export const udatePaymentOptionAction = (obj) => async (dispatch) => {
  dispatch(paymentRespPending())

  //call api
  const data = await updatePaymentOption(obj)

  // re-auth
  if (data?.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(udatePaymentOptionAction(obj))
    } else {
      dispatch(userLogout())
    }
  }
  // end re-auth

  if (data?.status === 'success') {
    dispatch(paymentRespSuccess(data))
    dispatch(getPaymentOptions())
    return
  }
  dispatch(paymentRespError(data))
}

export const getPaymentOptions = () => async (dispatch) => {
  dispatch(paymentRespPending())

  //call api
  const data = await fetchPaymentOptions()

  // re-auth
  if (data?.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(getPaymentOptions())
    } else {
      dispatch(userLogout())
    }
  }
  // end re-auth

  if (data?.status === 'success') {
    dispatch(getPaymentsRespSuccess(data.options))
    return
  }
  dispatch(paymentRespError(data))
}

export const deletePaymentOptionsAction = (_id) => async (dispatch) => {
  dispatch(paymentRespPending())

  //call api
  const data = await deletePaymentOption(_id)

  // re-auth
  if (data?.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(deletePaymentOptionsAction())
    } else {
      dispatch(userLogout())
    }
  }
  // end re-auth

  if (data?.status === 'success') {
    dispatch(deletePaymentsRespSuccess(data))
    dispatch(getPaymentOptions())
    return
  }
  dispatch(paymentRespError(data))
}
