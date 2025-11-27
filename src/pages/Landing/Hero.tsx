import { ArrowRight, CheckCircle2 } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div><section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
          New v2.0 is live
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Build deeper <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            customer bonds.
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Manage leads, track interactions, and automate your sales pipeline with the CRM built for modern high-growth teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 flex items-center justify-center">
            Start Free Trial <ArrowRight className="ml-2" size={18} />
          </button>
          <button className="bg-white text-slate-700 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition flex items-center justify-center">
            View Demo
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center md:justify-start space-x-4 text-sm text-slate-500">
          <span className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-1" /> No credit card</span>
          <span className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-1" /> 14-day trial</span>
        </div>
      </div>

      {/* Abstract Dashboard Graphic */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 transform md:rotate-y-12 md:skew-y-2 hover:transform-none transition duration-700 ease-out">
           {/* Mock UI Header */}
           <div className="flex items-center space-x-2 border-b border-gray-100 pb-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
           </div>
           {/* Mock UI Content */}
           <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <div className="text-indigo-400 text-xs font-bold uppercase mb-1">Total Revenue</div>
                <div className="text-2xl font-bold text-indigo-900">$124,500</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="text-purple-400 text-xs font-bold uppercase mb-1">New Leads</div>
                <div className="text-2xl font-bold text-purple-900">+450</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <div className="text-emerald-400 text-xs font-bold uppercase mb-1">Conversion</div>
                <div className="text-2xl font-bold text-emerald-900">22.4%</div>
              </div>
           </div>
           <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-indigo-100 rounded-full"></div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Hero