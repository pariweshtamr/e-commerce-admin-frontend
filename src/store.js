import {configureStore} from '@reduxjs/toolkit'
import userReducer from './pages/Register/userSlice'
import categoryReducer from './pages/Category/CategorySlice' 

const store = configureStore({
    reducer:{
        user: userReducer,
        category: categoryReducer
    }
})

export default store