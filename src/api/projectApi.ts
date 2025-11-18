import axios from "axios";

export const fetchProjects = async () => {
  const res = await axios.get("http://localhost:4000/api/project");
  return res.data.projects; // make sure backend returns array
};
