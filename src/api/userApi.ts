import axios from "axios"

export const login = async(data:any)=>{
    const res = await axios.post("http://localhost:4000/api/user/login",data)
    return res.data
}