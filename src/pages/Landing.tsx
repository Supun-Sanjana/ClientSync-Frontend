import React from "react";
import Navbar from "../components/layout/Landing/Navbar";
import Hero from "../components/layout/Landing/Hero";
import Pricing from "../components/layout/Landing/Pricing";
import Footer from "../components/layout/Landing/Footer";
import Features from "../components/layout/Landing/Features";
import { Link } from "react-router";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your sales?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Join 10,000+ teams organizing their business with Nexus.
          </p>
          <Link to="/login" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition shadow-lg">
            Start Your Free Trial
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
