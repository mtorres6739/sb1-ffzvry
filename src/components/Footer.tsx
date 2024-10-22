import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://d1yei2z3i6k35z.cloudfront.net/3930562/65807f2e140e1_Revattitude650x200-flat-white.png" 
              alt="RevAttitude Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm">Helping businesses manage and improve their Google reviews since 2023.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><a href="#services" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="text-sm hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Affiliate Program</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Client Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://reviews.revattitude.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">Client Portal</a></li>
              <li><a href="https://billing.stripe.com/p/login/cN2dSxaVa8ZK12MaEE" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">Billing Portal</a></li>
              <li><a href="#contact" className="text-sm hover:text-blue-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-l-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2023 RevAttitude. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/terms" className="text-sm hover:text-blue-400 mr-4">Terms and Conditions</Link>
            <Link to="/privacy" className="text-sm hover:text-blue-400 mr-4">Privacy Policy</Link>
            <Link to="/cookies" className="text-sm hover:text-blue-400">Cookie Declaration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;