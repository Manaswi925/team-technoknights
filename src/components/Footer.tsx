
import { Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">AI Task Allocator</h3>
            <p className="text-gray-400">
              Helping you work smarter through artificial intelligence since 2023.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-400 hover:text-accent transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-400 hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" id="chat-link">
                Chat Now
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@aitaskallocator.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500">
            &copy; 2025 AI Task Allocator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
