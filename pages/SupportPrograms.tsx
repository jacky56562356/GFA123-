
import React, { useState, useRef } from 'react';
import { SUPPORT_PROGRAMS } from '../constants';
import { SupportProgram } from '../types';

const SupportPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<SupportProgram | null>(null);
  const [infoProgram, setInfoProgram] = useState<SupportProgram | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (prog: SupportProgram) => {
    setSelectedProgram(prog);
    // Modal opens, so no need to scroll to section, but keeping logic for modal accessibility
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedProgram(null);
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-black mb-6 tracking-[0.3em] uppercase bg-[#D4AF37]/10">
            For Next Generation Creators
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 gold-gradient tracking-tighter">扶持毕业生计划</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            我们不仅仅是提供资源，更是你的项目合伙人。GFA 致力于让每一份才华都不被资源所限，助力青年影人跨越职业门槛。
          </p>
        </header>

        <div className="space-y-20">
          {SUPPORT_PROGRAMS.map((prog, idx) => {
            const progress = (prog.acceptedSpots / prog.totalSpots) * 100;
            const remaining = prog.totalSpots - prog.acceptedSpots;

            return (
              <div 
                key={prog.id} 
                className={`flex flex-col group/card ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-stretch bg-[#0a0a0a] rounded-[56px] border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-700 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-5/12 relative overflow-hidden bg-[#111] flex items-center justify-center min-h-[400px] cursor-pointer" onClick={() => setInfoProgram(prog)}>
                  <div className="text-[14rem] opacity-20 group-hover/card:scale-110 transition-transform duration-1000 grayscale group-hover/card:grayscale-0">{prog.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="text-[10px] gold-bg text-black px-3 py-1.5 rounded-lg font-black uppercase tracking-[0.2em] mb-4 inline-block shadow-xl">GFA Exclusive Support</span>
                     <h2 className="text-4xl font-black text-white leading-tight">{prog.title}</h2>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-400 mb-10 text-xl leading-relaxed font-light">{prog.description}</p>
                    
                    {/* Progress Tracker */}
                    <div className="mb-12 max-w-md">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">年度扶持席位进度 Capacity</span>
                        <span className="text-lg font-black text-[#D4AF37]">{prog.acceptedSpots} / {prog.totalSpots}</span>
                      </div>
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                        <div 
                          className="h-full gold-bg rounded-full transition-all duration-1500 ease-in-out shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <p className="text-xs text-gray-500 font-medium">已成功签约入选</p>
                        <p className="text-xs font-black text-[#D4AF37] uppercase tracking-tighter">仅剩 {remaining} 个名额</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mb-12 border-y border-white/5 py-10">
                       <div>
                          <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full gold-bg"></span>
                            提供支持 Offer
                          </h4>
                          <ul className="space-y-3">
                             {prog.provide.slice(0, 3).map((p, i) => (
                               <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                                 <span className="text-[#D4AF37] mt-1 text-xs">✔</span> {p.label}
                               </li>
                             ))}
                          </ul>
                       </div>
                       <div>
                          <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full gold-bg"></span>
                             预期产出 Output
                          </h4>
                          <p className="text-sm text-gray-300 leading-relaxed">{prog.output.label}</p>
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => handleApplyClick(prog)}
                      className="flex-grow gold-bg text-black px-12 py-6 rounded-3xl font-black text-xl hover:scale-[1.03] transition-all shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)] active:scale-95 flex items-center justify-center gap-4"
                    >
                      <span>立即申请此项目 Apply Now</span>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                    <button 
                      onClick={() => setInfoProgram(prog)}
                      className="px-10 py-6 bg-white/5 border border-white/10 rounded-3xl font-black text-gray-300 hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
                    >
                      查看详情 Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <section className="mt-40 p-16 md:p-24 bg-[#050505] rounded-[64px] border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05),transparent_70%)]"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-4xl font-black mb-8 italic">扶持透明公示 <span className="gold-gradient">Transparency</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                  GFA 扶持计划坚持公平、公正、公开的原则。所有入选项目均经过全球专家委员会 (GEC) 的严格闭门评审。我们每年定期公示扶持项目名单及资源分配明细。
                </p>
                <div className="space-y-4">
                   <button className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-2xl text-sm font-black hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                     下载 2024 年度扶持报告 (PDF)
                   </button>
                   <button className="w-full sm:w-auto px-8 py-4 bg-white/5 rounded-2xl text-sm font-black hover:bg-white/10 transition-all">往期入选作品在线展映</button>
                </div>
              </div>
              <div className="space-y-8">
                 <h3 className="text-xl font-black text-[#D4AF37] uppercase tracking-[0.2em]">常见问题 FAQ</h3>
                 {[
                   { q: '谁可以申请扶持计划？', a: '主要针对影视专业应届毕业生，以及从业3年以内的独立影人团队。' },
                   { q: '申请是否有费用？', a: '基础申请完全免费。如通过初审进入深度复审，可能会有小额背景调查行政费。' },
                   { q: 'GFA 会占有作品版权吗？', a: '不占有。创作者拥有作品 100% 版权，GFA 仅保留非商业宣传授权。' }
                 ].map((faq, i) => (
                   <div key={i} className="border-b border-white/5 pb-8 group">
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{faq.q}</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>

      {/* Program Details Modal */}
      {infoProgram && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/98 backdrop-blur-xl" onClick={() => setInfoProgram(null)}></div>
          <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[48px] border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
            <div className="p-10 md:p-20">
              <div className="flex justify-between items-start mb-16">
                <div className="flex items-center gap-10">
                  <span className="text-9xl">{infoProgram.icon}</span>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black gold-gradient tracking-tighter mb-4">{infoProgram.title}</h2>
                    <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed">{infoProgram.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setInfoProgram(null)}
                  className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 group"
                >
                  <svg className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16">
                <section>
                  <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs mb-8 pb-4 border-b border-[#D4AF37]/20">支持详情 Provide & Details</h3>
                  <div className="space-y-10">
                    {infoProgram.provide.map((p, i) => (
                      <div key={i} className="group">
                        <h4 className="text-white font-black text-lg group-hover:text-[#D4AF37] transition-colors flex items-center gap-4">
                           <span className="w-2 h-2 rounded-full gold-bg"></span>
                           {p.label}
                        </h4>
                        <p className="text-gray-500 text-sm mt-3 ml-6 leading-relaxed font-light italic">{p.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <div className="space-y-16">
                  <section>
                    <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs mb-8 pb-4 border-b border-[#D4AF37]/20">预期交付产出 Deliverables</h3>
                    <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 group hover:border-[#D4AF37]/30 transition-all">
                      <h4 className="text-white font-black text-2xl mb-4">{infoProgram.output.label}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{infoProgram.output.detail}</p>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.3em] text-xs mb-8 pb-4 border-b border-[#D4AF37]/20">申请材料清单 Checklist</h3>
                    <div className="space-y-5">
                      {infoProgram.checklist.map((item, i) => (
                        <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-all">
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-black group-hover:bg-[#D4AF37] group-hover:text-black transition-all flex-shrink-0">
                             {i + 1}
                           </div>
                           <div>
                             <h4 className="text-gray-200 font-black text-base">{item.label}</h4>
                             <p className="text-gray-500 text-xs mt-1 leading-relaxed font-light">{item.detail}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-white/5">
                <button 
                  onClick={() => {
                    setInfoProgram(null);
                    setSelectedProgram(infoProgram);
                  }}
                  className="flex-grow gold-bg text-black py-6 rounded-3xl font-black text-2xl hover:scale-[1.02] transition-transform active:scale-95 shadow-2xl shadow-[#D4AF37]/20"
                >
                  立即在线申请 Apply Now
                </button>
                <button 
                  onClick={() => setInfoProgram(null)}
                  className="px-12 py-6 bg-white/5 border border-white/10 rounded-3xl font-black text-gray-400 hover:text-white hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                >
                  返回列表 Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Application Form Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setSelectedProgram(null)}></div>
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-[56px] border border-[#D4AF37]/30 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="p-10 md:p-16">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">
                     <span className="text-[#D4AF37]">扶持申请:</span><br/> {selectedProgram.title.split(' ')[0]}
                  </h2>
                  <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.3em] font-black">GFA Graduate Support Program Application Form</p>
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
                >
                  <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitted ? (
                <div className="py-32 text-center">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-500/30">
                    <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-black mb-6">申请提交成功!</h3>
                  <p className="text-gray-400 text-xl font-light leading-relaxed">
                    联盟专家评审委员会将在 5-7 个工作日内完成初步方案评审。<br/>初审结果将通过邮件及系统站内信即时通知。
                  </p>
                  <button onClick={() => setSelectedProgram(null)} className="mt-16 px-12 py-5 gold-bg text-black rounded-full font-black text-lg shadow-xl shadow-[#D4AF37]/20 hover:scale-105 transition-all">关闭并返回主页</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 max-h-[65vh] overflow-y-auto pr-6 custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">项目全称 Project Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 outline-none transition-all text-white placeholder:text-gray-700 font-bold" placeholder="请输入作品名称" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">作品类型 Project Type</label>
                      <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] outline-none transition-all text-white appearance-none cursor-pointer font-bold">
                        <option value="" disabled selected>选择类型</option>
                        <option>剧情短片 Short Film</option>
                        <option>院线长片 Feature Film</option>
                        <option>纪录片 Documentary</option>
                        <option>动画片 Animation</option>
                        <option>商业/MV Commercial</option>
                        <option>毕业联考作品 Thesis</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">团队核心成员 Team Information</label>
                    <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] outline-none transition-all h-32 resize-none text-white placeholder:text-gray-700 font-medium text-sm leading-relaxed" placeholder="列出导演、摄影、制片等核心成员姓名及其过往履历或作品集链接..."></textarea>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">剧本梗概 Script Synopsis</label>
                    <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] outline-none transition-all h-48 resize-none text-white placeholder:text-gray-700 font-medium text-sm leading-relaxed" placeholder="简述故事情节、核心矛盾及创作初衷（500字左右最佳）..."></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">预估总预算 Budget (CNY)</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] outline-none transition-all text-white placeholder:text-gray-700 font-bold" placeholder="例如: 150,000" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">拍摄计划 Shooting Plan</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#D4AF37] outline-none transition-all text-white placeholder:text-gray-700 font-bold" placeholder="预计拍摄起始日期及总天数" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="block text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] border-b border-white/5 pb-3">具体资源扶持需求 Specific Resource Needs</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {[
                        { id: 'studio', label: '专业影棚支持 Studio' },
                        { id: 'gear', label: '摄影/灯光设备 Equipment' },
                        { id: 'post', label: '后期剪辑工作站 Post' },
                        { id: 'grading', label: '达芬奇专业调色 Color' },
                        { id: 'sound', label: '杜比音效合成 Sound' },
                        { id: 'vfx', label: '特效合成支持 VFX' },
                        { id: 'transport', label: '剧组转运车辆 Vehicle' },
                        { id: 'catering', label: '剧组生活保障 Catering' }
                      ].map((need) => (
                        <label key={need.id} className="flex items-center p-5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all group">
                          <input type="checkbox" className="mr-5 w-6 h-6 accent-[#D4AF37] rounded-md border-white/20 bg-black cursor-pointer" />
                          <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight">{need.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-12 border-t border-white/5 sticky bottom-0 bg-[#0d0d0d] pb-2">
                    <button type="submit" className="w-full gold-bg text-black py-6 rounded-3xl font-black text-2xl shadow-2xl shadow-[#D4AF37]/30 hover:scale-[1.01] transition-transform active:scale-95">
                      确认并提交正式申请 Submit Application
                    </button>
                    <p className="text-center text-[10px] text-gray-600 mt-6 uppercase tracking-[0.3em] font-black">Submission indicates agreement with GFA Professional Standards</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
      `}</style>
    </div>
  );
};

export default SupportPrograms;
