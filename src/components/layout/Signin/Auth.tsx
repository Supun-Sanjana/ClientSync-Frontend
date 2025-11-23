import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Zap,
  Github,
  Chrome // Using Chrome icon as a proxy for Google logo
} from 'lucide-react';

// --- Reusable Components ---

const SocialButton = ({ icon: Icon, label }: any) => (
  <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition text-slate-600 font-medium text-sm">
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

const InputField = ({ label, type, placeholder, icon: Icon, isPassword = false }:any) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <Icon size={18} />
        </div>
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition duration-200"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

// --- Main Auth Component ---

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex bg-slate-50">
      
      {/* Left Side - Form Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <span className="bg-indigo-600 p-2 rounded-lg text-white">
              <Zap size={20} fill="currentColor" />
            </span>
            <span className="font-bold text-xl text-slate-900">ClientSync CRM</span>
          </div>

          {/* Header Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="mt-2 text-slate-500">
              {isLogin 
                ? 'Enter your details to access your workspace.' 
                : 'Start your 14-day free trial today.'}
            </p>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <SocialButton icon={Chrome} label="Google" />
            <SocialButton icon={Github} label="GitHub" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {!isLogin && (
              <InputField 
                label="Full Name" 
                type="text" 
                placeholder="John Doe" 
                icon={User} 
              />
            )}
            
            <InputField 
              label="Email Address" 
              type="email" 
              placeholder="name@company.com" 
              icon={Mail} 
            />
            
            <div className="space-y-1.5">
              <InputField 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                icon={Lock} 
                isPassword 
              />
              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            <button className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
              {isLogin ? 'Sign In' : 'Get Started'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Toggle Login/Register */}
          <p className="text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-indigo-600 hover:text-indigo-500 transition"
            >
              {isLogin ? 'Sign up for free' : 'Log in'}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Visual (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-indigo-900 relative overflow-hidden items-center justify-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-lg px-8 text-center">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-800 text-indigo-300 shadow-inner ring-1 ring-white/10">
            <Zap size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
            "ClientSync has completely transformed how we manage our sales pipeline."
          </h2>
          <div className="flex flex-col items-center space-y-2">
            <img 
              src="https://i.pravatar.cc/150?img=32" 
              alt="User" 
              className="w-12 h-12 rounded-full border-2 border-white/20" 
            />
            <div className="text-white font-medium">Sarah Jenning</div>
            <div className="text-indigo-300 text-sm">Head of Sales at TechFlow</div>
          </div>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4 mt-12 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">2.5x</div>
              <div className="text-indigo-200 text-xs">Increase in closed deals</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-indigo-200 text-xs">Team adoption rate</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}