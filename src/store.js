import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/admin-auth-slice/userSlice'
import categoryReducer from './pages/Category/CategorySlice'
import productReducer from './pages/Product/ProductSlice'
import paymentReducer from './pages/Payment/PaymentSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    payment: paymentReducer,
  },
})

export default store
