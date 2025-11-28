import axios from "axios"

export const login = async(data:any)=>{
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"/user/login",data)
    return res.data
}

export const register = async (data: any) => {
  try {
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"/user/register",
      data
    );
    return res.data;

  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
