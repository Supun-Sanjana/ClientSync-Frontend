import axios from "axios";

export const fetchProjects = async () => {
  const res = await axios.get("http://localhost:4000/api/project");
  return res.data.projects; // make sure backend returns array
};


export const saveProject = async (payload: any)=>{
  const res= await axios.post("http://localhost:4000/api/project", payload);
  return res.data;
}

export const deleteProject = async (id: number)=>{
  const res= await axios.delete(`http://localhost:4000/api/project/${id}`);
  return res.data;
}

export const getRevenue = async ()=>{
  const sum = await axios.get("http://localhost:4000/api/project/revenue");
  return sum.data.result
}

export const getActiveCount = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/project/active-count");
    // response.data = { active: X, complete: Y }
    return response.data; // return the full object
  } catch (error:any) {
    console.error(error.message || error);
    return { active: 0, complete: 0 }; // fallback
  }
};
