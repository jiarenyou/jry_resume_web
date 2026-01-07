import React, { useEffect, useRef } from 'react';
import { Github, Mail, MessageCircle, Send, ArrowRight, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.gsap && sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.contact-element');
            
            window.gsap.fromTo(elements, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "#",
            color: "hover:text-white"
        },
        {
            name: "Twitter",
            icon: () => (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="0" className="fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            ),
            href: "#",
            color: "hover:text-white"
        },
        {
            name: "Bilibili",
            icon: () => (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="0" className="fill-current">
                     <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.4.249.573.373.92.373zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.756-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.25.249-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.25-.249.56-.374.933-.374zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.25.249-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.25-.249.56-.374.933-.374z" />
                </svg>
            ),
            href: "#",
            color: "hover:text-primary"
        },
        {
            name: "WeChat",
            icon: () => (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="0" className="fill-current">
                     <path d="M8.696 14.887c-4.47 0-8.121-3.261-8.121-7.246 0-3.986 3.651-7.247 8.121-7.247s8.121 3.26 8.121 7.247c0 3.985-3.65 7.246-8.121 7.246-.867 0-1.696-.123-2.476-.35l-2.618 1.344.66-2.296a8.913 8.913 0 0 1-3.687-5.944zm11.238 1.48c-3.738 0-6.78-2.678-6.78-5.95 0-3.272 3.042-5.95 6.78-5.95 3.739 0 6.781 2.678 6.781 5.95 0 3.272-3.042 5.95-6.781 5.95-.596 0-1.172-.083-1.716-.237l-2.187 1.121.552-1.916a7.35 7.35 0 0 1-3.429-4.918z" />
                </svg>
            ),
            href: "#",
            color: "hover:text-primary"
        }
    ];

    return (
        <section id="contact" className="contact-element py-24 bg-gradient-to-br from-black via-background to-surface text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 z-10 relative" ref={sectionRef}>
                {/* Enhanced section header */}
                <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center">
                        <span className="font-mono text-primary text-xl mr-4">05.</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">建立连接</h2>
                    </div>
                </div>

                <div className="contact-element space-y-8">
                    {/* Enhanced main message */}
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        无论您是对我的技术栈有疑问，有项目合作意向，还是仅仅想打个招呼，
                        <span className="text-primary font-semibold">我的收件箱随时为您敞开</span>
                    </p>

                    {/* Enhanced contact buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:1528587698@qq.com"
                            className="contact-element group inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-mono hover:bg-primary/10 hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-full"
                        >
                            <Mail size={20} className="transition-transform duration-300 group-hover:scale-110" />
                            <span className="transition-colors duration-300">发送邮件</span>
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                        
                        <button className="contact-element group inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent font-mono hover:bg-accent/10 hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-full">
                            <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110" />
                            <span className="transition-colors duration-300">在线咨询</span>
                        </button>
                    </div>

                    {/* Enhanced contact info */}
                    <div className="contact-element grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-gradient-to-br from-surface/50 to-surface/30 border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors duration-300">位置</h4>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">北京，中国</p>
                        </div>

                        <div className="bg-gradient-to-br from-surface/50 to-surface/30 border border-white/5 rounded-2xl p-6 hover:border-accent/30 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 bg-accent/10 rounded-full group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                    <Mail className="text-accent" size={20} />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors duration-300">邮箱</h4>
                            <a
                                href="mailto:1528587698@qq.com"
                                className="text-gray-400 text-sm hover:text-primary transition-colors duration-300 group-hover:font-medium"
                            >
                                1528587698@qq.com
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-surface/50 to-surface/30 border border-white/5 rounded-2xl p-6 hover:border-accent/30 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 bg-accent/10 rounded-full group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                    <Phone className="text-accent" size={20} />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors duration-300">电话</h4>
                            <a
                                href="tel:17753224683"
                                className="text-gray-400 text-sm hover:text-accent transition-colors duration-300 group-hover:font-medium"
                            >
                                17753224683
                            </a>
                        </div>
                    </div>
                </div>

                {/* Enhanced footer */}
                <footer className="contact-element mt-24 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`text-gray-500 transition-colors duration-300 hover:scale-110 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p className="font-mono text-xs text-gray-600">
                                设计与构建 by 数据开发工程师
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="font-mono text-xs text-gray-600">
                                24小时内响应
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;