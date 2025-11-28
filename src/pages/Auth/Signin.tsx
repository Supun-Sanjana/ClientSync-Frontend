import { Mail, Lock, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../api/userApi";
import toast from "react-hot-toast";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (email.includes("@") === false) {
      return toast.error("Incorrect email !");
    }

    if (password.length === 0) {
      return toast.error("Incorrect password !");
    }
  };


  const handelSave = async () => {
    setload(true);
    try {
      validate();
      const res = await login({ email, password });

      const token = res.token;
      localStorage.setItem("token", token);
      toast.success("Login Success");
      setload(false);
      navigate("/app/dashboard");
    } catch (error) {
      setload(false);
      return toast.error("email or password incorrect !");
    }
  };
    


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
            <span className="font-bold text-xl text-slate-900">
              ClientSync CRM
            </span>
          </div>

          {/* Header Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-slate-500">
              Enter your details to access your workspace.
            </p>
          </div>

          <form className="space-y-5 p-6 " onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-medium text-gray-700 flex items-center gap-2">
                <Mail size={18} className="text-indigo-600" />
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-gray-50"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="font-medium text-gray-700 flex items-center gap-2">
                <Lock size={18} className="text-indigo-600" />
                Password
              </label>

              <input
                type="Password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-gray-50"
              />

              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}

            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold 
        hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 
        flex items-center justify-center gap-2 group"
              onClick={() => handelSave()}
            >
              {load ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <div className="flex justify-center items-center gap-3">
                  Sign In
                  <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
                </div>
              )}

              
            </button>
          </form>

          <Link
            to="/register"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex justify-center"
          >
            Don't have an account
          </Link>
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
            "ClientSync has completely transformed how we manage our sales
            pipeline."
          </h2>
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div className="text-white font-medium">Sarah Jenning</div>
            <div className="text-indigo-300 text-sm">
              Head of Sales at TechFlow
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4 mt-12 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">2.5x</div>
              <div className="text-indigo-200 text-xs">
                Increase in closed deals
              </div>
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
