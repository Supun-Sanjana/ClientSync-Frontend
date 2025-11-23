import React, { useEffect, useState } from "react";
import { deleteProject, fetchProjects } from "../../../api/projectApi";
import { Edit2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useProjectContext } from "../../../context/ProjectContext";
import { Spinner } from "../../Spinner";
import { ErrorMessage } from "../../ErrorMessage";

interface Project {
  id: number;
  client_id: number;
  title: string;
  description: string;
  status: string;
  cost: string;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
}

const ProjectTable = () => {
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

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="p-6 h-screen bg-gray-900">
        {/* Changed text color to white */}
        <h1 className="text-2xl font-bold mb-6 text-white">Projects</h1>

        {/* Changed border to dark gray and background to gray-800 */}
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700 bg-gray-800">
          <table className="min-w-full divide-y divide-gray-700">
            {/* Changed header bg to gray-700 */}
            <thead className="bg-gray-700">
              <tr>
                {/* Changed th text color to gray-300 */}
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Client ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>

                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Budget
                </th>

                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  End Date
                </th>

                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            {projects.length > 0 ? (
              // Changed divide color and body background
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {projects.map((project, index) => (
                  <tr
                    key={project.id}
                    className={
                      // Adjusted zebra striping for dark mode
                      index % 2 === 0
                        ? "bg-gray-800 hover:bg-gray-700/50"
                        : "bg-gray-800/50 hover:bg-gray-700/50"
                    }
                  >
                    {/* Changed td text color to gray-300 */}
                    <td className="px-4 py-2 text-sm text-gray-300">
                      {project.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300">
                      {project.client_id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300 font-medium text-white">
                      {project.title}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300 capitalize">
                      {/* You might want a badge here later, but text is updated for now */}
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-700 text-gray-300">
                         {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300 capitalize">
                      $ {project.cost}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300">
                      {start_date || "-"}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300">
                      {project.end_date || "-"}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300">
                      <div className="flex gap-2">
                        <button className="cursor-pointer p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
                          <Edit2 size={16} />
                        </button>
                        <button
                          className="cursor-pointer p-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition"
                          onClick={() => handelDelete(project.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-400">
                    No Projects available
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ProjectTable;