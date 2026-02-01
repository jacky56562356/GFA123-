
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://ibb.co/FkjwP9Cv" alt="GFA Logo" className="h-10 w-auto" />
              <span className="text-3xl font-black gold-gradient">GFA联盟</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
              GFA全球电影联盟：以“认证公信力 + 试镜与人才库 + 作品扶持 + 商业权益联盟”连接影视人才、机构与项目。
            </p>
            <div className="mt-8 flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">快速链接 Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#/certification" className="hover:text-[#D4AF37] transition-colors">申请全球认证</a></li>
              <li><a href="#/support" className="hover:text-[#D4AF37] transition-colors">毕业生扶持计划</a></li>
              <li><a href="#/membership" className="hover:text-[#D4AF37] transition-colors">商业会员中心</a></li>
              <li><a href="#/partners" className="hover:text-[#D4AF37] transition-colors">商家合作伙伴</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">法律与合规 Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">隐私保护政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务使用条款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">未成年保护准则</a></li>
              <li><a href="#/certification" className="hover:text-[#D4AF37] transition-colors">证书在线验证</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} GFA Global Film Alliance. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span>粤ICP备2025000001号</span>
            <span>Made for Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
