import axios from "axios";
import { useEffect, useState } from "react";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("https://clientsync-production.up.railway.app/");
      setProjects(res.data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading };
}
