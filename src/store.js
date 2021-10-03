import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/admin-auth-slice/userSlice'
import categoryReducer from './pages/Category/CategorySlice'
import productRouter from './pages/Product/ProductSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productRouter,
  },
})

export default store
