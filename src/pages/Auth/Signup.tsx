import {
  ArrowRight,
  AtSign,
  Lock,
  Mail,
  User,
  Zap,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { register } from "../../api/userApi";

const Signup = () => {
  const [full_name, setFullName] = useState("");
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
    const [load, setload] = useState(false);

  const navigate = useNavigate();

  const isPasswordMatch = password === confirmPassword;

  const isFormValid =
    full_name &&
    user_name &&
    email &&
    password &&
    confirmPassword &&
    isPasswordMatch;

  const handelSave = async () => {
    setload(true);
    if (!full_name || !user_name || !email || !password || !confirmPassword) {
      return toast.error("All fields are required");
    }

    if(email.includes("@") === false){
      return toast.error("Invalid email");
      
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await register({ full_name, user_name, email, password });
      if (res) {
        navigate("/login");
      }
      setload(false);
      console.log(res.data);
    } catch (error: any) {
      setload(false);
      console.log(error.mesage || error);
      toast.error(error.message); 
    }
  };

  return (
    <div>
      <div className="min-h-screen flex bg-slate-50">
        {/* Left Side - Visual (Hidden on Mobile) */}
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
                <div className="text-indigo-200 text-xs">
                  Team adoption rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-white">
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

            {/* Form */}
            <form
              className="space-y-6 p-2 "
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <div className="flex justify-between gap-6">
                <div className="space-y-1.5">
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <User size={18} className="text-indigo-600" />
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 
                     bg-gray-50 focus:border-indigo-500 focus:ring-2 
                     focus:ring-indigo-300 outline-none transition"
                  />
                </div>

                {/* Username */}
                <div className="space-y-1.5">
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <AtSign size={18} className="text-indigo-600" />
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="johndoe123"
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 
                     bg-gray-50 focus:border-indigo-500 focus:ring-2 
                     focus:ring-indigo-300 outline-none transition"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="font-medium text-gray-700 flex items-center gap-2">
                  <Mail size={18} className="text-indigo-600" />
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="name@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 
                     bg-gray-50 focus:border-indigo-500 focus:ring-2 
                     focus:ring-indigo-300 outline-none transition"
                />
              </div>

              {/* Password */}
              <div className="flex gap-6">
                {/* Password */}
                <div className="space-y-1.5 w-full">
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <Lock size={18} className="text-indigo-600" />
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        
                      }}
                      className={`w-full px-4 py-3 rounded-xl border pr-12
          ${
            !isPasswordMatch && confirmPassword
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-gray-50"
          }
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition`}
                    />

                    {/* Show / Hide Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5 w-full">
                  <label className="font-medium text-gray-700 flex items-center gap-2">
                    <Lock size={18} className="text-indigo-600" />
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border pr-12
          ${
            !isPasswordMatch && confirmPassword
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-gray-50"
          }
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition`}
                    />

                    {/* Show / Hide Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-600"
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Live Error Message */}
                  {!isPasswordMatch && confirmPassword && (
                    <p className="text-sm text-red-600 font-medium mt-1">
                      Passwords do not match
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={!isFormValid}
                onClick={handelSave}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 group transition
    ${
      isFormValid
        ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
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
              to="/login"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex justify-center"
            >
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
