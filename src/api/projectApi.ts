import axios from "axios";

export const fetchProjects = async () => {
  const res = await axios.get("https://clientsync-production.up.railway.app/api/project");
  return res.data.projects; // make sure backend returns array
};
