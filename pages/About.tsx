
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Visual Header */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071" className="w-full h-full object-cover opacity-20 grayscale scale-110" alt="About GFA" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
        </div>
        <div className="relative text-center z-10 px-4 max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black mb-8 tracking-[0.4em] uppercase bg-[#D4AF37]/5">
            ESTABLISHED FOR TRUST
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 gold-gradient tracking-tighter italic">关于 GFA</h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            全球电影联盟 (GFA) 是一个致力于构建高信任度、全资源链条赋能的国际影视生态组织。
            我们用标准打破偏见，用认证重塑信任。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-40">
          {/* Mission & Painpoints */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black mb-12 italic">核心叙事 <br/><span className="gold-gradient uppercase tracking-tighter">The Mission</span></h2>
              <div className="space-y-10 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  影视从业者正面临着前所未有的信任危机、资源错配与保障缺失。选角的不透明、试镜的不规范以及新锐人才难以获取资源，长期制约着行业的高效发展。
                </p>
                <div className="p-10 bg-white/5 rounded-[40px] border-l-4 border-[#D4AF37] relative group hover:bg-white/[0.08] transition-all">
                  <p className="text-white font-medium italic text-xl">
                    "GFA 的存在，是为了让才华可以被量化、让诚信可以被定价、让创意可以被无差别地赋能。"
                  </p>
                  <p className="text-[10px] text-gray-600 mt-6 font-bold uppercase tracking-widest">— GFA 执行委员会</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
               {[
                 { label: '行业标准化', desc: '统一全球选角与制作的合规基准' },
                 { label: '人才护航', desc: '全生命周期的职业信用管理' },
                 { label: '未成年保护', desc: '执行最高等级的拍摄安全规范' },
                 { label: '青年扶持', desc: '打破资源阶级化，让作品说话' }
               ].map((item, i) => (
                 <div key={i} className="glass-panel p-8 rounded-[32px] border-white/5 z-10 hover:border-[#D4AF37]/30 transition-all flex flex-col justify-end min-h-[220px]">
                    <h4 className="text-[#D4AF37] font-black text-xs uppercase tracking-widest mb-3">{item.label}</h4>
                    <p className="text-gray-300 text-sm font-bold leading-snug">{item.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          {/* Governance Structure */}
          <section>
             <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black mb-8 italic">组织治理架构 <span className="gold-gradient">GOVERNANCE</span></h2>
               <p className="text-gray-500 max-w-2xl mx-auto">我们通过多维度的权力制衡机制，确保联盟决策的独立性与公正性。</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { code: 'GEC', title: '全球委员会', desc: '由顶级导演与艺术院校院长组成，负责制定行业认证标准与重大战略方向。', icon: '⚖️' },
                  { code: 'CAO', title: '独立审计办', desc: '独立于运营部门，负责所有认证申请的合规审计、背景调查及举报调查。', icon: '🛡️' },
                  { code: 'MPC', title: '商业权益中心', desc: '负责与全球商业机构谈判，维护会员在法律、保险、差旅等全链条权益。', icon: '🤝' },
                  { code: 'IDU', title: '项目孵化部', desc: '核心职能为管理“毕业生扶持计划”，负责导师对接、后期工业流程监管。', icon: '🚀' },
                ].map((v, i) => (
                  <div key={i} className="bg-[#0c0c0c] p-12 rounded-[48px] border border-white/5 text-center group hover:border-[#D4AF37]/30 transition-all shadow-2xl">
                    <div className="text-5xl mb-10 group-hover:scale-110 transition-transform duration-500">{v.icon}</div>
                    <div className="gold-bg text-black text-[10px] font-black px-4 py-1 rounded-full mb-6 tracking-widest inline-block">{v.code}</div>
                    <h4 className="text-2xl font-black mb-4 text-white">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{v.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Transparency & Reports */}
          <section className="bg-[#050505] p-16 md:p-24 rounded-[64px] border border-white/5 relative overflow-hidden">
             <div className="relative z-10 flex flex-col lg:flex-row gap-24">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl font-black mb-10 italic">透明度与社会责任 <span className="gold-gradient uppercase tracking-tighter">Public Good</span></h2>
                   <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                     GFA 坚信只有透明才能建立永恒的信任。作为非营利性行业组织的倡导者，我们每年定期向全行业公示扶持项目进展、资源流向及会员服务审计。
                   </p>
                   <div className="space-y-6">
                      <div className="flex items-start gap-6 group cursor-pointer">
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                         </div>
                         <div>
                            <h4 className="text-white font-bold mb-1">2024 年度行业透明报告 (PDF)</h4>
                            <p className="text-xs text-gray-600 font-medium">包含：资金使用明细、扶持项目达成率、认证通过/吊销公示</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-center">
                      <span className="text-5xl font-black gold-gradient mb-4 italic block">85</span>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">扶持项目结项率 100%</p>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-center">
                      <span className="text-5xl font-black gold-gradient mb-4 italic block">12k</span>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">认证人才全球通认</p>
                   </div>
                </div>
             </div>
          </section>

          {/* CTA Footer */}
          <section className="text-center py-24 border-t border-white/10">
            <h2 className="text-4xl md:text-7xl font-black mb-12 italic">准备好加入这个<br/><span className="gold-gradient">全球影视契约系统</span>了吗?</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
               <a href="#/membership" className="gold-bg text-black px-16 py-6 rounded-full font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-[#D4AF37]/20">加入会员 Join GFA</a>
               <a href="#/contact" className="bg-white/5 border border-white/20 px-16 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all">提交合作 Proposal</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
