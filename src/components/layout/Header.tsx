
import {  Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const AdminHeader = () => {

  const [addClient, setAddClient ] = useState(false);
  const [addProject, setAddProject ] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/ClientSync logo.png"
          alt="ClientSync"
          className="h-10 w-auto"
        />

        <Link to="/clients">Clients</Link>
        <Link to="/projects">Projects</Link>
      </div>


      {/* Center: Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl w-full max-w-md">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search clients or projects..."
          className="bg-transparent outline-none ml-2 text-sm w-full"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        onClick={()=>setAddClient(true)}
        >
          + Add New Client
        </button>

        <button className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-ingreendigo-700 transition"
        onClick={()=>setAddProject(true)}
        >
          + Add New Project
        </button>

        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <User size={20} className="text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
