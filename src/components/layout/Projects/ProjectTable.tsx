import React, { useEffect, useState } from "react";
import { deleteProject, fetchProjects } from "../../../api/projectApi";
import { Edit2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useProjectContext } from "../../../context/ProjectContext";

interface Project {
  id: number;
  client_id: number;
  title: string;
  description: string;
  status: string;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
}

const ProjectTable: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const start_date = new Date().toISOString().split("T")[0];

  const { refreshProjects } = useProjectContext();

  const loadProjects = async () => {
    try {
      const res: any = await fetchProjects();
      setProjects(res);
    } catch (err) {
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [refreshProjects]);

  const handelDelete = async (id: number) => {
    try {
      deleteProject(id);
      toast.success("Project deleted successfully");

      const updated = await fetchProjects();
      setProjects(updated);
    } catch (error: any) {
      console.log(error.message || error);
      toast.error(error.message || error);
    }
  };

  if (loading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Projects</h1>

        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Client ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  End Date
                </th>

                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            {projects.length > 0 ? (
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project, index) => (
                  <tr
                    key={project.id}
                    className={
                      index % 2 === 0
                        ? "bg-gray-50 hover:bg-gray-100"
                        : "hover:bg-gray-100"
                    }
                  >
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {project.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {project.client_id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {project.title}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 capitalize">
                      {project.status}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {start_date || "-"}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {project.end_date || "-"}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 transition">
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2"
                        onClick={() => handelDelete(project.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No Projects available
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ProjectTable;
