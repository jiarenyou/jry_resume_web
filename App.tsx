import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import DigitalPresence from './components/DigitalPresence';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

// 主页面组件
const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen text-gray-300">
      <Background />
      <Navigation />
      
      <main className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <DigitalPresence />
        <Contact />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;