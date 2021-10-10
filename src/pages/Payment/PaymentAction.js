import {
  paymentRespPending,
  paymentRespError,
  paymentRespSuccess,
  getPaymentsRespSuccess,
} from './PaymentSlice'

import { addPaymentOption, fetchPaymentOptions } from '../../api/paymentAPI'
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
      return dispatch(fetchPaymentOptions())
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
