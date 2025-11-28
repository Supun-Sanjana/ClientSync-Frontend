import { Home, MoveLeft, FileQuestion } from 'lucide-react';

const NotFound = () => {
  // Placeholder for navigation logic
  // If using react-router-dom: const navigate = useNavigate();
  const goBack = () => window.history.back();
  const goHome = () => window.location.href = '/';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Main Content Card */}
      <div className="max-w-md w-full text-center relative z-10">
        
        {/* Animated Icon/Graphic */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-indigo-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform hover:scale-105 transition-transform duration-300">
            <FileQuestion size={64} className="text-indigo-600" strokeWidth={1.5} />
          </div>
          {/* Decorative small elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center border-4 border-slate-50">
             <span className="text-red-500 font-bold text-lg">?</span>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-black text-slate-200 tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
          404
        </h1>

        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          Page not found
        </h2>
        
        <p className="text-slate-500 mb-8 text-lg leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={goBack}
            className="flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-700 bg-white rounded-xl hover:bg-slate-50 hover:border-slate-300 transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
          >
            <MoveLeft size={18} className="mr-2" />
            Go Back
          </button>
          
          <button 
            onClick={goHome}
            className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium shadow-lg shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            <Home size={18} className="mr-2" />
            Dashboard
          </button>
        </div>

        {/* Support Link */}
        <div className="mt-12 pt-8 border-t border-slate-200/60">
          <p className="text-slate-400 text-sm">
            Need help? <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Contact Support</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFound;