
import React from 'react';
import TrustBar from '../components/TrustBar';
import { SUPPORT_PROGRAMS, PARTNERS, RECENT_EVENTS, TALENT_POOL } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold mb-6 tracking-widest uppercase bg-[#D4AF37]/10">
              GFA GLOBAL FILM ALLIANCE
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]">
              建立行业<br />
              <span className="gold-gradient">信任与资产</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              认证公信力 + 试镜人才库 + 作品扶持计划 + 商业权益联盟<br className="hidden md:block"/>
              连接全球影视人才、机构与优质项目的核心枢纽。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#/certification" className="gold-bg text-black px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all text-center">
                立即申请认证
              </a>
              <a href="#/support" className="bg-white/5 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all text-center">
                探索扶持计划
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Pillars Section */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">四大支柱 <span className="gold-gradient">PILLARS</span></h2>
          <p className="text-gray-500 text-lg">全方位的生态系统，从标准化认证到全链条商业赋能。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: '权威认证体系', desc: '基于区块链技术的证书可验证、年审机制、黑名单公示。', icon: '📜' },
            { title: '试镜与人才库', desc: '平台托管交易、未成年合规保护、选角流程标准化。', icon: '👤' },
            { title: '扶持毕业生计划', desc: '从剧本辅导到后期分发，助力影坛新势力完美着陆。', icon: '🎓' },
            { title: '会员商业支持', desc: '整合超市、餐饮、保险、租车等全球数千家商业权益。', icon: '🛡️' },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-10 rounded-[32px] hover:border-[#D4AF37]/50 transition-all group cursor-default">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-[#D4AF37]">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">入驻人才 <span className="gold-gradient">TALENT</span></h2>
              <p className="text-gray-500 max-w-xl">通过 GFA 认证的精英从业者，涵盖演员、编剧、武指及制作人才。</p>
            </div>
            <a href="#/casting" className="px-8 py-3 border border-white/20 rounded-full text-sm font-bold hover:bg-white/5 transition-all">发现更多人才 →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TALENT_POOL.map((talent) => (
              <div key={talent.id} className="group cursor-pointer">
                <div className="relative aspect-[2/3] overflow-hidden rounded-2xl mb-4 border border-white/5">
                  <img src={talent.image} alt={talent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[10px] gold-bg text-black px-2 py-1 rounded font-black">VIEW PROFILE</span>
                  </div>
                </div>
                <h4 className="font-bold text-sm truncate">{talent.name}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{talent.roles.join(' / ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-12">最新动态 <span className="gold-gradient">NEWS</span></h2>
            <div className="space-y-6">
              {RECENT_EVENTS.map((event, i) => (
                <div key={i} className="flex items-center justify-between p-6 glass-panel rounded-2xl group hover:border-[#D4AF37]/30 transition-all cursor-pointer">
                  <div>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">{event.category}</span>
                    <h4 className="text-lg font-bold mt-1 group-hover:text-[#D4AF37] transition-colors">{event.title}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-mono">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="glass-panel p-12 rounded-[40px] border-[#D4AF37]/20 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-black mb-6">加入联盟，<br />驱动你的影视梦想。</h3>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  无论你是初出茅庐的毕业生，还是寻求标准化转型的传统机构，GFA 都为你准备了完善的接口。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center text-black font-black">1</div>
                    <span>申请全球公信力认证</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center text-black font-black">2</div>
                    <span>享受顶级拍摄资源与商业折扣</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center text-black font-black">3</div>
                    <span>对接主流制片方与选角系统</span>
                  </div>
                </div>
                <button className="mt-12 gold-bg text-black px-10 py-5 rounded-full font-black hover:scale-105 transition-transform shadow-xl shadow-[#D4AF37]/20">
                  立即成为会员 Become a Member
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Partners Scrolling */}
      <section className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500 font-bold uppercase tracking-[0.3em] mb-12">GFA GLOBAL STRATEGIC PARTNERS</p>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {PARTNERS.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <img src={p.logo} alt={p.name} className="h-8 md:h-12 w-auto object-contain" />
                <span className="text-[10px] text-gray-600 group-hover:text-white transition-colors">{p.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
