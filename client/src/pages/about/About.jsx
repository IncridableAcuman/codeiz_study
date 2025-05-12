import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-6 py-10 md:px-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600">I'm passionate about delivering quality education through modern, interactive and accessible platforms. At E-Study, I help learners succeed and grow their skills in an engaging environment.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
        <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
          <GraduationCap size={40} className="mx-auto mb-3 text-indigo-500" />
          <h2 className="text-xl font-semibold">5+ Years Experience</h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
          <Users size={40} className="mx-auto mb-3 text-teal-500" />
          <h2 className="text-xl font-semibold">10K+ Students</h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
          <BookOpen size={40} className="mx-auto mb-3 text-rose-500" />
          <h2 className="text-xl font-semibold">30+ Courses</h2>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a href="/courses" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
          Explore My Courses
        </a>
      </div>
    </div>    
    </>

  );
};

export default About;
