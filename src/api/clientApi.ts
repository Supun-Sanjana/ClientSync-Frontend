import axios from "axios";

export const fetchClients = async () => {
  const res = await axios.get("http://localhost:4000/api/client");
  return res.data; // make sure backend returns array
};
