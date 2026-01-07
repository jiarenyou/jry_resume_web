import React, { useEffect, useRef } from 'react';
import { Database, Server, Code, Cloud, Zap, Shield, Cpu, Globe, TrendingUp, BarChart3, Pipeline, Layers } from 'lucide-react';

const skillCategories = [
  {
    icon: <Server size={24} />,
    title: "大数据平台",
    skills: ["Hadoop", "Spark", "Hive", "Flink", "Kafka"],
    color: "primary",
    bgGradient: "from-primary/10 to-primary/5",
    borderColor: "primary/30",
    scenarios: ["日均TB级处理", "实时流计算", "离线批处理"]
  },
  {
    icon: <Database size={24} />,
    title: "数据库与数仓",
    skills: ["MySQL", "Doris", "Greenplum", "AWS Glue", "S3"],
    color: "accent",
    bgGradient: "from-accent/10 to-accent/5",
    borderColor: "accent/30",
    scenarios: ["数据仓库建设", "BI报表开发", "数据标准化"]
  },
  {
    icon: <Code size={24} />,
    title: "机器学习工程化",
    skills: ["XGBoost", "GBDT", "LSTM", "PyTorch", "TensorFlow"],
    color: "primary",
    bgGradient: "from-primary/10 to-primary/5",
    borderColor: "primary/30",
    scenarios: ["模型训练部署", "算法工程化", "预测性维护"]
  },
  {
    icon: <Cloud size={24} />,
    title: "工程化能力",
    skills: ["Python", "SQL", "Docker", "Linux", "实时开发"],
    color: "accent",
    bgGradient: "from-accent/10 to-accent/5",
    borderColor: "accent/30",
    scenarios: ["云原生架构", "端云协同", "CI/CD流水线"]
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger && sectionRef.current) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const cards = sectionRef.current.querySelectorAll('.skill-card');
      const scenarioTags = sectionRef.current.querySelectorAll('.scenario-tag');

      // Animate cards
      window.gsap.fromTo(cards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate scenario tags
      window.gsap.fromTo(scenarioTags,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-surface/30 to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div className="flex items-center mb-20">
          <div className="flex items-center">
            <span className="font-mono text-primary text-xl mr-4">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">核心技术栈</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow ml-6"></div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <Zap size={14} className="text-primary" />
              <span>高性能</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Shield size={14} className="text-accent" />
              <span>可扩展</span>
            </div>
          </div>
        </div>

        {/* Enhanced skills grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card group relative bg-gradient-to-br from-surface to-surface/50 border border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Card background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative p-8 z-10">
                {/* Enhanced header */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`flex items-center gap-3 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`p-3 bg-${category.color}/10 rounded-xl border border-${category.color}/20`}>
                      {category.icon}
                    </div>
                    <h3 className="font-mono text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono">{category.skills.length} 项</span>
                  </div>
                </div>

                {/* Enhanced skills grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`relative group/skill overflow-hidden rounded-lg border border-${category.borderColor}/20 bg-white/5 hover:bg-white/10 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 transform translate-x-full group-hover/skill:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10 font-mono text-sm text-gray-300 px-3 py-2 block text-center">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 场景标签 - 替代进度条 */}
                <div className="relative pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={14} className="text-gray-500" />
                    <span className="text-xs font-mono text-gray-500">应用场景</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.scenarios.map((scenario, i) => (
                      <span
                        key={i}
                        className={`scenario-tag text-xs font-medium px-3 py-1.5 rounded-full border border-${category.borderColor}/30 bg-${category.color}/5 text-${category.color} hover:bg-${category.color}/10 transition-colors duration-300`}
                      >
                        {scenario}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-${category.color}/30 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Section footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 border border-white/10 rounded-full">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span className="text-sm text-gray-400">TB级数据处理</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <Database size={16} className="text-accent" />
              <span className="text-sm text-gray-400">AI算法工程化</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;