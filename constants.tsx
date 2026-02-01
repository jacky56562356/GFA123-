
import React from 'react';
import { NavItem, SupportProgram, Partner } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页 Home', path: '/' },
  { label: '关于 About', path: '/about' },
  { label: '认证 Certification', path: '/certification' },
  { label: '扶持计划 Support', path: '/support' },
  { label: '试镜人才 Casting', path: '/casting' },
  { label: '会员福利 Membership', path: '/membership' },
  { label: '商家合作 Partners', path: '/partners' },
  { label: '联系我们 Contact', path: '/contact' }
];

export const SUPPORT_PROGRAMS: SupportProgram[] = [
  {
    id: 'grad-film',
    title: '毕业作品扶持 (Graduate Film)',
    description: '助力影视专业毕业生完成高质量作品，打破从校园到工业界的最后一道门槛。',
    provide: [
      { label: '剧本/分镜辅导', detail: '由资深编剧和导演提供一对一咨询，优化故事结构与视觉表现力。' },
      { label: '制作统筹模板', detail: '提供工业化标准的剧组管理工具包，包括通告单、预算表及版权协议模板。' },
      { label: '拍摄资源对接', detail: '协助对接合适的演员经纪、摄影团队及特殊器材供应商。' },
      { label: '行业大咖点映', detail: '项目完成后，组织小规模内部试映会，邀请行业资深制片人进行点评。' }
    ],
    output: { label: '电影节标准短片', detail: '完成一部技术指标符合全球主流电影节投递要求的母版作品。' },
    checklist: [
      { label: '剧本梗概', detail: '500字以内的故事大纲，清晰阐述核心矛盾与立意。' },
      { label: '预算表', detail: '详细的开支计划，展示对资金使用的合理规划。' },
      { label: '团队名单', detail: '核心主创（导演、摄影、制片）的过往履历或作品集。' },
      { label: '拍摄计划', detail: '初步的拍摄周期表与选址意向。' }
    ],
    icon: '🎥',
    totalSpots: 30,
    acceptedSpots: 18
  },
  {
    id: 'post-vfx',
    title: '后期/VFX扶持 (Post & VFX)',
    description: '为极具潜力的独立短片提供顶尖的剪辑、调色、声音及特效合成支持。',
    provide: [
      { label: '4K达芬奇调色', detail: '使用行业顶尖调色系统，为影片建立独特的视觉风格与影调。' },
      { label: '杜比全景声混录', detail: '在专业混录棚完成声音后期，提供沉浸式的听觉体验。' },
      { label: 'VFX合成与包装', detail: '针对科幻或特效类短片，提供高质量的数字合成与动态包装。' },
      { label: 'DCP母版制作', detail: '制作符合院线放映标准的数字电影包（DCP）。' }
    ],
    output: { label: '专业级后期母版', detail: '获得一份包含完整混音及调色效果的工业级成品。' },
    checklist: [
      { label: '精剪小样', detail: '已完成画面粗剪的预览版本。' },
      { label: '视觉参考', detail: '期望的调色风格或特效样片参考。' },
      { label: '资产清单', detail: '需要后期处理的具体镜头及声音需求清单。' }
    ],
    icon: '💻',
    totalSpots: 15,
    acceptedSpots: 12
  },
  {
    id: 'studio-gear',
    title: '影棚与设备支持 (Studio & Gear)',
    description: '通过GFA合作影棚矩阵与设备库，大幅降低青年剧组的硬件成本。',
    provide: [
      { label: 'LED虚拟拍摄时段', detail: '在顶级虚拟制片影棚免费使用LED背景墙，节省外景与转场成本。' },
      { label: '全套阿莱灯光组', detail: '租借包含ARRI及Aputure主流型号在内的专业灯光套装。' },
      { label: '无线图传与监看', detail: '提供高清晰度、低延迟的现场无线监看方案。' },
      { label: '专业场务用车', detail: '提供剧组专用的厢式货车或载人用车，简化物流。' }
    ],
    output: { label: '零成本硬件保障', detail: '通过免费或极低租金获得原本昂贵的专业影视硬件支持。' },
    checklist: [
      { label: '设备清单', detail: '基于分镜或摄影师需求的详细硬件租赁清单。' },
      { label: '场地申请', detail: '针对特定日期和时长的影棚使用申请书。' },
      { label: '保险证明', detail: '有效的剧组拍摄保险单（GFA可协助办理）。' }
    ],
    icon: '🎬',
    totalSpots: 50,
    acceptedSpots: 42
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Gold Studio', category: '顶级影棚', logo: 'https://picsum.photos/id/10/200/100' },
  { name: 'Vision Rental', category: '器材租赁', logo: 'https://picsum.photos/id/11/200/100' },
  { name: 'Film Insurance Pro', category: '影视保险', logo: 'https://picsum.photos/id/12/200/100' },
  { name: 'Global Catering', category: '剧组餐饮', logo: 'https://picsum.photos/id/13/200/100' },
  { name: 'CineLaw', category: '法律咨询', logo: 'https://picsum.photos/id/14/200/100' },
  { name: 'Action Coach', category: '动作培训', logo: 'https://picsum.photos/id/15/200/100' },
  { name: 'Hengdian Stay', category: '酒店住宿', logo: 'https://picsum.photos/id/16/200/100' },
  { name: 'Post-House X', category: '后期中心', logo: 'https://picsum.photos/id/17/200/100' }
];

export const RECENT_EVENTS = [
  { title: '2025 GFA 青年影展报名开启', date: '2025-03-15', category: '活动' },
  { title: 'GFA 认证人才库正式突破 1.5 万人', date: '2025-02-28', category: '新闻' },
  { title: '与欧洲电影协会达成战略合作协议', date: '2025-02-10', category: '新闻' },
];

export const TALENT_POOL = [
  { id: 1, name: '林静宜 (Elena)', roles: ['演员', '模特'], age: '22', city: '上海', image: 'https://picsum.photos/id/64/400/600' },
  { id: 2, name: '陈子豪 (Kevin)', roles: ['演员', '动作'], age: '28', city: '北京', image: 'https://picsum.photos/id/65/400/600' },
  { id: 3, name: 'Sofia Wang', roles: ['童星', '舞蹈'], age: '10', city: '广州', image: 'https://picsum.photos/id/66/400/600' },
  { id: 4, name: 'Marcus Chen', roles: ['演员', '主持'], age: '35', city: '深圳', image: 'https://picsum.photos/id/67/400/600' },
  { id: 5, name: '李佳琦 (Sunny)', roles: ['特约', '配音'], age: '24', city: '成都', image: 'https://picsum.photos/id/68/400/600' },
  { id: 6, name: 'David Zhou', roles: ['武术指导'], age: '42', city: '杭州', image: 'https://picsum.photos/id/69/400/600' },
];
