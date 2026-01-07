import { ComponentType } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  link: string;
  highlights?: string[];
  techStack?: string[];
  category?: 'personal' | 'work';
  results?: string;
  // 添加START原则相关字段
  startContent?: {
    situation: string;    // 情境：项目背景和需求
    task: string;         // 任务：需要完成的具体任务
    action: string;       // 行动：采取的具体行动和方法
    result: string;       // 结果：取得的成果和效果
    takeaway: string;     // 收获：经验教训和总结
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
  achievements?: string[];
  location?: string;
  type?: 'senior' | 'mid' | 'junior';
}

export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt?: string;
  tags?: string[];
}

export interface DigitalProduct {
  name: string;
  url: string;
  icon: ComponentType<any> | string;
  description?: string;
  category: 'blog' | 'social' | 'contact';
  color?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  projects: Project[];
}

// Global GSAP definition since we are loading via CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}