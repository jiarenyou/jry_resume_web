import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PlatformIcon from './PlatformIcon';

// 平台数据 - 只包含数字平台，不包含个人联系方式
interface Platform {
  name: string;
  url: string;
  icon: string; // 对应tag_png目录中的文件名
  description: string;
  category: 'blog' | 'social' | 'content';
  color: string;
}

const DigitalPresence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  // 数字平台数据 - 移除了邮箱和电话
  const platforms: Platform[] = [
    {
      name: '个人Blog',
      url: 'https://blog.oteneto.xyz/',
      icon: '个人blog',
      description: '技术博客与思考',
      category: 'blog',
      color: '#7C3AED'
    },
    {
      name: 'CSDN',
      url: 'https://blog.csdn.net/m0_57280180?type=blog',
      icon: 'csdn',
      description: '技术文章分享',
      category: 'blog',
      color: '#1296db'
    },
    {
      name: '知乎',
      url: 'https://www.zhihu.com/people/bei-jie-jiu-de-jiang-ge-77',
      icon: '知乎',
      description: '知识分享平台',
      category: 'social',
      color: '#0066FF'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/V35640700',
      icon: 'X平台',
      description: '社交媒体',
      category: 'social',
      color: '#20e02d'
    },
    {
      name: '微信公众号',
      url: '#',
      icon: '微信公众号',
      description: '为何不是蓝',
      category: 'content',
      color: '#08A128'
    },
    {
      name: '视频号',
      url: '#',
      icon: '视频号',
      description: '为何不是蓝',
      category: 'content',
      color: '#1afa29'
    }
  ];

  // 按类别分组平台
  const platformsByCategory = {
    blog: platforms.filter(p => p.category === 'blog'),
    social: platforms.filter(p => p.category === 'social'),
    content: platforms.filter(p => p.category === 'content')
  };

  // 获取类别标题和描述
  const categoryInfo = {
    blog: {
      title: '技术博客',
      description: '深度技术文章与思考',
      icon: '📝'
    },
    social: {
      title: '社交平台',
      description: '关注我的社交媒体动态',
      icon: '💬'
    },
    content: {
      title: '内容创作',
      description: '视频与图文内容分享',
      icon: '🎬'
    }
  };

  useEffect(() => {
    if (window.gsap && containerRef.current) {
      const platformElements = containerRef.current.querySelectorAll('.platform-card');
      const categoryElements = containerRef.current.querySelectorAll('.category-card');
      
      // 动画化类别卡片
      window.gsap.fromTo(categoryElements,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // 动画化平台卡片
      window.gsap.fromTo(platformElements,
        {
          opacity: 0,
          scale: 0.9,
          y: 15
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.3,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="digital-presence" className="py-24 relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="font-mono text-primary text-xl mr-4">04.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            数字足迹
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            探索我的数字世界，连接各个平台，发现更多精彩内容
          </p>
        </div>

        {/* Platform Grid by Category - Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categoryInfo).map(([category, info]) => (
            <div key={category} className="category-card bg-surface/30 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              {/* Category header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="text-3xl">{info.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{info.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>

              {/* Platform grid for this category */}
              <div className="grid grid-cols-2 gap-4">
                {platformsByCategory[category as keyof typeof platformsByCategory].map((platform, index) => (
                  <div key={index} className="platform-card">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                      onMouseEnter={() => setHoveredPlatform(platform.name)}
                      onMouseLeave={() => setHoveredPlatform(null)}
                    >
                      <div className="relative">
                        {/* Platform icon with enhanced hover effect */}
                        <div className="relative bg-surface/50 border border-white/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 group-hover:shadow-lg group-hover:-translate-y-1">
                          {/* Background gradient on hover */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="aspect-square flex items-center justify-center relative">
                            <PlatformIcon
                              iconName={platform.icon}
                              size="medium"
                              className="transition-transform duration-300 group-hover:scale-110"
                            />
                            
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-300 blur-lg"></div>
                          </div>
                          
                          {/* Enhanced hover indicator */}
                          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                            <div className="bg-primary text-white rounded-full p-1 shadow-lg animate-pulse">
                              <ExternalLink size={10} />
                            </div>
                          </div>
                          
                          {/* Category badge */}
                          <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-70"></div>
                        </div>
                        
                        {/* Enhanced platform name with special highlighting */}
                        <div className="mt-3 text-center">
                          <h4 className={`font-medium text-xs transition-all duration-300 group-hover:font-semibold ${
                            platform.description === '为何不是蓝'
                              ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold'
                              : 'text-white group-hover:text-primary'
                          }`}>
                            {platform.name}
                          </h4>
                          <p className={`text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 ${
                            platform.description === '为何不是蓝'
                              ? 'text-gradient-to-r from-purple-400 to-pink-400 font-semibold'
                              : 'text-gray-500'
                          }`}>
                            {platform.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact information hint */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-surface/30 border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-gray-400 text-sm">
              个人联系方式请查看 <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">联系页面</a>
            </p>
          </div>
        </div>

        {/* Section footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-600 font-mono">
            点击图标访问对应平台 • 网格布局展示
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalPresence;