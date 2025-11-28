import  { useEffect, useState } from "react";
import { deleteProject, fetchProjects } from "../../api/projectApi";
import { Edit2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useProjectContext } from "../../context/ProjectContext";
import { Spinner } from "../../components/Spinner";
import { ErrorMessage } from "../../components/ErrorMessage";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ProjectUpdateModel from "./ProjectUpdateModel";

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

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

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

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="p-6 ">
        {/* Changed text color to white */}
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Projects</h1>

        {/* Changed border to dark gray and background to gray-800 */}
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 bg-gray-800">
          <table className="min-w-full divide-y divide-slate-200">
            {/* Header with slate-50 background */}
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Client ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            {projects.length > 0 ? (
              // Body with white background and slate dividers
              <tbody className="bg-white divide-y divide-slate-200">
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      #{project.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {project.client_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {project.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 capitalize">
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      $ {project.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {project.start_date
                        ? project.start_date.split("T")[0]
                        : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {project.end_date ? project.end_date.split("T")[0] : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex gap-3">
                        <button
                          className="cursor-pointer p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                          onClick={() => {
                            setSelectedProject(project);
                            setShowModal(true);
                          }}
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          onClick={() => setSelectedProjectId(project.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-10 text-slate-400 text-sm"
                  >
                    No Projects available
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <AlertDialog
        open={selectedProjectId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectId(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                if (selectedProjectId !== null) {
                  try {
                    await deleteProject(selectedProjectId);
                    toast.success("Project deleted successfully");
                    const updated = await fetchProjects();
                    setProjects(updated);
                  } catch (err: any) {
                    toast.error(err.message || "Failed to delete project");
                  } finally {
                    setSelectedProjectId(null);
                  }
                }
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ProjectUpdateModel
        state={showModal}
        onClose={() => setShowModal(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectTable;
