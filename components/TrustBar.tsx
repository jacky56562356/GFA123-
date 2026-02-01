
import React from 'react';

const TrustBar: React.FC = () => {
  const stats = [
    { label: '认证机构', value: '500+' },
    { label: '认证人才', value: '12,000+' },
    { label: '扶持项目', value: '85' },
    { label: '合作商家', value: '1,200+' },
  ];

  return (
    <div className="bg-[#111] py-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => window.location.hash = '#/certification'}
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-full font-bold text-sm"
          >
            证书验证入口 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
