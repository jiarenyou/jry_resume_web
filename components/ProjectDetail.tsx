import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Database, Brain } from 'lucide-react';
import { Project } from '../types';

// 导入项目数据
import { workProjects, personalProjects } from './Projects';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // 查找项目
  const findProject = (id: string): Project | undefined => {
    const allProjects = [...workProjects, ...personalProjects];
    return allProjects.find(project => project.title === id);
  };

  const project = findProject(projectId || '');

  useEffect(() => {
    if (window.gsap && containerRef.current) {
      // 页面进入动画
      window.gsap.fromTo(containerRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // 内容元素动画
      const elements = containerRef.current.querySelectorAll('.animate-element');
      window.gsap.fromTo(elements,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">项目未找到</h1>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft size={16} />
            返回主页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface to-surface/50">
      {/* 背景装饰 */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12" ref={containerRef}>
        {/* 返回按钮 */}
        <div className="mb-8 animate-element">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={16} />
            返回项目列表
          </button>
        </div>

        {/* 项目头部 */}
        <div className="bg-surface/50 border border-white/10 rounded-2xl p-8 mb-8 animate-element">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 bg-gradient-to-br ${
                project.category === 'personal'
                  ? 'from-primary/10 to-primary/5 border-primary/20'
                  : 'from-accent/10 to-accent/5 border-accent/20'
              } rounded-xl border`}>
                {project.category === 'personal' ? (
                  <Brain size={24} className="text-primary" />
                ) : (
                  <Database size={24} className="text-accent" />
                )}
              </div>
              <div>
                <h1 className={`text-3xl font-bold mb-2 ${
                  project.category === 'personal' ? 'text-primary' : 'text-accent'
                }`}>
                  {project.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                    project.category === 'personal' 
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}>
                    {project.category === 'personal' ? '个人项目' : '工作项目'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href={project.link} 
                className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
              <a 
                href={project.link} 
                className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-mono ${
                  project.category === 'personal'
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'bg-accent/10 text-accent border border-accent/20'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 技术栈 */}
          {project.techStack && (
            <div className="mb-6">
              <h3 className="text-sm font-mono text-gray-400 mb-3">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300 border border-white/5"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 成果指标 */}
          {(project.metrics || project.results) && (
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <p className="font-mono text-sm text-primary">
                  {project.metrics || project.results}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* START原则内容 */}
        {project.startContent && (
          <div className="space-y-6 animate-element">
            <h2 className="text-2xl font-bold text-white mb-6">项目详情</h2>
            
            <div className="bg-surface/50 border border-white/10 rounded-2xl p-6">
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">情境 (Situation)</h3>
                  <p className="text-gray-300 leading-relaxed">{project.startContent.situation}</p>
                </div>
                
                <div className="border-l-2 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">任务 (Task)</h3>
                  <p className="text-gray-300 leading-relaxed">{project.startContent.task}</p>
                </div>
                
                <div className="border-l-2 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">行动 (Action)</h3>
                  <p className="text-gray-300 leading-relaxed">{project.startContent.action}</p>
                </div>
                
                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">结果 (Result)</h3>
                  <p className="text-gray-300 leading-relaxed">{project.startContent.result}</p>
                </div>
                
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">收获 (Takeaway)</h3>
                  <p className="text-gray-300 leading-relaxed">{project.startContent.takeaway}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 项目亮点 */}
        {project.highlights && (
          <div className="mt-8 bg-surface/50 border border-white/10 rounded-2xl p-6 animate-element">
            <h3 className="text-lg font-semibold text-white mb-4">项目亮点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-sm font-mono ${
                    project.category === 'personal'
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;