import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    company: "海尔智家",
    role: "数据开发工程师 / 数据挖掘专家 / 数据管理专员",
    period: "2022.05 - 2025.12",
    details: [
      "负责智能家电IoT数据平台建设，日处理数据量达TB级，支撑千万级设备数据接入",
      "主导算法工程化部署，实现从研究到生产的完整链路，模型部署周期缩短50%",
      "参与集团数据治理体系建设，制定空调业务领域数据标准，提升数据质量30%",
      "构建端云协同架构，实现实时计算与离线计算的统一调度，系统响应时间提升40%"
    ],
    achievements: ["冷媒检测准确率82%+", "MPC控温节能15%", "冰箱健康度专利1篇"],
    location: "青岛",
    type: "senior"
  },
  {
    company: "奇点控股",
    role: "数据建模工程师 / 数据开发工程师",
    period: "2019.03 - 2022.05",
    details: [
      "设计并搭建企业级指标体系，涵盖200+业务指标，支撑决策分析",
      "负责数据仓库建设，实现数据标准化处理，数据交付效率提升60%",
      "开发自动化报表系统，替代手工报表，减少人工成本80%"
    ],
    achievements: ["指标体系搭建", "数据仓库建设", "报表自动化"],
    location: "北京",
    type: "mid"
  },
  {
    company: "泰山石膏",
    role: "数据分析师",
    period: "2017.03 - 2018.03",
    details: [
      "维护ERP与用友系统数据，确保数据准确与完整",
      "开发销售分析看板，为管理层提供实时业务洞察，支撑月度决策"
    ],
    achievements: ["数据维护", "BI看板开发"],
    location: "泰安",
    type: "junior"
  }
];

const Experience: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.gsap && window.ScrollTrigger && timelineRef.current) {
            const items = timelineRef.current.querySelectorAll('.timeline-item');
            const lines = timelineRef.current.querySelectorAll('.timeline-line');

            // 统一动画风格 - 简化时间线动画
            items.forEach((item, index) => {
                window.gsap.fromTo(item,
                    { opacity: 0, x: -25 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );
            });

            // Animate timeline lines
            window.gsap.fromTo(lines,
                { scaleX: 0, transformOrigin: "left center" },
                {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    return (
        <section id="experience" className="py-24 bg-gradient-to-br from-surface/30 to-background/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Enhanced section header */}
                <div className="flex items-center mb-16">
                    <div className="flex items-center">
                        <span className="font-mono text-primary text-xl mr-4">03.</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">职业轨迹</h2>
                    </div>
                    <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow ml-6"></div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar size={14} className="text-primary" />
                            <span>5年+经验</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Award size={14} className="text-accent" />
                            <span>持续成长</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced timeline */}
                <div className="relative" ref={timelineRef}>
                    {/* Timeline line */}
                    <div className="timeline-line absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="timeline-item relative pl-16 md:pl-24 group">
                                {/* Enhanced dot */}
                                <div className={`absolute left-6 md:left-10 top-6 w-4 h-4 rounded-full bg-background border-2 ${
                                    exp.type === 'senior' ? 'border-primary' : 
                                    exp.type === 'mid' ? 'border-accent' : 'border-gray-500'
                                } group-hover:scale-150 transition-transform duration-300`}>
                                    <div className={`absolute inset-0 rounded-full animate-pulse ${
                                        exp.type === 'senior' ? 'bg-primary' : 
                                        exp.type === 'mid' ? 'bg-accent' : 'bg-gray-500'
                                    } opacity-30`}></div>
                                </div>
                                
                                {/* Enhanced content card */}
                                <div className="bg-gradient-to-br from-surface to-surface/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group-hover:shadow-glow">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                            <div className="flex items-center gap-3">
                                                <h4 className="text-lg text-gray-400 font-mono">@ {exp.company}</h4>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <MapPin size={12} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2 sm:mt-0">
                                            <span className={`font-mono text-sm px-3 py-1 rounded-full border ${
                                                exp.type === 'senior' ? 'text-primary border-primary/30 bg-primary/10' : 
                                                exp.type === 'mid' ? 'text-accent border-accent/30 bg-accent/10' : 
                                                'text-gray-500 border-gray-500/30 bg-gray-500/10'
                                            }`}>
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Details */}
                                    <div className="space-y-3 mb-4">
                                        {exp.details.map((detail, i) => (
                                            <div key={i} className="flex items-start text-gray-400 text-sm leading-relaxed">
                                                <span className="mr-3 text-primary mt-1.5 text-xs">▹</span>
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <span 
                                                key={i} 
                                                className={`text-xs font-mono px-3 py-1 rounded-full border ${
                                                    exp.type === 'senior' ? 'text-primary border-primary/20 bg-primary/5' : 
                                                    exp.type === 'mid' ? 'text-accent border-accent/20 bg-accent/5' : 
                                                    'text-gray-500 border-gray-500/20 bg-gray-500/5'
                                                }`}
                                            >
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;