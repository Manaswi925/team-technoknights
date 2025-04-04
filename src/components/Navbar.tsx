
import { useState } from 'react';
import { RocketIcon, Menu, X, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <RocketIcon className="h-7 w-7 text-accent mr-2" />
          <span className="text-2xl font-bold text-white">AllocAI</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link to="/" className="text-white font-medium hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white font-medium hover:text-accent transition-colors flex items-center">
            <LayoutDashboard className="h-4 w-4 mr-1" />
            Dashboard
          </Link>
        </li>
        <li>
          <a href="#features" className="text-white font-medium hover:text-accent transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-white font-medium hover:text-accent transition-colors">
            How It Works
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gradient z-50 p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-white font-medium hover:text-accent transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard" 
                className="text-white font-medium hover:text-accent transition-colors flex items-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
            </li>
            <li>
              <a 
                href="#features" 
                className="text-white font-medium hover:text-accent transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="text-white font-medium hover:text-accent transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white font-medium hover:text-accent transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
