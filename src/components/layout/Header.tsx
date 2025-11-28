import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Menu,
  Plus,
  LogOut,
} from "lucide-react";
import ClientAddModel from "../../pages/Clients/ClientAddModel";
import ProjectAddModel from "../../pages/Projects/ProjectAddModel";

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [addClient, setAddClient] = useState(false);
  const [addProject, setAddProject] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: LayoutDashboard },
    { name: "Clients", path: "/app/clients", icon: Users },
    { name: "Projects", path: "/app/projects", icon: FolderKanban },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* --- Mobile Sidebar Overlay --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* --- Sidebar --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center h-16 px-6 border-b border-gray-100">
          <img
            src="/ClientSync logo.png"
            alt="ClientSync"
            className="h-8 w-auto"
          />
        </div>

        {/* Make this container scrollable */}
        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="p-4 space-y-2 flex-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4 mt-2">
              Menu
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="p-4">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors bg-red-500 text-white w-full"
            onClick={()=>handleLogout()}
            >
              <LogOut /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Spacer to push content to right */}
          <div className="flex-1"></div>

          {/* Header Actions (Add Buttons + User) */}
          <div className="flex items-center gap-4">
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm shadow-indigo-200"
              onClick={() => setAddClient(true)}
            >
              <Plus size={16} />
              <span>Add Client</span>
            </button>

            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition shadow-sm shadow-green-200"
              onClick={() => setAddProject(true)}
            >
              <Plus size={16} />
              <span>Add Project</span>
            </button>
          </div>
        </header>

        {/* Page Content Rendered Here */}
        <main className="flex-1 overflow-y-auto bg-slate-50 ">
          <Outlet />
        </main>
      </div>

      {/* --- Modals --- */}
      <ClientAddModel state={addClient} onClose={() => setAddClient(false)} />
      <ProjectAddModel
        state={addProject}
        onClose={() => setAddProject(false)}
      />
    </div>
  );
};

export default AdminHeader;
