
import React from 'react';
import { TALENT_POOL } from '../constants';

const Casting: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black gold-gradient mb-6 tracking-tight">试镜与人才库</h1>
            <p className="text-gray-400 text-xl font-light">
              连接 15,000+ 位全球认证人才。通过标准化流程，保障您的每一个招募项目高效、安全、透明。
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-grow gold-bg text-black px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95">发布招募项目</button>
            <button className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            <div className="glass-panel p-8 rounded-3xl sticky top-24">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                快速筛选
              </h4>
              
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-3">专业领域 Category</label>
                  <div className="flex flex-wrap gap-2">
                    {['全部', '演员', '童星', '模特', '武指', '主持'].map(tag => (
                      <button key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${tag === '全部' ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-white/10 text-gray-400 hover:border-white/20'}`}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-3">服务区域 Region</label>
                  <select className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-gray-300 outline-none focus:border-[#D4AF37]">
                    <option>全球范围内</option>
                    <option>大中华区</option>
                    <option>北美地区</option>
                    <option>欧洲地区</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-3">认证等级 Verified Level</label>
                  <div className="space-y-3">
                    {['GFA Gold (金牌)', 'GFA Pro (专家)', 'GFA Entry (准入)'].map(level => (
                      <label key={level} className="flex items-center text-sm text-gray-400 cursor-pointer group">
                        <input type="checkbox" className="mr-3 w-4 h-4 rounded border-white/10 bg-white/5 accent-[#D4AF37]" />
                        <span className="group-hover:text-white transition-colors">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                   <div className="bg-[#D4AF37]/5 p-6 rounded-2xl border border-[#D4AF37]/20">
                      <h5 className="text-[#D4AF37] font-bold text-sm mb-2">未成年保护声明</h5>
                      <p className="text-[10px] text-gray-500 leading-relaxed italic">
                        所有针对 18 岁以下人才的招募与试镜，必须通过 GFA 认证家长账户操作，且试镜过程必须符合联盟《未成年从业者安全准则》。
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Talent Grid */}
          <div className="lg:col-span-3">
             <div className="flex justify-between items-center mb-10">
                <p className="text-gray-500 text-sm">找到 <span className="text-white font-bold">15,402</span> 位匹配人才</p>
                <div className="flex gap-4">
                  <span className="text-xs text-gray-500">排序:</span>
                  <button className="text-xs font-bold text-white border-b border-[#D4AF37]">最近入驻</button>
                  <button className="text-xs font-bold text-gray-500 hover:text-white transition-colors">推荐权重</button>
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {TALENT_POOL.map((talent) => (
                  <div key={talent.id} className="bg-[#0c0c0c] rounded-[32px] overflow-hidden border border-white/5 group hover:border-[#D4AF37]/30 transition-all shadow-xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                       <img src={talent.image} alt={talent.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-6 left-6 flex flex-col gap-2">
                          <div className="bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full border border-[#D4AF37]/50 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></div>
                             <span className="text-[9px] text-[#D4AF37] font-black uppercase tracking-widest">GFA Gold Verified</span>
                          </div>
                       </div>
                       <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
                          <h3 className="text-2xl font-black mb-1">{talent.name}</h3>
                          <div className="flex gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
                             <span>{talent.age} YEARS</span>
                             <span className="w-1 h-1 bg-gray-700 rounded-full my-auto"></span>
                             <span>{talent.city}</span>
                          </div>
                       </div>
                    </div>
                    <div className="p-8">
                       <div className="flex flex-wrap gap-2 mb-8">
                          {talent.roles.map(role => (
                            <span key={role} className="bg-white/5 px-2 py-1 rounded text-[10px] text-gray-300 font-medium">{role}</span>
                          ))}
                       </div>
                       <div className="flex gap-3">
                          <button className="flex-grow gold-bg text-black py-3 rounded-xl font-black text-xs hover:scale-[1.02] transition-transform">预约试镜</button>
                          <button className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 group-hover:border-white/20">
                             <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          </button>
                       </div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="mt-20 flex justify-center">
                <button className="px-10 py-4 glass-panel border border-white/10 rounded-full text-sm font-black hover:bg-white/5 transition-all text-gray-400 hover:text-white">
                  加载更多精英人才 LOAD MORE
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casting;
