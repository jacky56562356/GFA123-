
import React from 'react';
import { MembershipLevel } from '../types';

const Membership: React.FC = () => {
  const plans = [
    {
      level: MembershipLevel.TALENT_FREE,
      price: '¥0',
      period: '/ 永久',
      perks: ['基础人才库入驻', '公开试镜投递', '社区交流'],
      cta: '立即加入',
      popular: false
    },
    {
      level: MembershipLevel.TALENT_PRO,
      price: '¥199',
      period: '/ 年',
      perks: ['GFA认证标识', '试镜优先推荐', '合作商家8折起', '法律咨询服务'],
      cta: '升级 Pro',
      popular: true
    },
    {
      level: MembershipLevel.STUDIO,
      price: '¥2999',
      period: '/ 年',
      perks: ['影棚/机构展示', '发布专属招募', '认证人才优先调度', '行业活动协办'],
      cta: '联系合作',
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 gold-gradient">会员与商业福利</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            加入GFA会员体系，解锁全方位的拍摄支持与生活保障。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <div key={i} className={`relative glass-panel rounded-3xl p-10 flex flex-col ${plan.popular ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 gold-bg text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black mb-2">{plan.level}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <ul className="flex-grow space-y-4 mb-10">
                {plan.perks.map((perk, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black transition-all ${plan.popular ? 'gold-bg text-black hover:scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Perk Map Placeholder */}
        <section className="bg-[#111] p-12 rounded-[40px] border border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <h2 className="text-3xl font-bold">福利地图 (Perk Map)</h2>
            <div className="flex gap-4">
              <select className="bg-black border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:border-[#D4AF37] outline-none">
                <option>选择城市: 全部</option>
                <option>北京</option>
                <option>上海</option>
                <option>横店</option>
              </select>
              <select className="bg-black border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:border-[#D4AF37] outline-none">
                <option>选择分类: 全部</option>
                <option>餐饮</option>
                <option>超市</option>
                <option>租车</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-black p-4 rounded-xl border border-white/5 group hover:border-[#D4AF37]/30 transition-all">
                <img src={`https://picsum.photos/id/${n + 20}/300/200`} alt="Merchant" className="w-full h-32 object-cover rounded-lg mb-4 opacity-70 group-hover:opacity-100" />
                <h5 className="font-bold text-sm mb-1">合作商家 {n}</h5>
                <p className="text-gray-500 text-[10px] mb-2">横店影城北门店</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D4AF37] font-bold text-xs">会员享 8.5 折</span>
                  <button className="text-[10px] bg-white/5 px-2 py-1 rounded hover:bg-white/10">查看详情</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;
