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