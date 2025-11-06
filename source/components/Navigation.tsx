import { Menu, X, Brain } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#tech-stack', label: 'Technology' },
    { href: '#demo', label: 'Demo' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A2342]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="w-10 h-10 text-[#3DDC97]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC857] rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">BuildVisor</span>
              <div className="text-xs text-[#3DDC97] -mt-1">AI-Powered Planning</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#3DDC97] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="px-6 py-2.5 bg-gradient-to-r from-[#3DDC97] to-[#2BA87B] text-[#0A2342] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#3DDC97]/50 transition-all duration-300"
            >
              Try Demo
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-[#0A2342]/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-white/80 hover:text-[#3DDC97] hover:bg-white/5 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="block mx-4 px-6 py-2.5 bg-gradient-to-r from-[#3DDC97] to-[#2BA87B] text-[#0A2342] font-semibold rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
