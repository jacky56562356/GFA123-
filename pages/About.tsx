
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Visual Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071" className="w-full h-full object-cover opacity-30 grayscale" alt="About GFA" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-5xl md:text-8xl font-black mb-6 gold-gradient">连接影视未来</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            GFA 全球电影联盟 (GFA Film Alliance) 是致力于构建去中心化、高信任度、全资源链条赋能的国际影视生态组织。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-32">
          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 italic">使命与愿景 <br/><span className="gold-gradient">MISSION</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                在一个日益碎片化和去中心化的内容时代，影视从业者面临着前所未有的信任危机、资源错配与保护缺失。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-medium italic border-l-4 border-[#D4AF37] pl-8">
                "我们的使命是建立一个让才华可以被量化、让诚信可以被定价、让创意可以被赋能的标准化平台。"
              </p>
            </div>
            <div className="glass-panel p-12 rounded-[40px] border-[#D4AF37]/10 relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
               <div className="space-y-10">
                  <div>
                    <h4 className="text-[#D4AF37] font-black text-sm uppercase tracking-widest mb-2">行业透明化</h4>
                    <p className="text-gray-400 text-sm">通过认证与记录系统，消除信息差与潜规则，让合作回归创作本质。</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-black text-sm uppercase tracking-widest mb-2">全球化协作</h4>
                    <p className="text-gray-400 text-sm">打破地域限制，让每一个优秀的本土电影人都能无缝对接国际标准资源。</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-black text-sm uppercase tracking-widest mb-2">可持续发展</h4>
                    <p className="text-gray-400 text-sm">通过对毕业生的全方位扶持，确保影视工业的人才血液持续健康流动。</p>
                  </div>
               </div>
            </div>
          </section>

          {/* Core Values */}
          <section>
             <h2 className="text-4xl font-black mb-16 text-center">核心价值观 <span className="gold-gradient">VALUES</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: '公信力 Trust', desc: '我们的一票否决机制确保了认证体系的绝对严肃性。' },
                  { title: '共赢性 Synergy', desc: '我们不仅是管理者，更是连接商家与创作者的利益共享者。' },
                  { title: '合规性 Safety', desc: '在未成年人保护与数据隐私上，我们执行全球最高合规标准。' },
                ].map((v, i) => (
                  <div key={i} className="bg-[#0c0c0c] p-10 rounded-3xl border border-white/5 text-center group hover:border-[#D4AF37]/30 transition-all">
                    <h4 className="text-xl font-black mb-4 group-hover:text-[#D4AF37] transition-colors">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Organization Structure */}
          <section className="bg-[#050505] p-16 rounded-[48px] border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-12">组织架构治理</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl gold-bg flex items-center justify-center text-black font-black flex-shrink-0">E</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">全球专家委员会 (GEC)</h5>
                      <p className="text-gray-500 text-sm">由 24 位来自全球各大制片厂及顶级艺术院校的终身评审组成，负责核心认证体系与扶持名单的定夺。</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl gold-bg flex items-center justify-center text-black font-black flex-shrink-0">A</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">合规与审计办 (CAO)</h5>
                      <p className="text-gray-500 text-sm">独立于运营团队，负责背景调查、投诉处理以及年度证书有效性审计。</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl gold-bg flex items-center justify-center text-black font-black flex-shrink-0">M</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">商业权益中心 (MBE)</h5>
                      <p className="text-gray-500 text-sm">维护全球合作伙伴关系，包括商家折扣谈判、影棚资源库管理及赞助商对接。</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl gold-bg flex items-center justify-center text-black font-black flex-shrink-0">P</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">项目孵化部 (IDU)</h5>
                      <p className="text-gray-500 text-sm">直接管理扶持毕业生计划，负责导师对接、后期流程管控及成果点映。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
          </section>

          {/* CTA Footer */}
          <section className="text-center py-20 border-t border-white/10">
            <h2 className="text-3xl font-black mb-8">准备好加入这个激动人心的联盟了吗?</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <a href="#/membership" className="gold-bg text-black px-12 py-5 rounded-full font-black text-lg transition-all hover:scale-105">加入会员 Join Us</a>
               <a href="#/contact" className="bg-white/5 border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">提交合作 Proposal</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
