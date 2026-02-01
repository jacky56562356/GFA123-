
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
    setTimeout(() => {
      setVerifying(false);
      const normalizedId = certId.toUpperCase().trim();
      if (normalizedId === 'GFA888' || normalizedId === 'GFA-JACKY-2025') {
        setResult({
          status: 'Active',
          name: 'Jacky Chen (Jacky哥)',
          type: '联盟金牌认证演员 (GFA Gold Talent)',
          issued: '2025-01-15',
          expiry: '2027-01-15',
          record: '无违规记录 / 背景调查完整',
          region: 'Greater China'
        });
      } else {
        setResult({ error: '证书编号未找到或已由于违规被永久吊销。' });
      }
    }, 1200);
  };

  const categories: CertificationCategory[] = [
    {
      title: '金牌演员认证 (Gold Talent)',
      icon: '🌟',
      summary: '面向具备专业表演功底与职业素养的高级演艺人才。',
      standards: [
        { label: '行业资历审计', detail: '验证申请人参与过的不少于3个主要影视项目的IMDb/豆瓣/猫眼署名记录。' },
        { label: '表演质量评估', detail: '由GFA专家委员会匿名审核申请人的Showreel，评估其情绪控制、台词功底及镜头表现力。' },
        { label: '职业信用调查', detail: '核实其过往合同执行情况，确保无罢演、欺诈或其他严重违约记录。' },
        { label: '持续学习承诺', detail: '认证会员需每年参加至少2场GFA组织的行业大师课或合规培训。' }
      ],
      checklist: [
        { label: '高清表演集锦 (Showreel)', detail: '3-5分钟内包含不同性格侧面的作品剪辑。' },
        { label: '实名身份证明', detail: '身份证或护照高清扫描件。' },
        { label: '项目署名证明', detail: '包含其姓名的片头/片尾截图或合法的合同节选。' }
      ]
    },
    {
      title: '优选机构认证 (Agency)',
      icon: '🏢',
      summary: '面向经纪公司、培训学校等机构，确其合法经营与透明运营。',
      standards: [
        { label: '经营资质核验', detail: '确保持有有效的企业营业执照、办学许可证（如适用）及演出经纪机构许可证。' },
        { label: '佣金机制审查', detail: '审计机构的标准合同，确保佣金分配比例公平、透明且无隐形收费陷阱。' },
        { label: '未成年保护合规', detail: '针对涉及未成年的机构，必须具备物理环境安全标准及专职监护人员。' },
        { label: '纠纷处理能力', detail: '机构需具备完善的艺人/学生申诉处理渠道，并接受GFA年度仲裁审计。' }
      ],
      checklist: [
        { label: '演出经纪许可证', detail: '由相关政府部门颁发的有效经营证件。' },
        { label: '标准合同版本', detail: '机构提供给签约对象的所有法律文本副本。' },
        { label: '物理场地报告', detail: '包含办公/教学场地的消防合格证及实景图。' }
      ]
    },
    {
      title: '标准试镜认证 (Audition)',
      icon: '🎞️',
      summary: '面向选角工作室，确保试镜环境安全、过程专业且数据受保护。',
      standards: [
        { label: '试镜环境安全', detail: '严禁在酒店、私人公寓等非公开场所进行试镜，场所必须具备基本的安全出口。' },
        { label: '反馈周期机制', detail: '承诺所有参与试镜的人才在7个工作日内收到“通过/拒绝/待定”的明确反馈。' },
        { label: '肖像权与数据保护', detail: '试镜录像必须加密存储，仅供本项目选角使用，严禁私自外流或商用。' },
        { label: '零歧视准则', detail: '试镜过程严禁涉及任何与角色需求无关的歧视性言行。' }
      ],
      checklist: [
        { label: '试镜场地合约', detail: '正规工作室、摄影棚或演艺空间的租赁/持有证明。' },
        { label: '选角方案公示', detail: '明确的角色描述及选角标准说明文件。' },
        { label: '数据管理制度', detail: '描述试镜录像及资料如何安全存储及销毁的文件。' }
      ]
    },
    {
      title: '专业项目认证 (Project)',
      icon: '🎥',
      summary: '面向电影/剧集项目，验证其制作闭环的专业性与抗风险能力。',
      standards: [
        { label: '预算合规性审计', detail: '对项目的总投资与预算分配进行审计，确保制作资金真实且足以覆盖拍摄全周期。' },
        { label: '核心主创背书', detail: '验证导演、摄影、美术等核心岗位的过往作品集与专业资质。' },
        { label: '劳资保障协议', detail: '项目方必须签署《GFA劳资保障协议》，优先保障一线制作人员的基本薪酬与工时。' },
        { label: '后期质量对标', detail: '承诺项目产出的技术指标符合主流流媒体或院线播映标准。' }
      ],
      checklist: [
        { label: '项目立项书 (Deck)', detail: '包含剧本大纲、团队信息及详细发行计划。' },
        { label: '保险保单证明', detail: '覆盖拍摄全过程的剧组人员及器材保险单。' },
        { label: '资金托管凭证', detail: '由联盟认可的第三方机构出具的资金在位证明。' }
      ]
    },
    {
      title: '赛事认证 (Event)',
      icon: '🏆',
      summary: '面向影展与赛事，确评审机制防操纵且奖项透明。',
      standards: [
        { label: '评审团资质公开', detail: '评审团成员必须具备公认的行业地位，且名单在赛事启动前向全社会公示。' },
        { label: '评选流程闭环', detail: '所有选票、打分记录均留档备查，确保评选过程无第三方干预。' },
        { label: '奖金/荣誉保障', detail: '承诺所有颁发的奖金、奖杯及推荐信均能按时、足额发放到位。' },
        { label: '公平竞争机制', detail: '严禁任何形式的买奖行为，发现违规将永久撤销赛事认证并全网通报。' }
      ],
      checklist: [
        { label: '赛事章程 (By-laws)', detail: '明确参赛资格、奖项设置及评审规则的文件。' },
        { label: '往期获奖公示', detail: '提供前两届赛事（如有）的获奖名单及兑现证明。' },
        { label: '评审独立声明', detail: '评审团全体成员签署的无利益冲突声明。' }
      ]
    },
    {
      title: '家长/监护人实名认证',
      icon: '👨‍👩‍👧',
      summary: '面向未成年人才家长，确护其作为第一监护人的合规控制权。',
      standards: [
        { label: '监护权关系核验', detail: '通过公安/户籍系统验证家长与未成年人才的法律关系。' },
        { label: '合同二次授权权', detail: '所有涉及未成年的演出合同、肖像授权必须经由认证家长的账号进行终审确认。' },
        { label: '学业保障承诺', detail: '家长需监督剧组执行《GFA未成年人工作时间限制》，确保不侵犯孩子的受教育权。' },
        { label: '现场心理监测', detail: '家长需定期反馈孩子的现场工作状态，联盟提供专业的心理专家支持。' }
      ],
      checklist: [
        { label: '户口本/出生证', detail: '证明监护关系的高清彩色扫描件。' },
        { label: '监护人身份证件', detail: '家长的合法有效身份证件。' },
        { label: '未成年人肖像权授权', detail: '签署GFA标准的未成年人从业同意书。' }
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-24">
          <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#D4AF37]/30">
            <svg className="w-10 h-10 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 gold-gradient italic">权威认证体系</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            GFA 认证不仅是行业能力的证明，更是从业者职业素养、安全规范及公信力的全球背书。我们执行最为严苛的年度动态审核机制。
          </p>
        </header>

        {/* Verification Widget */}
        <div className="max-w-3xl mx-auto relative mb-40 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-white/10 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-panel p-10 md:p-16 rounded-[40px] shadow-2xl overflow-hidden border-[#D4AF37]/20">
            <h3 className="text-3xl font-black mb-10 text-center">GFA 证书在线全球验证</h3>
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="输入证书编号 (e.g. GFA888)"
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all text-lg font-mono tracking-widest"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                />
                <button
                  type="submit"
                  className="gold-bg text-black px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  disabled={verifying}
                >
                  {verifying ? '正在验证核心库...' : '立即验证'}
                </button>
              </div>

              {result && (
                <div className={`mt-8 animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden rounded-3xl border ${result.error ? 'bg-red-500/5 border-red-500/20' : 'bg-green-500/5 border-green-500/20'}`}>
                   {result.error ? (
                     <div className="p-8 text-center">
                       <p className="text-red-400 font-bold mb-2">验证失败</p>
                       <p className="text-gray-400 text-sm">{result.error}</p>
                     </div>
                   ) : (
                     <div className="p-10">
                       <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
                         <div>
                           <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-1">Status: {result.status}</p>
                           <h4 className="text-2xl font-black text-white">{result.name}</h4>
                         </div>
                         <div className="text-right">
                           <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Verified By</p>
                           <p className="text-xs font-bold text-[#D4AF37]">GFA Global Committee</p>
                         </div>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-medium">
                         <div className="space-y-4">
                            <div><span className="text-gray-500 text-[10px] uppercase font-bold block mb-1">认证类别 Category</span><span className="text-gray-200">{result.type}</span></div>
                            <div><span className="text-gray-500 text-[10px] uppercase font-bold block mb-1">服务区域 Region</span><span className="text-gray-200">{result.region}</span></div>
                         </div>
                         <div className="space-y-4">
                            <div><span className="text-gray-500 text-[10px] uppercase font-bold block mb-1">有效期 Validity</span><span className="text-gray-200">{result.issued} 至 {result.expiry}</span></div>
                            <div><span className="text-gray-500 text-[10px] uppercase font-bold block mb-1">合规记录 Compliance</span><span className="text-green-400 font-bold">{result.record}</span></div>
                         </div>
                       </div>
                       <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                         <button className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em] font-black">下载加密数字报表 Download PDF Report</button>
                       </div>
                     </div>
                   )}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Categories Detail Section */}
        <div className="mb-40">
           <h2 className="text-4xl md:text-5xl font-black mb-16 text-center italic">认证标准与准则 <span className="gold-gradient uppercase tracking-tighter">Standards & Guidelines</span></h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {categories.map((cat, i) => (
                <div 
                  key={i} 
                  className="bg-[#080808] rounded-[48px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/30 flex flex-col group/card shadow-2xl"
                >
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-10">
                      <div className="text-6xl p-5 bg-white/5 rounded-[32px] group-hover/card:scale-110 transition-transform duration-500">{cat.icon}</div>
                      <div>
                        <h4 className="text-2xl font-black text-white group-hover/card:text-[#D4AF37] transition-colors">{cat.title}</h4>
                        <p className="text-gray-500 text-sm mt-1 font-light italic">{cat.summary}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
                      <div>
                        <h5 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border-b border-[#D4AF37]/20 pb-3">准则详情 Entails</h5>
                        <ul className="space-y-6">
                          {cat.standards.map((s, j) => (
                            <li key={j} className="group/item">
                              <h6 className="text-sm font-bold text-gray-200 group-hover/item:text-[#D4AF37] transition-colors flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0"></span>
                                {s.label}
                              </h6>
                              <p className="text-[11px] text-gray-500 mt-2 ml-3.5 leading-relaxed font-light">{s.detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border-b border-[#D4AF37]/20 pb-3">申请材料清单 Checklist</h5>
                        <ul className="space-y-4">
                          {cat.checklist.map((c, j) => (
                            <li key={j} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-default">
                              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black flex-shrink-0 text-[#D4AF37]">{j + 1}</div>
                              <div>
                                <h6 className="text-xs font-black text-gray-300">{c.label}</h6>
                                <p className="text-[10px] text-gray-600 mt-1 leading-tight">{c.detail}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                       <button className="gold-bg text-black px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-[#D4AF37]/20 w-full sm:w-auto">
                         立即申请此项认证 Apply Now
                       </button>
                       <button className="text-[10px] text-gray-500 hover:text-white font-black uppercase tracking-widest transition-colors flex items-center gap-3 group/doc">
                          完整指南文件 (PDF) Full Guidelines
                          <svg className="w-4 h-4 group-hover/doc:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                       </button>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Violation & Safety */}
        <div className="bg-red-500/5 border border-red-500/20 p-12 md:p-20 rounded-[64px] flex flex-col md:flex-row items-center gap-16 mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full"></div>
           <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/30">
             <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
             </svg>
           </div>
           <div className="relative z-10">
             <h3 className="text-3xl font-black mb-6">合规调查与违规撤销机制</h3>
             <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
               GFA 执行严格的一票否决制。任何涉及身份造假、未成年人保护违规、欺诈、或者严重职业道德失范的被认证者，其证书将被即时吊销并列入行业黑名单。我们接受来自全球的实名投诉，并承诺对举报人身份严格保密。
             </p>
             <div className="flex flex-wrap gap-6">
               <button className="bg-red-500 text-white px-10 py-5 rounded-2xl text-base font-black hover:bg-red-600 transition-colors shadow-2xl shadow-red-500/20">实名投诉入口 Report a Violation</button>
               <button className="border border-white/20 px-10 py-5 rounded-2xl text-base font-black hover:bg-white/5 transition-all">查看全网黑名单公示 Blacklist</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
