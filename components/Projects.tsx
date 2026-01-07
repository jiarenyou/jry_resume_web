import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, Activity, ArrowRight, Calendar, TrendingUp, Users, Brain, Database, Wind, Heart, MessageSquare, Globe } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

// 个人项目数据 - 精选3个最具代表性的项目
const personalProjects: Project[] = [
  {
    title: "书生模型-端侧小模型论文微调打榜",
    description: "基于书生模型进行端侧小模型微调，在多个基准测试中取得优异成绩，展示深度学习模型优化与端侧部署能力",
    tags: ["深度学习", "模型微调", "端侧部署"],
    link: "https://blog.csdn.net/m0_57280180/article/details/148201393",
    category: "personal",
    results: "多个基准测试优异成绩",
    highlights: ["高精度", "轻量化", "端侧优化"],
    techStack: ["pytorch", "transformers", "deep-learning"]
  },
  {
    title: "情感评分预测",
    description: "基于深度学习模型的文本情感评分预测系统，实现实时预测与多维度分析",
    tags: ["NLP", "深度学习", "情感分析"],
    link: "https://www.heywhale.com/mw/project/68e2177ff8427fd80fdc8d37",
    category: "personal",
    results: "准确率达到85%以上",
    highlights: ["高准确率", "实时预测", "多维度分析"],
    techStack: ["python", "tensorflow", "nlp"]
  },
  {
    title: "空气质量预测（PM2.5）",
    description: "基于LSTM时间序列模型的空气质量预测系统，整合历史数据与环境因素进行精准预测",
    tags: ["时间序列", "环境监测", "数据预测"],
    link: "https://www.heywhale.com/mw/project/68d62b945e38844ead0050db",
    category: "personal",
    results: "预测精度行业领先",
    highlights: ["时序建模", "数据驱动", "预测精度"],
    techStack: ["python", "lstm", "pandas", "time-series"]
  }
];

// 工作项目数据
const workProjects: Project[] = [
  {
    title: "空调端云协同MPC智能控温系统",
    description: "基于深度学习的空调智能控温系统，采用端云协同架构替代传统PID算法，实现千房千面精准控温",
    tags: ["深度学习", "实时计算", "IoT"],
    link: "#",
    category: "work",
    highlights: ["节能15%", "控温精度提升15%", "A1类项目"],
    techStack: ["Spark", "Kafka", "Flink", "Docker", "K8s"],
    metrics: "控温精度提升15% • 节能15% • 稳定性99.9%",
    startContent: {
      situation: "传统空调控温采用PID算法存在控温不稳定、能耗高的问题。MPC深度学习算法能够实现更精准的控温效果，但端侧部署成本过高",
      task: "采用端云协同架构，实现千房千面的个性化控温方案，降低端侧部署成本，实现实时控温",
      action: "设计实时数据管道，实现IOT数据到模型推理的端到端延迟<500ms；开发Spark分布式训练任务；优化Kafka分区策略；实现模型版本管理与灰度发布",
      result: "控温精度提升15%，同等舒适性下节能效果达15%；系统稳定性达99.9%，支持10万+设备并发接入；获评公司A1类重点项目",
      takeaway: "掌握了端云协同架构设计和大规模实时数据处理技术，理解了AI算法工程化落地的完整链路"
    }
  },
  {
    title: "空调冷媒泄露智能检测系统",
    description: "基于机器学习的空调冷媒泄露检测系统，实现售后服务智能化升级",
    tags: ["机器学习", "异常检测", "AWS"],
    link: "#",
    category: "work",
    highlights: ["准确率82%", "成本降低60%", "覆盖5万+设备"],
    techStack: ["XGBoost", "AWS", "S3", "Glue", "API"],
    metrics: "准确率82% • 成本降低60% • 年节省500万+",
    startContent: {
      situation: "空调冷媒泄露故障导致用户投诉增加，传统人工检测成本高、效率低，无法实现大规模设备实时监控",
      task: "基于机器学习构建智能检测系统，实现冷媒泄露故障的自动识别和早期预警",
      action: "构建时序特征工程，提取温度、压力、电流等20+维特征；设计滑窗处理算法；优化Spark计算性能；开发预测结果规则引擎",
      result: "模型准确率达82%，较基线模型提升15%；减少人工检测成本60%，售后服务效率提升3倍；覆盖海外市场5万+设备，年节省运维成本500万+",
      takeaway: "获得了时序数据分析和异常检测的实践经验，掌握了大规模设备预测性维护技术"
    }
  },
  {
    title: "冰箱健康度综合评价系统",
    description: "构建冰箱设备健康度评价体系，实现故障预警与寿命预测",
    tags: ["XGBoost", "数据分析", "专利"],
    link: "#",
    category: "work",
    highlights: ["163个指标", "准确率69%", "专利1篇"],
    techStack: ["XGBoost", "Python", "Spark", "数据融合"],
    metrics: "163个指标 • 准确率69% • 专利1篇",
    startContent: {
      situation: "缺乏系统化的冰箱健康状态评估体系，用户无法及时了解设备状况，导致意外故障和保修成本增加",
      task: "构建多维度健康度评价体系，实现故障预警与寿命预测，为产品保修策略提供数据支撑",
      action: "牵头制定健康度评价标准，建立行业首个冰箱健康度评价体系；设计163个健康度指标分3层递进式评价；开发离线特征工程处理多源异构数据；设计模型评估方案",
      result: "模型平均准确率69%，故障预测准确率75%+；产出国家专利1项，提升公司技术影响力；为产品保修策略提供数据支撑，预计年节省成本300万+",
      takeaway: "掌握了多源数据融合和综合评价模型的设计经验，理解了智能家电健康管理技术的核心要点"
    }
  },
  {
    title: "冰箱控制逻辑优化项目",
    description: "基于数据分析的冰箱电控逻辑优化，通过数据挖掘提升控温性能",
    tags: ["数据分析", "A/B测试", "优化"],
    link: "#",
    category: "work",
    highlights: ["温差缩小1-2℃", "零硬件成本", "可复制推广"],
    techStack: ["Hadoop", "Python", "统计分析", "A/B测试"],
    metrics: "温差缩小1-2℃ • 降温速率提升5% • 零硬件成本",
    startContent: {
      situation: "冰箱控温性能存在波动，用户反馈温差范围较大，影响使用体验，需要通过数据分析优化电控逻辑",
      task: "通过大数据分析识别温度波动关键影响因素，提出电控逻辑优化建议并验证效果",
      action: "设计数据采集方案，确保数据代表性与完整性；开展控温性能分析；提出电控逻辑优化建议；组织实验验证方案效果",
      result: "温差范围缩小1-2℃，控温精度提升20%；降温速率提升5%，用户满意度提升15%；零硬件成本优化，可复制推广至其他产品线",
      takeaway: "掌握了基于数据分析的产品优化方法论，理解了数据驱动决策在产品迭代中的应用"
    }
  },
  {
    title: "Text2SQL智能问答系统",
    description: "基于大模型的自然语言转SQL系统，与火山引擎合作开发，实现业务数据自助查询",
    tags: ["大模型", "NLP", "火山引擎"],
    link: "#",
    category: "work",
    highlights: ["分析效率提升80%", "自然语言查询", "自助分析"],
    techStack: ["LLM", "NLP", "SQL", "API"],
    metrics: "分析效率提升80% • 自然语言查询 • 自助分析",
    startContent: {
      situation: "业务人员需要查询数据但不懂SQL，依赖数据开发人员支持，导致分析效率低下和响应延迟",
      task: "构建基于大模型的Text2SQL系统，实现业务人员用自然语言即可查询数据库",
      action: "与火山引擎合作，基于大语言模型开发Text2SQL系统；设计提示词工程优化SQL生成质量；集成业务数据字典提升查询准确性；开发API接口供业务系统调用",
      result: "实现业务数据自助查询，分析效率提升80%；降低数据开发人员支持工作量；业务人员可快速获得数据洞察",
      takeaway: "掌握了大模型在企业应用中的落地经验，理解了NLP技术在数据分析场景的应用"
    }
  }
];

