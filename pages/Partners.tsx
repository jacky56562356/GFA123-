
import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 gold-gradient">商家合作计划</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            连接精准的影视从业者与数以万计的演艺家庭，让您的品牌成为行业生态的一部分。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-black mb-8">为什么选择与 GFA 合作?</h2>
            <div className="space-y-6">
              {[
                { title: '品牌背书', desc: '获得 GFA Partner 专属认证标识，提升品牌专业度与信任度。' },
                { title: '精准流量', desc: '直接接触影视主创、演员、模特及其背后极具消费能力的家庭。' },
                { title: '数据反馈', desc: '通过会员系统获取核销数据，优化营销策略。' },
                { title: '联合推广', desc: '参与GFA年度颁奖礼、影展等重大行业活动曝光。' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gold-bg flex items-center justify-center text-black font-black">✓</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-8 rounded-[40px] border-[#D4AF37]/20">
            <h3 className="text-2xl font-black mb-6">入驻申请</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="商家名称" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] outline-none" />
                <input type="text" placeholder="联系人" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] outline-none" />
              </div>
              <input type="email" placeholder="电子邮箱" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] outline-none" />
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] outline-none text-gray-400">
                <option>合作类别: 餐饮/生活</option>
                <option>合作类别: 影棚/器材</option>
                <option>合作类别: 法律/保险</option>
                <option>合作类别: 交通/住宿</option>
              </select>
              <textarea placeholder="优惠政策建议 (如：会员享8折)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] outline-none h-32"></textarea>
              <button className="w-full gold-bg text-black py-4 rounded-xl font-black hover:scale-[1.02] transition-all">提交申请</button>
            </form>
          </div>
        </div>

        {/* Tier Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { level: 'Basic', perks: ['入驻福利地图', '基础信息展示', '专属Partner标识'], price: '免费入驻' },
            { level: 'Preferred', perks: ['地图优先展示', '多重优惠发布', '季度活动曝光', '数据分析报表'], price: '联系咨询', hot: true },
            { level: 'Premium', perks: ['联合品牌活动', '独家权益频道', '会员专属PUSH', '年度盛典入席'], price: '深度合作' },
          ].map((tier, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${tier.hot ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-white/5 bg-[#111]'} text-center`}>
              <h4 className="text-xl font-black mb-4">{tier.level}</h4>
              <ul className="space-y-3 mb-8 text-sm text-gray-400">
                {tier.perks.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <div className="text-[#D4AF37] font-black">{tier.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
