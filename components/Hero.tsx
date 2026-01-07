import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = ["大数据开发工程师", "数据挖掘工程师", "AI算法工程化", "数据治理专家"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Enhanced typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextChar = isDeleting
          ? currentRole.substring(0, displayedRole.length - 1)
          : currentRole.substring(0, displayedRole.length + 1);
        setDisplayedRole(nextChar);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  // Simplified GSAP Entrance - 移除浮动图标动画
  useEffect(() => {
    if (window.gsap && heroRef.current) {
      const tl = window.gsap.timeline();

      // System status
      tl.fromTo(heroRef.current.querySelector('.system-init'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );

      // Name with glow effect
      tl.fromTo(titleRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.3"
      );

      // Role text
      tl.fromTo(heroRef.current.querySelector('.role-text'),
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, "-=0.5"
      );

      // Description
      tl.fromTo(heroRef.current.querySelector('.description'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4"
      );

      // Scroll indicator
      tl.fromTo(heroRef.current.querySelector('.scroll-indicator'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2"
      );
    }
  }, []);

  return (
    <section id="home" ref={heroRef} className="h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      {/* 简化背景装饰 - 只保留微妙的渐变光晕 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-5xl z-10">
        {/* 简化系统状态指示 - 更简洁 */}
        <div className="system-init mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-primary/80 text-xs tracking-widest">ONLINE</span>
          </div>
        </div>
        
        {/* Enhanced name with gradient and glow */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight relative"
        >
          <span className="bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent">
            Jia Renyou
          </span>
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10"></div>
        </h1>
        
        {/* Enhanced role display */}
        <div className="role-text h-16 md:h-20 flex items-center justify-center mb-8">
          <div className="relative">
            <span className="text-3xl md:text-5xl font-mono text-gray-400 flex items-center">
              <span className="text-primary mr-2">{'>'}</span>
              <span className="text-white font-semibold">{displayedRole}</span>
              <span className="animate-cursor inline-block w-4 h-10 md:h-12 align-middle ml-3 bg-primary rounded-sm"></span>
            </span>
            {/* Subtle glow behind text */}
            <div className="absolute inset-0 blur-md bg-primary/20 -z-10"></div>
          </div>
        </div>
        
        {/* Enhanced description with better typography */}
        <div className="description max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            IoT大数据平台建设与AI算法工程化落地
            <span className="text-primary mx-2">•</span>
            实时计算流处理、机器学习模型部署、数据治理体系建设
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="px-4 py-2 border border-primary/30 rounded-full text-primary text-sm font-mono">
              5+ 年经验
            </div>
            <div className="px-4 py-2 border border-accent/30 rounded-full text-accent text-sm font-mono">
              大数据开发
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs text-gray-500 font-mono tracking-widest group-hover:text-primary transition-colors">
          滚动探索
        </span>
        <div className="relative">
          <ArrowDown 
            className="text-gray-600 group-hover:text-primary transition-all duration-300 group-hover:translate-y-1" 
            size={24} 
          />
          <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;