// 项目分类数据
const projectCategories: ProjectCategory[] = [
  {
    id: 'work',
    name: '工作项目',
    projects: workProjects
  },
  {
    id: 'personal',
    name: '个人项目',
    projects: personalProjects
  },
  {
    id: 'all',
    name: '全部项目',
    projects: [...workProjects, ...personalProjects]
  }
];

// START内容悬浮框组件
const ProjectDetailPopover: React.FC<{
  project: Project;
  isVisible: boolean;
  position: { x: number; y: number };
  onViewDetail: (project: Project, e: React.MouseEvent) => void;
}> = ({ project, isVisible, position, onViewDetail }) => {
  if (!isVisible || !project.startContent) return null;

  return (
    <div
      className="fixed z-50 w-96 bg-surface/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-6 pointer-events-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%) translateY(-20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="space-y-4">
        <h3 className={`text-lg font-bold ${
          project.category === 'work' ? 'text-accent' : 'text-primary'
        }`}>
          {project.title}
        </h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-blue-500 pl-3">
            <h4 className="text-xs font-mono text-blue-400 mb-1">情境 (Situation)</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.startContent.situation}</p>
          </div>
          
          <div className="border-l-2 border-green-500 pl-3">
            <h4 className="text-xs font-mono text-green-400 mb-1">任务 (Task)</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.startContent.task}</p>
          </div>
          
          <div className="border-l-2 border-yellow-500 pl-3">
            <h4 className="text-xs font-mono text-yellow-400 mb-1">行动 (Action)</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.startContent.action}</p>
          </div>
          
          <div className="border-l-2 border-orange-500 pl-3">
            <h4 className="text-xs font-mono text-orange-400 mb-1">结果 (Result)</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.startContent.result}</p>
          </div>
          
          <div className="border-l-2 border-purple-500 pl-3">
            <h4 className="text-xs font-mono text-purple-400 mb-1">收获 (Takeaway)</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.startContent.takeaway}</p>
          </div>
        </div>

        {/* 查看详情按钮 */}
        <button
          onClick={(e) => onViewDetail(project, e)}
          className={`w-full mt-4 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
            project.category === 'work'
              ? 'bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30'
              : 'bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30'
          }`}
        >
          查看完整详情
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('work');
  const [currentProjects, setCurrentProjects] = useState<Project[]>(workProjects);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  // 切换项目分类
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const category = projectCategories.find(cat => cat.id === categoryId);
    if (category) {
      setCurrentProjects(category.projects);
    }
  };

  // 处理项目卡片鼠标悬浮
  const handleProjectHover = (project: Project, event: React.MouseEvent, index: number) => {
    if (project.category === 'work' && project.startContent) {
      const rect = event.currentTarget.getBoundingClientRect();
      setPopoverPosition({
        x: rect.left + rect.width / 2,
        y: rect.top
      });
      setHoveredProject(index);
    }
  };

  // 处理鼠标离开
  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  // 处理项目卡片点击
  const handleProjectClick = (project: Project) => {
    navigate(`/project/${encodeURIComponent(project.title)}`);
  };

  // 处理查看详情按钮点击
  const handleViewDetailClick = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/project/${encodeURIComponent(project.title)}`);
  };

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
      const metrics = containerRef.current.querySelectorAll('.project-metric');

      // 统一动画风格 - 简化效果，减少干扰
      window.gsap.fromTo(cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.97
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate metrics
      window.gsap.fromTo(metrics,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, [currentProjects]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Enhanced section header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center">
            <span className="font-mono text-primary text-xl mr-4">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">精选项目</h2>
          </div>
          <div className="h-px bg-gradient-to-l from-white/10 to-transparent flex-grow ml-6"></div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <TrendingUp size={14} className="text-primary" />
              <span>高影响力</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Users size={14} className="text-accent" />
              <span>企业级</span>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface/50 border border-white/10 rounded-full p-1">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-black shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-60">
                  ({category.projects.length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card group relative bg-gradient-to-br from-surface to-surface/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg ${
                project.category === 'personal'
                  ? 'hover:border-primary/30'
                  : 'hover:border-accent/30'
              } ${project.category === 'work' && project.startContent ? 'cursor-pointer' : ''}`}
              onMouseEnter={(e) => handleProjectHover(project, e, idx)}
              onMouseLeave={handleProjectLeave}
              onClick={() => handleProjectClick(project)}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card content */}
              <div className="relative p-6 md:p-8 z-10 flex flex-col h-full">
                {/* Enhanced header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-2.5 bg-gradient-to-br ${
                    project.category === 'personal'
                      ? 'from-primary/10 to-primary/5 border-primary/20'
                      : 'from-accent/10 to-accent/5 border-accent/20'
                  } rounded-lg border group-hover:scale-105 transition-transform duration-300`}>
                    {project.category === 'personal' ? (
                      <Brain size={16} className="text-primary" />
                    ) : (
                      <Database size={16} className="text-accent" />
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      className="p-2 bg-white/5 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      className="p-2 bg-white/5 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Project title */}
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  project.category === 'personal'
                    ? 'text-gray-100 group-hover:text-primary'
                    : 'text-gray-100 group-hover:text-accent'
                }`}>
                  {project.title}
                </h3>

                {/* Enhanced description */}
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Project highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights?.map((highlight, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono px-2 py-1 rounded-full border ${
                        project.category === 'personal'
                          ? 'text-primary bg-primary/10 border-primary/20'
                          : 'text-accent bg-accent/10 border-accent/20'
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Enhanced metrics section */}
                <div className="project-metric pt-4 border-t border-white/5">
                  {(project.metrics || project.results) && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        project.category === 'personal' ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <p className={`font-mono text-xs flex-grow ${
                        project.category === 'personal' ? 'text-primary' : 'text-accent'
                      }`}>
                        {project.metrics || project.results}
                      </p>
                    </div>
                  )}
                  
                  {/* Tech stack icons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {project.techStack?.slice(0, 3).map((tech, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-white/10 rounded flex items-center justify-center text-xs text-gray-400"
                        >
                          {tech[0].toUpperCase()}
                        </div>
                      ))}
                    </div>
                    <ArrowRight
                      size={16}
                      className={`text-gray-600 group-hover:${
                        project.category === 'personal' ? 'text-primary' : 'text-accent'
                      } group-hover:translate-x-1 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                project.category === 'personal' ? 'border-primary/30' : 'border-accent/30'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Section footer */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-3 border border-primary/30 rounded-full text-primary font-mono hover:bg-primary/10 transition-all duration-300">
            <span>查看更多项目</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* START内容悬浮框 */}
        {hoveredProject !== null && currentProjects[hoveredProject] && (
          <ProjectDetailPopover
            project={currentProjects[hoveredProject]}
            isVisible={true}
            position={popoverPosition}
            onViewDetail={handleViewDetailClick}
          />
        )}
      </div>
    </section>
  );
};

// 导出项目数据供其他组件使用
export { workProjects, personalProjects };

export default Projects;