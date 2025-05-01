import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Github, Heart, Star, Users, Code, Coffee, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-t-2xl p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckSquare className="h-16 w-16 mr-4" />
            <h1 className="text-5xl font-bold">iTask</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A powerful task management solution designed to boost your productivity
            and organize your life with elegance and simplicity.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 p-12 border-b border-gray-100">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-violet-500" />}
              title="Lightning Fast"
              description="Optimized performance for instant task management"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-violet-500" />}
              title="Works Offline"
              description="Full functionality even without internet connection"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-violet-500" />}
              title="User Friendly"
              description="Intuitive interface for users of all skill levels"
            />
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-4 p-12 bg-gray-50">
            <StatCard number="1000+" label="Active Users" />
            <StatCard number="50k+" label="Tasks Completed" />
            <StatCard number="99.9%" label="Uptime" />
            <StatCard number="4.9" label="User Rating" />
          </div>

          {/* Technology Stack */}
          <div className="p-12">
            <h2 className="text-2xl font-bold text-violet-900 mb-6">Built with Modern Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <TechItem icon={<Code />} name="React" description="Frontend Framework" />
              <TechItem icon={<Coffee />} name="TypeScript" description="Type Safety" />
              <TechItem icon={<Star />} name="Tailwind CSS" description="Styling" />
              <TechItem icon={<Zap />} name="Vite" description="Build Tool" />
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-12 bg-gradient-to-r from-violet-50 to-purple-50 text-center">
            <h2 className="text-3xl font-bold text-violet-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">Join thousands of users who trust iTask for their daily task management</p>
            <Link
              to="/tasks"
              className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Try iTask Now
            </Link>
          </div>

          {/* Footer */}
          <div className="p-8 text-center text-gray-500 text-sm border-t border-gray-100">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> <span>by <strong>Subhasmita Sahoo</strong></span> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-violet-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for statistics cards
const StatCard = ({ number, label }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold text-violet-600 mb-1">{number}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

// Component for technology items
const TechItem = ({ icon, name, description }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-violet-200 transition-colors duration-300">
    <div className="text-violet-500">{icon}</div>
    <div>
      <h4 className="font-semibold text-violet-900">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;