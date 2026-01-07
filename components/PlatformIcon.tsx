import React from 'react';

interface PlatformIconProps {
  iconName: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ iconName, className = '', size = 'medium' }) => {
  // 尺寸映射
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  // 图标文件路径映射
  const iconPathMap: Record<string, string> = {
    'csdn': '/tag_png/csdn.svg',
    '和鲸': '/tag_png/和鲸.svg',
    'X平台': '/tag_png/X平台.svg',
    '个人blog': '/tag_png/个人blog.svg',
    '微信公众号': '/tag_png/微信公众号.svg',
    '知乎': '/tag_png/知乎.svg',
    '视频号': '/tag_png/视频号.svg'
  };

  // 获取图标路径
  const iconPath = iconPathMap[iconName];

  if (!iconPath) {
    console.warn(`Icon "${iconName}" not found in iconPathMap`);
    return (
      <div className={`${sizeMap[size]} ${className} bg-gray-500 rounded-full flex items-center justify-center`}>
        <span className="text-white text-xs">?</span>
      </div>
    );
  }

  return (
    <div className={`${sizeMap[size]} ${className} relative group`}>
      <img
        src={iconPath}
        alt={iconName}
        className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110`}
        onError={(e) => {
          console.error(`Failed to load icon: ${iconPath}`);
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* 悬停时的光晕效果 */}
      <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default PlatformIcon;