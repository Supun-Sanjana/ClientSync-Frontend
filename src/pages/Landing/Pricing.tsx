import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Pricing = () => {
  return (
    <div><section id="pricing" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-slate-400 text-lg">Choose the plan that best fits your team size.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic */}
        <div className="border border-slate-700 p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-slate-400 font-normal">/mo</span></div>
          <p className="text-slate-400 mb-8">Perfect for freelancers and solo entrepreneurs.</p>
          <ul className="space-y-4 mb-8 text-slate-300">
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Up to 1,000 contacts</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Basic reporting</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Email support</li>
          </ul>
          <Link to="/login" className="w-full h-auto py-3  flex items-center justify-center bg-slate-800 text-white rounded-lg border border-slate-600 hover:bg-slate-700 transition font-semibold">Select Plan</Link>
        </div>

        {/* Pro - Highlighted */}
        <div className="border-2 border-indigo-500 p-8 rounded-2xl bg-slate-800 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-900/50">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-400">Professional</h3>
          <div className="text-4xl font-bold mb-6">$49<span className="text-lg text-slate-400 font-normal">/mo</span></div>
          <p className="text-slate-400 mb-8">For growing teams that need automation.</p>
          <ul className="space-y-4 mb-8 text-slate-300">
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Up to 10,000 contacts</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Advanced Analytics</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Marketing Automation</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> 5 Team Members</li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">Select Plan</button>
        </div>

        {/* Enterprise */}
        <div className="border border-slate-700 p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-slate-400 font-normal">/mo</span></div>
          <p className="text-slate-400 mb-8">Custom solutions for large scale organizations.</p>
          <ul className="space-y-4 mb-8 text-slate-300">
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Unlimited contacts</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> Custom integrations</li>
            <li className="flex"><CheckCircle2 size={20} className="text-indigo-400 mr-3" /> 24/7 Priority support</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition font-semibold">Contact Sales</button>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Pricing