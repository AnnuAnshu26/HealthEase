"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Heart, Search, Upload, Menu, X, Shield, Clock, Users, ChevronRight, Play } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#f5f6ef] via-[#f8f9f2] to-[#f2f4eb] min-h-screen font-sans">
      {/* Navbar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                Healthease
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">How to use</a>
              <div className="flex items-center space-x-3">
                <a href="/login" className="text-[#7f6b39] hover:text-[#5d4c29] transition-colors font-semibold">
                  Login
                </a>
                <a href="/register" className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
                  Register
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">About Us</a>
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">How to use</a>
                <div className="flex flex-col space-y-2 pt-2">
                  <a href="/login" className="text-[#7f6b39] font-semibold text-left">Login</a>
                  <a href="/register" className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white px-4 py-2 rounded-full text-center">
                    Register
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-[#d6d4b6] to-[#e2e0c3] text-sm rounded-full px-4 py-2 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Health Matters
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  More than Records.
                </h2>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                    It's Your Health Story
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 max-w-lg">
                Transform your healthcare experience with AI-powered insights, seamless record management, and personalized health monitoring.
              </p>

              {/* Enhanced Search Bar */}
              <div className="relative">
                <div className="flex items-center bg-white rounded-2xl p-3 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <input
                    type="text"
                    placeholder="Search your health records..."
                    className="flex-1 outline-none px-4 py-2 text-gray-700 placeholder-gray-400"
                  />
                  <div className="flex items-center space-x-2">
                    <Link href="/register">
                    <button className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white p-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group">
                      <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    </Link>
                    <Link href="/register">
                    <button className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white p-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group">
                      <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7f6b39]/20 to-[#a3b38c]/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://t3.ftcdn.net/jpg/06/44/85/72/360_F_644857286_zVtIH5KLEYR4mhDLcrbPl5ZYnuuUYurA.jpg"
                  alt="Doctor illustration"
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Health Status: Good</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">Heart Rate: 72 BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">HIPAA Compliant</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">24/7 Access</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#e6ebd9] to-[#f0f4e8] px-6 py-3 rounded-full font-medium mb-6 shadow-sm">
              <span className="text-[#7f6b39] font-semibold">WHAT WE OFFER</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Everything you need for better health
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to keep you healthy and informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Health Records for Patients",
                description: "Patients can log in to view appointments, prescriptions, and health alerts — all in one secure, easy-to-use platform.",
                icon: "",
                gradient: "from-[#a3b38c] to-[#8ea278]"
              },
              {
                title: "AI Symptom Chatbot",
                description: "Get instant, personalized advice for minor health issues with our advanced AI chatbot, available 24/7 for your convenience.",
                gradient: "from-[#7f6b39] to-[#6b5a32]"
              },
              {
                title: "Smart Reminders",
                description: "Never miss important health appointments or medications with intelligent, customizable reminders via email and mobile.",
                gradient: "from-[#a3b38c] to-[#8ea278]"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-xl mb-4 text-white">{feature.title}</h4>
                  <p className="text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200 font-semibold flex items-center space-x-2 group-hover:shadow-lg">
                    <span>EXPLORE THIS FEATURE</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to take control of your health?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Healthease with their healthcare management
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/register" className="bg-white text-[#7f6b39] px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2">
              <span>Get Started Free</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#7f6b39] transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#e6ebd9] to-[#f0f4e8] py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                  Healthease
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                More than records. It's your health story. Experience the future of healthcare management.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Company</h4>
              <ul className="space-y-3">
                {['About', 'Contact us', 'Careers', 'Culture', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                {['Getting started', 'Help center', 'Server status', 'Report a bug', 'Chat support'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-bold text-gray-800 mb-4">Contact us</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center space-x-2">
                  <a href="mailto:contact@healthease.com" className="hover:text-[#7f6b39] transition-colors">
                    contact@healthease.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <a href="tel:+914839293013" className="hover:text-[#7f6b39] transition-colors">
                    (+91) 48392-93013
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>New Delhi, India</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Healthease. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}