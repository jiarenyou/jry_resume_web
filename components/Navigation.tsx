import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { id: 'Home', label: '首页' },
  { id: 'Skills', label: '核心技术栈' },
  { id: 'Projects', label: '精选项目' },
  { id: 'Experience', label: '职业轨迹' },
  { id: 'DigitalPresence', label: '数字足迹' },
  { id: 'Contact', label: '建立连接' }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id.toLowerCase());
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    // 将驼峰命名转换为 kebab-case (例如: DigitalPresence -> digital-presence)
    const kebabId = id.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).substring(1);
    const element = document.getElementById(kebabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/10 py-4 shadow-glow' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Enhanced Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="relative">
            <Terminal className="text-primary" size={24} />
            <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
          </div>
          <div className="font-mono font-bold text-xl tracking-tighter text-white">
            <span className="text-primary">{'<'}</span>DE<span className="text-primary">{'/>'}</span>
          </div>
        </div>

        {/* Enhanced Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group relative px-4 py-2 font-mono text-sm transition-all duration-300 rounded-lg ${
                activeSection === item.id.toLowerCase()
                  ? 'text-primary bg-primary/10 border border-primary/30'
                  : 'text-gray-400 hover:text-primary hover:bg-white/5'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Active indicator */}
              {activeSection === item.id.toLowerCase() && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Mobile Toggle */}
        <button 
          className="md:hidden relative text-white p-2 rounded-lg hover:bg-white/10 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="py-6 px-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`group flex items-center font-mono text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id.toLowerCase()
                      ? 'text-primary bg-primary/10 border border-primary/30'
                      : 'text-gray-300 hover:text-primary hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id.toLowerCase() && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile menu footer */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="font-mono">v2.0</span>
                <span className="font-mono">© 2024</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;