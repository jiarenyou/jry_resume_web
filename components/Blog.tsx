import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
    {
        title: "优化 Apache Spark 中的 Shuffle 操作",
        date: "2023-10-12",
        readTime: "8 分钟阅读",
        category: "大数据",
        excerpt: "深入探讨Spark Shuffle机制的内部原理，分享实际生产环境中的性能优化策略和最佳实践。",
        tags: ["Spark", "性能优化", "分布式计算"]
    },
    {
        title: "数据管道中的幂等性设计：实战指南",
        date: "2023-09-28",
        readTime: "5 分钟阅读",
        category: "工程模式",
        excerpt: "从理论到实践，全面解析数据管道幂等性设计的重要性和实现方法。",
        tags: ["数据工程", "架构设计", "最佳实践"]
    },
    {
        title: "为什么我们从 Airflow 迁移到 Prefect (然后又迁回来)",
        date: "2023-08-15",
        readTime: "12 分钟阅读",
        category: "编排调度",
        excerpt: "真实案例分析：对比Airflow和Prefect的优缺点，分享技术选型的思考过程。",
        tags: ["Airflow", "Prefect", "工作流", "技术选型"]
    }
];

const Blog: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.gsap && window.ScrollTrigger && containerRef.current) {
            const cards = containerRef.current.querySelectorAll('.blog-card');
            const tags = containerRef.current.querySelectorAll('.blog-tag');
            
            // Animate cards
            window.gsap.fromTo(cards, 
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Animate tags
            window.gsap.fromTo(tags, 
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }
    }, []);

    return (
        <section id="blog" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10" ref={containerRef}>
                {/* Enhanced section header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center">
                        <span className="font-mono text-primary text-xl mr-4">04.</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">最新文章</h2>
                    </div>
                    <div className="h-px bg-gradient-to-l from-white/10 to-transparent flex-grow ml-6"></div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <BookOpen size={14} className="text-primary" />
                        <span>技术分享</span>
                    </div>
                </div>

                {/* Enhanced blog posts */}
                <div className="space-y-6">
                    {posts.map((post, idx) => (
                        <div key={idx} className="blog-card group relative bg-gradient-to-br from-surface to-surface/50 border border-white/5 hover:border-primary/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-glow cursor-pointer">
                            {/* Card background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative p-8 z-10">
                                {/* Enhanced header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col items-end gap-3 ml-6">
                                        <span className="font-mono text-xs text-primary border border-primary/20 px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock size={12} />
                                                <span>{post.readTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, i) => (
                                        <span 
                                            key={i} 
                                            className="blog-tag text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read more indicator */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                                        <span className="text-sm font-mono">阅读全文</span>
                                        <ArrowRight 
                                            size={16} 
                                            className="group-hover:translate-x-1 transition-transform duration-300" 
                                        />
                                    </div>
                                    <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                                </div>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Section footer */}
                <div className="mt-12 text-center">
                    <button className="group inline-flex items-center gap-3 px-8 py-3 border border-primary/30 rounded-full text-primary font-mono hover:bg-primary/10 transition-all duration-300">
                        <span>查看所有文章</span>
                        <ArrowRight 
                            size={16} 
                            className="group-hover:translate-x-1 transition-transform duration-300" 
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;