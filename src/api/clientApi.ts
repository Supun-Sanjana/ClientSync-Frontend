import axios from "axios";
import { getUserId } from "./projectApi";

// -------------------------------------------
// GET ALL CLIENTS
// -------------------------------------------
export const fetchClients = async () => {
  const user_id = getUserId();

  try {
    const res = await axios.get(import.meta.env.VITE_BACKEND_URL +`/client/${user_id}`);
    // console.log(res.data);
    
    return res.data;  // FIX: return the array
  } catch (err) {
    console.log("Fetch clients error:", err);
    return [];
  }
};

// -------------------------------------------
// CREATE / SAVE CLIENT
// -------------------------------------------
export const saveClient = async ({ firstName, lastName, email, phone, company }: any) => {
  const user_id = getUserId();
  console.log("Saving client with user_id =", user_id);


  const cleanData = {
    first_name: firstName || null,
    last_name: lastName || null,
    email: email || null,
    phone: phone || null,
    company: company === "" ? null : company,
    user_id: user_id
  };

  try {
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"/client", cleanData);
    return res.data.clients;  // returns inserted client
  } catch (err) {
    console.log("Save client error:", err);
    throw err;
  }
};

// -------------------------------------------
// DELETE CLIENT
// -------------------------------------------
export const deleteClient = async (id: number) => {
  try {
    const res = await axios.delete(import.meta.env.VITE_BACKEND_URL +`/client/${id}`);
    return res.data;
  } catch (err) {
    console.log("Delete client error:", err);
    throw err;
  }
};

// -------------------------------------------
// GET CLIENT COUNT
// -------------------------------------------
export const clientCount = async () => {
  const user_id = getUserId();
  if (!user_id) return 0;

  try {
    const res = await axios.get(import.meta.env.VITE_BACKEND_URL + `/client/count/${user_id}`);
    return Number(res.data.count) || 0;
  } catch (error) {
    console.log("Client count error:", error);
    return 0;
  }
};


// -------------------------------------------
// UPDATE CLIENT
// -------------------------------------------

export const updateClient = async (id: number, payload: any) => {
  console.log(payload);
  
  try {
    const res = await axios.put(import.meta.env.VITE_BACKEND_URL + `/client/${id}`, payload);
    console.log(import.meta.env.VITE_BACKEND_URL);
    return res.data;
  } catch (err) {
    console.log("Update client error:", err);
    throw err;
  }
};