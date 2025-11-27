import { useEffect, useState } from "react";
import {
  fetchProjects,
  getActiveCount,
  getRevenue,
} from "../../api/projectApi";
import { Link } from "react-router";
import { clientCount } from "../../api/clientApi";

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

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [revenue, setRevenue] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [completeProjects, setCompleteProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const loadProjects = async () => {
    try {
      const res: any = await fetchProjects();
      setProjects(res);
    } catch (err) {
      throw new Error("Failed to fetch projects");
    }
  };
  const loadRevenue = async () => {
    const res: any = getRevenue();
    setRevenue(res);
  };

  const loadActiveprojects = async () => {
    const { active, complete } = await getActiveCount();
    setActiveProjects(active);
    setCompleteProjects(complete);
  };

  const loadClient = async () => {
    const count: any = await clientCount();
    setClients(count);
  };

  useEffect(() => {
    loadProjects();
    loadRevenue();
    loadActiveprojects();
    loadClient();
  }, []);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Dashboard Overview
              </h1>
              <p className="text-slate-500 mt-1">
                Welcome back, here's what's happening today.
              </p>
            </div>
          </div>

          {/* --- NEW: Sample Stats Cards (Hardcoded) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Revenue
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    $ {revenue}
                  </h3>
                </div>
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Active Projects
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {activeProjects}
                  </h3>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Completed
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {completeProjects}
                  </h3>
                </div>
                <div className="p-2 bg-green-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">Clients</p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {clients}
                  </h3>
                </div>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* --- END Stats Cards --- */}

          {/* Recent Projects Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex flex-col">
              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
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
                        Deadline
                      </th>
                    </tr>
                  </thead>

                  {projects.length > 0 ? (
                    <tbody className="bg-white divide-y divide-slate-200">
                      {projects.map((project) => (
                        <tr
                          key={project.id}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-slate-900">
                              {project.title}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 capitalize border border-indigo-100">
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            $ {project.cost}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            {project.end_date
                              ? project.end_date.split("T")[0]
                              : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td
                          colSpan={4}
                          className="text-center py-10 text-slate-400 text-sm"
                        >
                          <div className="flex flex-col items-center">
                            <span>No Projects available</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>

              {/* Footer / View All */}
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <Link
                  to="/app/projects"
                  className="text-indigo-600 text-sm font-medium hover:text-indigo-800 hover:underline transition-colors flex items-center gap-1"
                >
                  View All Projects <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
