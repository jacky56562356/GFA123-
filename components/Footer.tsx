
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  // 用户提供的最新 Logo 直链地址
  const logoUrl = "https://i.ibb.co/B582n2Dk/1755827874220993959.png";

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-8 mb-10 group">
              {/* 移除了装饰框、背景、边框和灰度滤镜，直接展示大尺寸 Logo */}
              <div className="relative flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
                 {!imgError ? (
                   <img 
                    src={logoUrl} 
                    alt="GFA Logo" 
                    className="h-32 w-auto object-contain z-10" // 大幅增加高度到 h-32
                    onError={() => setImgError(true)} 
                   />
                 ) : (
                   <svg className="w-16 h-16 text-[#D4AF37]" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                 )}
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black gold-gradient tracking-tighter">GFA联盟</span>
                <span className="text-[14px] text-gray-600 uppercase tracking-[0.5em] font-bold mt-2">Global Film Alliance</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm font-light">
              致力于构建一个基于信任与专业标准的全球影视生态。让可信的认证成为影视行业真正的通行证。
            </p>
            <div className="mt-10 flex gap-5">
              {['Twitter', 'Instagram', 'LinkedIn', 'WeChat'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all border border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-tighter">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 border-b border-white/5 pb-4">快速导航 Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#/certification" className="hover:text-[#D4AF37] transition-colors">申请全球认证</a></li>
              <li><a href="#/support" className="hover:text-[#D4AF37] transition-colors">毕业生扶持计划</a></li>
              <li><a href="#/membership" className="hover:text-[#D4AF37] transition-colors">商业会员中心</a></li>
              <li><a href="#/casting" className="hover:text-[#D4AF37] transition-colors">认证人才库</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 border-b border-white/5 pb-4">法律合规 Compliance</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">隐私保护政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">未成年保护准则</a></li>
              <li><a href="#" className="hover:text-white transition-colors">内容合规政策</a></li>
              <li><a href="#/certification" className="hover:text-[#D4AF37] transition-colors">证书真伪查询</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} GFA GLOBAL FILM ALLIANCE. TRUSTED BY INDUSTRY LEADERS.</p>
          <div className="flex gap-8">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">粤ICP备2025000001号</span>
            <span className="text-[#D4AF37]">SECURE & VERIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
