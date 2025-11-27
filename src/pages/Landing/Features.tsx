import { BarChart3, CheckCircle2, Globe, ShieldCheck, Users, Zap } from "lucide-react";

const FeatureCard = ({ icon, title, desc }:any) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group">
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-3">Features</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to grow</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<BarChart3 size={28} />}
          title="Advanced Analytics"
          desc="Gain insights into your sales performance with real-time dashboards and customizable reports."
        />
        <FeatureCard 
          icon={<Users size={28} />}
          title="Lead Management"
          desc="Track every interaction from first contact to closed deal. Never let a lead slip through the cracks."
        />
        <FeatureCard 
          icon={<Zap size={28} />}
          title="Workflow Automation"
          desc="Automate repetitive tasks like email follow-ups and data entry to focus on closing deals."
        />
        <FeatureCard 
          icon={<Globe size={28} />}
          title="Remote Ready"
          desc="Access your data from anywhere. Our cloud-first approach ensures your team stays synced."
        />
        <FeatureCard 
          icon={<ShieldCheck size={28} />}
          title="Enterprise Security"
          desc="Bank-grade encryption and role-based access control to keep your customer data safe."
        />
        <FeatureCard 
          icon={<CheckCircle2 size={28} />}
          title="Seamless Integration"
          desc="Connects with your favorite tools like Slack, Gmail, Outlook, and Mailchimp in seconds."
        />
      </div>
    </div>
  </section>
);

export default Features;