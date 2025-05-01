import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Github, Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-violet-900 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <CheckSquare className="h-6 w-6" />
              <span className="text-xl font-bold">iTask</span>
            </Link>
            <p className="text-violet-200 text-sm">
              Simplify your life with our intuitive task management solution. Stay organized, focused, and productive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-violet-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/tasks" className="text-violet-200 hover:text-white transition-colors">Tasks</Link>
              </li>
              <li>
                <Link to="/about" className="text-violet-200 hover:text-white transition-colors">About</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-violet-200">
                <Mail className="h-4 w-4" />
                <span>support@itask.com</span>
              </li>
              <li className="flex items-center space-x-2 text-violet-200">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-violet-200">
                <MapPin className="h-4 w-4" />
                <span>123 Task Street, TO</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-violet-800 text-white placeholder-violet-300 border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-violet-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-violet-200 text-sm">
              © {currentYear} iTask. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-violet-200 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
             <span>by <strong>Subhasmita Sahoo</strong></span> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;