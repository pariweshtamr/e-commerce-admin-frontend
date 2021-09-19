import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    categoryResponse: {},
    categories: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        catRequestPending: state =>{
            state.isLoading = true
        },

        catResponseSuccess: (state, {payload})=>{
            state.isLoading = false
            state.categoryResponse = payload
        }, 

        fetchCatRespSuccess: (state, {payload})=>{
            state.isLoading = false
            state.categories = payload
        },
        
        catRespReset : (state) =>{
            state.isLoading = false
            state.categoryResponse = {}
        },

        catRequestFail: (state, {payload})=>{
            state.isLoading = false
            state.categoryResponse = payload
        }    
    }
})

const {reducer, actions} = categorySlice

export const {catRequestPending, catResponseSuccess,fetchCatRespSuccess, catRespReset, catRequestFail} = actions

export default reducer