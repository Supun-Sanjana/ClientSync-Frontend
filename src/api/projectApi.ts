import axios from "axios";
import { jwtDecode } from "jwt-decode";


// Get logged-in user ID from JWT
interface TokenPayload {
  id: number;
  email: string;
  name: string;
  user_name: string;
}

interface MyJwt {
  payload: TokenPayload;
  iat: number;
  exp: number;
}

export const getUserId = (): number | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<MyJwt>(token);
    return decoded.payload.id;
  } catch (err) {
    console.log("Token decode error:", err);
    return null;
  }
};



// -----------------------------
// PROJECT APIs
// -----------------------------

export const fetchProjects = async () => {
  const user_id = getUserId();
  if (!user_id) return [];

  const res = await axios.get(import.meta.env.VITE_BACKEND_URL +`/project/user/${user_id}`);
  return res.data.projects;
};


export const saveProject = async (payload: any) => {
  const user_id = getUserId();
  if (!user_id) throw new Error("User not logged in");

  // inject user_id into payload
  const finalPayload = { ...payload, user_id };

  const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"/project", finalPayload);
  return res.data;
};


export const deleteProject = async (id: number) => {
  const user_id = getUserId();
  const res = await axios.delete(import.meta.env.VITE_BACKEND_URL +`/project/${user_id}/${id}`);
  return res.data;
};


// -----------------------------
// DASHBOARD METRICS APIs
// -----------------------------

export const getRevenue = async () => {
  const user_id = getUserId();
  if (!user_id) return 0;

  const res = await axios.get(import.meta.env.VITE_BACKEND_URL +`/project/revenue/${user_id}`);
  // console.log(res.data);
  
  return res.data.revenue; // backend returns { revenue: x }
};


export const getActiveCount = async () => {
  const user_id = getUserId();
  if (!user_id) return { active: 0, complete: 0 };

  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL +`/project/active-count/${user_id}`
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message || error);
    return { active: 0, complete: 0 };
  }
};

//-----------------------------
//update project
//-----------------------------
export const updateProject = async (id: number, payload: any) => {
  const user_id = getUserId();
  console.log(user_id);
  
  const res = await axios.put(import.meta.env.VITE_BACKEND_URL +`/project/${user_id}/${id}`, payload);
  return res.data;
}