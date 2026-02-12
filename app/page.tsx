'use client';

import { useState } from 'react';
import { Heart, BookOpen, Palette, GraduationCap, Instagram, Facebook, Mail, MapPin, Calendar } from 'lucide-react';
import { FloatingShapes } from '@/components/FloatingShapes';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    suburb: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mock form submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', childAge: '', suburb: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 md:mb-12 flex justify-center">
            <img 
              src="/logo.svg" 
              alt="Hide N Seek Child Care" 
              className="w-72 md:w-[450px] h-auto drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-purple-700 font-bold">
            Something Special is Coming Soon!
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A fun, safe and nurturing space where little minds grow, play, and explore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToForm} className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
              Join the Waitlist
            </button>
            <button onClick={scrollToForm} className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
              Get Updates
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-8 text-purple-700 font-bold">
            Where Play Meets Learning
          </h2>
          
          <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
            At Hide N Seek Child Care, we believe every child deserves a safe, inspiring environment to grow. 
            Our early learning programs focus on creativity, confidence, social skills, and school readiness — 
            all through structured play and guided exploration.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Safe & Secure Environment</h3>
              <p className="text-gray-600">Your child&apos;s safety is our top priority</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Early Learning Programs</h3>
              <p className="text-gray-600">Curriculum designed for young minds</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Creative Play Activities</h3>
              <p className="text-gray-600">Imagination and exploration every day</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">Qualified & Caring Educators</h3>
              <p className="text-gray-600">Experienced staff who truly care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Section */}
      <section className="relative px-4 py-16 md:py-24 bg-white/40" id="signup-form">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-purple-700 font-bold">
            Be the First to Know!
          </h2>
          
          <p className="text-lg text-center text-gray-700 mb-10">
            Leave your details below and we&apos;ll notify you when enrolments open.
          </p>
          
          {submitted ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-green-800 mb-2 font-semibold">Thank You!</h3>
              <p className="text-green-700">We&apos;ll be in touch soon with exciting updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2 font-medium">
                    Parent Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-800 mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800"
                    placeholder="0400 000 000"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="childAge" className="block text-gray-800 mb-2 font-medium">
                      Child&apos;s Age *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800"
                    >
                      <option value="">Select age</option>
                      <option value="0-12 months">0-12 months</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-4 years">3-4 years</option>
                      <option value="4-5 years">4-5 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="suburb" className="block text-gray-800 mb-2 font-medium">
                      Suburb *
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      required
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800"
                      placeholder="Your suburb"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl mt-6"
                >
                  Notify Me
                </button>
                
                <p className="text-sm text-gray-600 text-center mt-4">
                  🔒 We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Location Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-10 text-purple-700 font-bold">
            Opening Soon in Your Area
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">Location</h3>
                <p className="text-gray-600">Details Coming Soon</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">Opening Date</h3>
                <p className="text-gray-600">Coming 2026</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">Contact</h3>
                <p className="text-gray-600">info@hidenseekcare.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/logo.svg" 
              alt="Hide N Seek Child Care" 
              className="w-48 mb-6 drop-shadow-lg"
            />
            
            <div className="flex gap-6 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="mailto:info@hidenseekcare.com"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-purple-200 mb-2">info@hidenseekcare.com</p>
            <p className="text-purple-300 text-sm">
              © 2026 Hide N Seek Child Care. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
