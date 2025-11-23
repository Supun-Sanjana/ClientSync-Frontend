// import { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FolderKanban, 
//   PieChart, 
//   Settings, 
//   LogOut, 
//   Bell, 
//   Search, 
//   Menu, 
//   X,
//   MoreVertical,
//   ArrowUpRight,
//   ArrowDownRight,
//   DollarSign,
//   Briefcase,
//   Calendar,
// } from 'lucide-react';
// import { Link } from 'react-router';

// // --- Dummy Data ---

// const statsData = [
//   { 
//     title: "Total Revenue", 
//     value: "$54,239", 
//     trend: "+12.5%", 
//     trendUp: true, 
//     icon: DollarSign, 
//     color: "bg-indigo-100 text-indigo-600" 
//   },
//   { 
//     title: "Total Clients", 
//     value: "1,240", 
//     trend: "+5.2%", 
//     trendUp: true, 
//     icon: Users, 
//     color: "bg-blue-100 text-blue-600" 
//   },
//   { 
//     title: "Active Projects", 
//     value: "45", 
//     trend: "-2.4%", 
//     trendUp: false, 
//     icon: FolderKanban, 
//     color: "bg-orange-100 text-orange-600" 
//   },
//   { 
//     title: "Pending Tasks", 
//     value: "12", 
//     trend: "+8%", 
//     trendUp: true, 
//     icon: Briefcase, 
//     color: "bg-emerald-100 text-emerald-600" 
//   },
// ];

// const recentProjects = [
//   { id: 1, client: "TechFlow Inc.", project: "Website Redesign", budget: "$12,000", status: "In Progress", deadline: "Oct 24, 2025" },
//   { id: 2, client: "Nexus Corp", project: "Mobile App MVP", budget: "$45,000", status: "Completed", deadline: "Oct 12, 2025" },
//   { id: 3, client: "Global Solutions", project: "Marketing Dashboard", budget: "$8,500", status: "Pending", deadline: "Nov 01, 2025" },
//   { id: 4, client: "EcoSystems", project: "Cloud Migration", budget: "$22,000", status: "In Progress", deadline: "Dec 15, 2025" },
//   { id: 5, client: "Urban Designs", project: "Brand Identity", budget: "$4,200", status: "Review", deadline: "Oct 20, 2025" },
// ];

// // --- Sub-Components ---

// const SidebarItem = ({ icon: Icon, text, active }:any) => (
//   <button className={`flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-colors ${active ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
//     <Icon size={20} />
//     <span>{text}</span>
//   </button>
// );

// const StatusBadge = ({ status }:any) => {
//   const styles = {
//     "In Progress": "bg-blue-100 text-blue-700",
//     "Completed": "bg-green-100 text-green-700",
//     "Pending": "bg-yellow-100 text-yellow-700",
//     "Review": "bg-purple-100 text-purple-700",
//   };
//   return (
//     <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100 text-gray-700"}`}>
//       {status}
//     </span>
//   );
// };

// // --- Main Component ---

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-slate-50 overflow-hidden">
      
//       {/* Mobile Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="flex items-center h-16 px-6 border-b border-slate-100">
//           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white mr-3">
//             <span className="font-bold">N</span>
//           </div>
//           <span className="text-xl font-bold text-slate-800">Nexus CRM</span>
//           <button 
//             className="ml-auto lg:hidden text-slate-500" 
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto justify-between flex flex-col">
//           <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4 mt-4">Menu</div>
//           <Link to="/dashboard"><SidebarItem icon={LayoutDashboard} text="Dashboard" /></Link>
//           <Link to="/clients"><SidebarItem icon={Users} text="Clients" /></Link>
          
//           <SidebarItem icon={FolderKanban} text="Projects" />
          
//           <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4 mt-8">System</div>
//           <SidebarItem icon={Settings} text="Settings" />
//           <SidebarItem icon={LogOut} text="Logout" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
        
//         {/* Top Header */}
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//           <button 
//             className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md" 
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>
          
//           <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
//             <div className="relative w-full">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
//                 <Search size={20} />
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search projects, clients..." 
//                 className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm"
//               />
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
//               <Bell size={20} />
//               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
//               <div className="text-right hidden sm:block">
//                 <div className="text-sm font-medium text-slate-900">John Doe</div>
//                 <div className="text-xs text-slate-500">Admin</div>
//               </div>
//               <img 
//                 src="https://i.pravatar.cc/150?img=12" 
//                 alt="Profile" 
//                 className="w-9 h-9 rounded-full border border-slate-200"
//               />
//             </div>
//           </div>
//         </header>

//         {/* Scrollable Content */}
//         <main className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          
//           <div className="mb-8 flex justify-between items-end">
//             <div>
//               <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
//               <p className="text-slate-500 mt-1">Welcome back, here's what's happening today.</p>
//             </div>
//             <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
//               + New Project
//             </button>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {statsData.map((stat, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className={`p-3 rounded-lg ${stat.color}`}>
//                     <stat.icon size={24} />
//                   </div>
//                   <div className={`flex items-center text-sm font-medium ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
//                     {stat.trendUp ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
//                     {stat.trend}
//                   </div>
//                 </div>
//                 <div className="text-slate-500 text-sm font-medium mb-1">{stat.title}</div>
//                 <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
//               </div>
//             ))}
//           </div>

//           {/* Recent Projects Table */}
//           <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
//             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//               <h2 className="text-lg font-bold text-slate-900">Recent Projects</h2>
//               <button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
//                   <tr>
//                     <th className="px-6 py-4">Client</th>
//                     <th className="px-6 py-4">Project</th>
//                     <th className="px-6 py-4">Budget</th>
//                     <th className="px-6 py-4">Status</th>
//                     <th className="px-6 py-4">Deadline</th>
//                     <th className="px-6 py-4"></th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100 text-sm">
//                   {recentProjects.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-50 transition">
//                       <td className="px-6 py-4 font-medium text-slate-900">{item.client}</td>
//                       <td className="px-6 py-4 text-slate-600">{item.project}</td>
//                       <td className="px-6 py-4 text-slate-600">{item.budget}</td>
//                       <td className="px-6 py-4">
//                         <StatusBadge status={item.status} />
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">{item.deadline}</td>
//                       <td className="px-6 py-4 text-right">
//                         <button className="text-slate-400 hover:text-indigo-600">
//                           <MoreVertical size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;