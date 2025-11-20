import axios from "axios";

export const fetchClients = async () => {
  const res = await axios.get("http://localhost:4000/api/client");
  return res.data; // make sure backend returns array
};


export const saveClient = async ({firstName, lastName, email, phone, company}: any) => {

  const cleanData = {
    first_name: firstName || null,
    last_name: lastName || null,
    email: email || null,
    phone: phone || null,
    company: company === "" ? null : company,
  };

  const res = await axios.post("http://localhost:4000/api/client", cleanData);
  return res;
};
