import axios from 'axios'

const rootUrl = process.env.NODE_ENV === "production" ? process.env.ROOT_URL : "http://localhost:8000/api/v1"
const userApi = rootUrl + "/user"

export const createUser = async newUser => {
    try {
        const {data} = await axios.post(userApi, newUser)
        return data
        
    } catch (error) {
        console.log(error)
        return{
            status: "error",
            message: error.message,
        }
    }
}