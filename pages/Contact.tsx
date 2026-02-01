
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 gold-gradient">联系我们</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            无论您是创作者、经纪机构还是合作伙伴，GFA的大门永远向您敞开。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold mb-4">个人加入</h3>
            <p className="text-gray-500 text-sm mb-6">适合演员、模特、创作者或家长</p>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold">开始申请</button>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-center border-[#D4AF37]/50">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-4">机构加入</h3>
            <p className="text-gray-500 text-sm mb-6">适合经纪公司、培训学校、制作公司</p>
            <button className="w-full py-3 gold-bg text-black rounded-xl font-bold">机构入驻</button>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4">合作/赞助</h3>
            <p className="text-gray-500 text-sm mb-6">适合商家、政府部门、影棚资源方</p>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold">提交合作</button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black">全球办公网点</h2>
            <div className="space-y-6">
              {[
                { city: '北京', addr: '北京市朝阳区电影产业园 A1栋', email: 'bj@gfa-alliance.org' },
                { city: '上海', addr: '上海市静安区影视创新基地 3层', email: 'sh@gfa-alliance.org' },
                { city: '横店', addr: '浙江省东阳市横店影视城商务区', email: 'hd@gfa-alliance.org' },
              ].map((loc, i) => (
                <div key={i} className="border-l-2 border-[#D4AF37] pl-6 py-2">
                  <h4 className="font-bold text-lg">{loc.city}</h4>
                  <p className="text-gray-500 text-sm mb-1">{loc.addr}</p>
                  <p className="text-[#D4AF37] text-xs font-mono">{loc.email}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-6">发送咨询</h3>
            <form className="space-y-4">
              <input type="text" placeholder="您的姓名" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#D4AF37] outline-none" />
              <input type="email" placeholder="您的邮箱" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#D4AF37] outline-none" />
              <textarea placeholder="您想咨询的内容..." className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#D4AF37] outline-none h-32"></textarea>
              <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-all">发送消息</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
