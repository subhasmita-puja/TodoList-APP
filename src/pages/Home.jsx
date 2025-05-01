import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, List, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-900 mb-6 animate-fadeIn">
          Welcome to iTask
        </h1>
        <p className="text-lg text-gray-600 mb-12 animate-fadeIn animation-delay-200">
          Your personal task management solution for increased productivity and organized life.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-300">
            <div className="flex justify-center mb-4">
              <CheckSquare className="h-12 w-12 text-violet-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Easy to Use</h2>
            <p className="text-gray-600">Simple and intuitive interface for managing your daily tasks</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-400">
            <div className="flex justify-center mb-4">
              <List className="h-12 w-12 text-violet-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Stay Organized</h2>
            <p className="text-gray-600">Keep track of all your tasks in one place</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-500">
            <div className="flex justify-center mb-4">
              <Info className="h-12 w-12 text-violet-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-600">Monitor your task completion and stay motivated</p>
          </div>
        </div>

        <Link
          to="/tasks"
          className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 animate-fadeIn animation-delay-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;