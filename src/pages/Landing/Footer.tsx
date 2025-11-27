const Footer = () => {
  return (
    <div><footer className="bg-slate-50 py-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="flex items-center">
            <img src="./ClientSync.png" alt="ClientSync logo" className='w-11 h-11' />
            <span className="font-bold text-xl text-slate-900 tracking-tight">ClientSync CRM</span>
          </div>
      </div>
      <div className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} ClientSync CRM Inc. All rights reserved.
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="https://x.com" className="text-slate-400 hover:text-indigo-600 transition"  target='_blank'>Twitter</a>
        <a href="https://linkedin.com/" className="text-slate-400 hover:text-indigo-600 transition" target='_blank'>LinkedIn</a>
        <a href="https://github.com" className="text-slate-400 hover:text-indigo-600 transition"  target='_blank'>GitHub</a>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer