
import React, { useState } from 'react';

interface CertDetail {
  label: string;
  detail: string;
}

interface CertificationCategory {
  title: string;
  icon: string;
  summary: string;
  standards: CertDetail[];
  checklist: CertDetail[];
}

const Certification: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId) return;
    setVerifying(true);
    setResult(null);

    // 模拟全球证书数据库检索
    setTimeout(() => {
      setVerifying(false);
      const normalizedId = certId.toUpperCase().trim();
      // 演示用：模拟特定 ID 的成功结果
      if (normalizedId === 'GFA888' || normalizedId === 'GFA-JACKY-2025' || normalizedId === 'GFA001') {
        setResult({
          status: 'Active / 有效',
          name: normalizedId === 'GFA001' ? 'GFA 创始委员会' : 'Jacky Chen (Jacky哥)',
          type: '联盟金牌认证 (GFA Gold Certification)',
          issued: '2025-01-15',
          expiry: '2027-01-15',
          record: '无违规记录 / 背景调查完整',
          region: 'Global / Global Alliance'
        });
      } else {
        setResult({ error: '证书编号未找到。请核对编号是否正确，或该证书由于严重违规已被联盟永久吊销。' });
      }
    }, 1500);
  };

  const categories: CertificationCategory[] = [
    {
      title: '演员认证 (Talent Verified)',
      icon: '🎭',
      summary: '面向具备专业表演功底与职业素养的高级演艺人才，确立个人品牌公信力与行业优先级。',
      standards: [
        { label: '专业能力审计', detail: '通过 GFA 评审委员会对其 Showreel 的技术指标（台词、情感张力）进行盲审。' },
        { label: '职业信用核查', detail: '针对过往 3-5 年内合作剧组进行背景回访，确保无严重违约或现场不当行为。' },
        { label: '合规准则认同', detail: '必须签署并承诺遵守《GFA 演艺人员职业道德准则》及《反歧视声明》。' }
      ],
      checklist: [
        { label: '高清作品集', detail: '至少 3 段不同维度的表演实录片段。' },
        { label: '行业推荐信', detail: '两位已认证导演或制片人的实名推荐。' },
        { label: '身份核验', detail: '政府签发的有效证件及经纪合约备案。' }
      ]
    },
    {
      title: '机构认证 (Agency/School)',
      icon: '🏢',
      summary: '面向经纪公司与培训机构，验证其合法经营地位与教学/经纪流程的规范性。',
      standards: [
        { label: '资质合法性', detail: '持有演出经纪许可证，且近三年无重大工商处罚记录。' },
        { label: '未成年保护', detail: '必须设有专职的未成年人安全督察岗，并具备符合标准的试镜环境。' },
        { label: '合约透明度', detail: '抽查合约模板，确保抽成比例及结算周期符合行业公允范围。' }
      ],
      checklist: [
        { label: '许可证副本', detail: '政府颁发的行业准入相关证件。' },
        { label: '职员背景调查', detail: '核心管理层及教学、经纪人的年度背景报告。' },
        { label: '场地安全证明', detail: '办公及教学场地需符合消防及安全标准。' }
      ]
    },
    {
      title: '试镜流程认证 (Audition)',
      icon: '🎞️',
      summary: '面向选角工作室，确保试镜环境安全、数据隐私受控且反馈流程专业透明。',
      standards: [
        { label: '环境安全性', detail: '严禁在酒店房间、私人公寓等非商业公共场所进行试镜。' },
        { label: '隐私保护', detail: '试镜录像必须经过授权，且在项目结束后有明确的销毁机制。' },
        { label: '反馈硬性要求', detail: '承诺在 72 小时内向投递人才反馈录用或未录取的明确信息。' }
      ],
      checklist: [
        { label: '场地使用权', detail: '长期或临时的专业摄影棚使用合同。' },
        { label: '安全官任命', detail: '负责管理试镜视频安全及销毁流程的具体责任人。' },
        { label: '操作手册', detail: '包含紧急情况处理、投诉渠道告知的操作指南。' }
      ]
    },
    {
      title: '赛事/活动认证 (Event)',
      icon: '🏆',
      summary: '面向电影节、奖项及选秀活动，验证其评审机制的公平性与执行透明度。',
      standards: [
        { label: '评审独立性', detail: '评审团必须具备 50% 以上的行业外部专家比例，且执行回避原则。' },
        { label: '奖项真实性', detail: '获奖名单必须在指定渠道公示不少于 30 天，接受社会监督。' },
        { label: '资金透明度', detail: '针对收费赛事，必须公示报名费流向用途及奖金保障。' }
      ],
      checklist: [
        { label: '评审章程', detail: '详细的初审、复审、终审评分细则及投票逻辑说明。' },
        { label: '合规批文', detail: '线下活动的政府报备或行业备案文件。' },
        { label: '历史名录', detail: '过往获奖人员跟踪及奖项落地证明。' }
      ]
    },
    {
      title: '项目认证 (Project)',
      icon: '🎥',
      summary: '面向特定影视项目，验证其制作闭环的专业性、资金到位情况与劳资保障。',
      standards: [
        { label: '资金监管', detail: '首笔制作款不低于总预算 30% 已入账，并接受联盟第三方监管。' },
        { label: '劳资保障', detail: '强制要求为全员购买不低于每人 100 万保额的意外保险。' },
        { label: '技术规格', detail: '项目输出格式需不低于 4K 工业标准，音效需符合 5.1 规范。' }
      ],
      checklist: [
        { label: '保单原件', detail: '覆盖拍摄全周期的全员保险清单。' },
        { label: '视觉蓝本', detail: '包含 Lookbook、制作计划表及核心主创资质。' },
        { label: '支付保障书', detail: '由出资方签署的保障底层人员薪酬的法律文书。' }
      ]
    }
  ];

  const processSteps = [
    { label: '在线申请', icon: '📝', desc: '提交基础身份信息' },
    { label: '材料初筛', icon: '🔍', desc: '核实资质与证书' },
    { label: '专家评审', icon: '⚖️', desc: '交叉验证专业技能' },
    { label: '现场/回访', icon: '📞', desc: '实地核验运营状态' },
    { label: '签发证书', icon: '📜', desc: '颁发加密数字证书' },
    { label: '年度复审', icon: '🔄', desc: '动态评估信用分值' },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-20 border-b border-white/5 bg-gradient-to-b from-black to-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-black mb-8 tracking-[0.4em] uppercase bg-[#D4AF37]/5">
            GFA AUTHORITY SYSTEM
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 gold-gradient tracking-tighter italic">认证体系</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            让可信的认证成为影视行业真正的通行证。GFA 执行最为严苛的年度动态审核机制，确保每一份证书都承载真实的公信力。
          </p>
        </div>
      </section>

      {/* Verification Widget - Section C */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="glass-panel p-10 md:p-20 rounded-[64px] border-[#D4AF37]/20 shadow-2xl">
            <h2 className="text-4xl font-black mb-4 text-center">证书全球真伪查询</h2>
            <p className="text-gray-500 text-center mb-12 text-sm uppercase tracking-widest font-bold">Input certificate ID / Scan QR code</p>
            
            <form onSubmit={handleVerify} className="space-y-8">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="输入证书编号 (例如: GFA888)"
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-[#D4AF37] outline-none transition-all text-xl font-mono tracking-widest"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={verifying}
                  className="gold-bg text-black px-12 py-6 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  {verifying ? '检索数据库...' : '立即验证 VERIFY'}
                </button>
              </div>

              {result && (
                <div className={`mt-10 p-1 rounded-[40px] border ${result.error ? 'bg-red-500/5 border-red-500/20' : 'bg-green-500/5 border-green-500/20'}`}>
                   {result.error ? (
                     <div className="p-10 text-center">
                       <h4 className="text-red-400 font-black text-xl mb-2">验证未通过</h4>
                       <p className="text-gray-500 text-sm italic">{result.error}</p>
                     </div>
                   ) : (
                     <div className="p-12">
                       <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-white/5 pb-10">
                         <div>
                           <p className="text-[10px] text-green-500 font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                             Verification Status: {result.status}
                           </p>
                           <h4 className="text-4xl font-black text-white">{result.name}</h4>
                         </div>
                         <div className="mt-6 md:mt-0">
                           <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Authorized By</p>
                           <p className="text-sm font-black text-[#D4AF37] italic">GFA GLOBAL FILM ALLIANCE</p>
                         </div>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div className="space-y-6">
                            <div><span className="text-gray-600 text-[10px] uppercase font-black tracking-widest block mb-2">认证类别 Category</span><span className="text-lg text-gray-200 font-bold">{result.type}</span></div>
                            <div><span className="text-gray-600 text-[10px] uppercase font-black tracking-widest block mb-2">记录 Compliance</span><span className="text-lg text-green-400 font-bold">{result.record}</span></div>
                         </div>
                         <div className="space-y-6">
                            <div><span className="text-gray-600 text-[10px] uppercase font-black tracking-widest block mb-2">有效期 Validity</span><span className="text-lg text-gray-200 font-bold">{result.issued} — {result.expiry}</span></div>
                            <div><span className="text-gray-600 text-[10px] uppercase font-black tracking-widest block mb-2">认证区域 Region</span><span className="text-lg text-gray-200 font-bold">{result.region}</span></div>
                         </div>
                       </div>
                     </div>
                   )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Categories Matrix - Section A */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center italic">认证类别矩阵 <span className="gold-gradient">CATEGORIES</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#080808] rounded-[48px] border border-white/5 overflow-hidden group shadow-2xl hover:border-[#D4AF37]/30 transition-all flex flex-col">
              <div className="p-12">
                <div className="flex items-center gap-8 mb-12">
                  <div className="text-7xl p-6 bg-white/5 rounded-[32px] group-hover:scale-110 transition-transform duration-700">{cat.icon}</div>
                  <div>
                    <h4 className="text-3xl font-black text-white group-hover:text-[#D4AF37] transition-colors">{cat.title}</h4>
                    <p className="text-gray-500 text-sm mt-2 font-light italic leading-relaxed">{cat.summary}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h5 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-[#D4AF37]/20 pb-4">硬性准则 Standards</h5>
                    <ul className="space-y-8">
                      {cat.standards.map((s, j) => (
                        <li key={j}>
                          <h6 className="text-sm font-bold text-gray-200">{s.label}</h6>
                          <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">{s.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-[#D4AF37]/20 pb-4">必备清单 Checklist</h5>
                    <ul className="space-y-4">
                      {cat.checklist.map((c, j) => (
                        <li key={j} className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black flex-shrink-0 text-[#D4AF37]">{j + 1}</div>
                          <div>
                            <h6 className="text-xs font-black text-gray-300 mb-1">{c.label}</h6>
                            <p className="text-[10px] text-gray-600 leading-snug">{c.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Process - Section B */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic">认证全流程 <span className="gold-gradient uppercase">The Process</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">每一个环节都经过严密设计，确保结果的可追溯性与行业公正性。</p>
          </div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:border-[#D4AF37]/50 transition-all duration-500 relative z-10">
                  {step.icon}
                </div>
                <div className="w-6 h-6 rounded-full gold-bg text-black flex items-center justify-center text-[10px] font-black mb-4">0{i+1}</div>
                <h4 className="text-lg font-black text-white mb-1">{step.label}</h4>
                <p className="text-[10px] text-gray-600 leading-relaxed font-bold uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Enforcement - Section D */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-10 italic">行业准则与规范 <span className="gold-gradient">CODE OF CONDUCT</span></h2>
              <div className="space-y-10">
                {[
                  { title: '资料真实性条款', detail: '所有申请人必须确保提交的所有证明（学历、署名、合同）真实。造假将触发永久黑名单。' },
                  { title: '职业道德规范', detail: '认证人才在拍摄现场必须遵守职业操守，严禁任何形式的骚扰、霸凌或无故缺勤行为。' },
                  { title: '未成年人特别保护', detail: '涉及未成年人的活动，必须严格执行监护人全程陪同制度，遵循 GFA 安全手册。' },
                  { title: '反歧视与平等准则', detail: '严禁基于宗教、种族、性别取向的歧视。GFA 认证是平等协作的专业保障。' }
                ].map((rule, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37]/30 pl-8 group">
                    <h4 className="text-xl font-black mb-4 group-hover:text-[#D4AF37] transition-colors">0{i+1} {rule.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{rule.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="glass-panel p-12 md:p-16 rounded-[64px] border-red-500/20 bg-red-500/5 h-full">
                <h3 className="text-3xl font-black mb-8 text-red-400">违规处理与黑名单机制</h3>
                <div className="space-y-8">
                   <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg">惩戒阶梯体系</h4>
                      <ul className="space-y-6">
                        <li className="flex gap-4">
                          <span className="text-yellow-500 font-bold font-mono text-xl">01</span>
                          <p className="text-xs text-gray-500 leading-relaxed">警告与内部公示：针对轻微不当行为进行记录并责令限期整改。</p>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-orange-500 font-bold font-mono text-xl">02</span>
                          <p className="text-xs text-gray-500 leading-relaxed">证书临时冻结：暂停认证身份 3-12 个月，期间无法参与任何扶持项目。</p>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-red-500 font-bold font-mono text-xl">03</span>
                          <p className="text-xs text-gray-500 leading-relaxed">永久吊销黑名单：撤销认证身份，并在联盟官网及合作伙伴系统永久公示。</p>
                        </li>
                      </ul>
                   </div>
                </div>
                <button className="mt-12 w-full py-5 border border-red-500/30 rounded-2xl text-red-500 font-black text-sm hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest">
                  举报违规行为 Report Violation
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 italic">准备好成为<span className="gold-gradient uppercase tracking-widest">认证的专业力量</span>了吗？</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
          <button className="gold-bg text-black px-16 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-[#D4AF37]/20">
            开始申请正式认证
          </button>
          <button className="bg-white/5 border border-white/20 text-white px-16 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all">
            下载申请指南 (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Certification;
