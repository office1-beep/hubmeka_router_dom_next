import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Settings, Box, BarChart2, ShoppingCart, 
  BookOpen, Layers, ClipboardList, TrendingUp, Clock, CreditCard, MessageCircle 
} from 'lucide-react';

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const PAIN_POINTS = [
  {
    bubble: "여러 대기업 발주와 단가 비교",
    desc: "여러 거래처의 다른 품목명과 규격, 복잡한 주문 프로세스로 인해 많은 시간이 소요됩니다.",
    img: "https://image.hubpass.com:442/newhomepage/catering_price2.png", 
    scale: "scale-90" 
  },
  {
    bubble: "식자재비율, 식단 & 레시피 관리",
    desc: "식자재 비율, 영양성분까지 고려한 고객이 선호하는 식단 구성은 늘 어려운 과제입니다.",
    img: "https://image.hubpass.com:442/newhomepage/catering_rice.png",
    scale: "scale-90"
  },
  {
    bubble: "끝없는 수기 장부와 보고서",
    desc: "매일 반복되는 수기 장부 작성과 월말 결산, 각종 보고서 작업에 많은 시간을 빼앗깁니다.",
    img: "https://image.hubpass.com:442/newhomepage/catering_excel2.png",
    scale: "scale-90"
  }
];

const DETAILED_FEATURES = [
  {
    id: 0,
    title: '기초정보관리',
    description: '조직관리, 권한관리, 품목관리, 기타',
    icon: Settings,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50'
  },
  {
    id: 1,
    title: '품목관리',
    description: '품목별거래처등록, 발주규제등록, 단가등록, 단가조회',
    icon: Box,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    title: '메뉴관리',
    description: '마스터메뉴, 레시피 등록, 규제메뉴등록, 규제식재등록, 식당별식단복사 등',
    icon: BookOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    title: '발주관리',
    description: '신규재고등록, 재고등록, 현장구매, 발행관리(일수불명세서, 월수불명세서 등)',
    icon: ShoppingCart,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    id: 4,
    title: '재고관리',
    description: '식단등록, 발주생성, 발주조회 및 수정, 입고등록, 발행관리(발주서, 조리계획표, 주간메뉴표, 월 일일결산서 등)',
    icon: Layers,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 5,
    title: '운영관리',
    description: '운영일지등록, 일별운영현황조회, 운영현황조회, 발행관리(운영일지, 매출집계표 등)',
    icon: ClipboardList,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 6,
    title: '손익관리',
    description: '손익계획실적등록, 발행관리(월별손익실적, 계획대비손익, 전월대비손익 등)',
    icon: TrendingUp,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 7,
    title: '근태관리',
    description: '근태등록, 개인별근태조회, 월근태조회, 발행관리(월근태집계표 등)',
    icon: Clock,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    id: 8,
    title: '경비관리',
    description: '경비등록, 경비승인, 발행관리(경비내역서 등)',
    icon: CreditCard,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 9,
    title: '분석관리',
    description: '식재료비현황조회, 1인식단가분석, 메뉴구성분석, 월간식수현황, 월별매출동향 등',
    icon: BarChart2,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 10,
    title: '부가서비스',
    description: 'SMS핸드폰 문자보내기',
    icon: MessageCircle,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50'
  }
];

const NEW_CLIENTS_DATA = [
  { region: '서울', clients: ['델리에프에스', '미셸푸드', '브라운에프엔비', '빌텍', '제너시스에프앤비', '제성씨엔엠', '진풍푸드서비스', '티시스', '프로뱅크', '대한에프에쓰에쓰', '메가스터디', '보람에프앤비', '삼다푸드', '삼주외식산업-서울', '정석식당카페테리아', '엘아이지홈앤밀', '영등포구청', '제이제이케터링', '제일에프앤비', '청밀', '나인프라임푸드', '한국전력공사', '현대카드', '경희대학교', '국민대', '숭실대학교'] },
  { region: '경기', clients: ['등용문', '비젼유통-급식', '사나푸드', '삼성노블라이프', '에스에스클럽', '에스피씨 지에프에스', '웰스프레쉬', '진주랑', '진주랑푸드서비스', '푸드온', '새해오름푸드', '신성푸드', '네이처푸드컴퍼니', '명성에프엠씨', '부림캐터링', '하이큐시스템', '현송', '코오롱글로벌', '외국어대'] },
  { region: '인천', clients: ['푸르웰', '인천대'] },
  { region: '강원', clients: ['케이티에이치에스', '두산큐벡스', '한국전력공사속초연수원'] },
  { region: '대전', clients: ['가온에프앤에스', '계룡산업', '그리웰', '삼주외식산업-대전', '온더푸드', '한국발전인재개발원', '한울에프앤에스'] },
  { region: '충남', clients: ['제이에스지', '금강웰빙푸드', '대산농협하나로마트', '충남대', '한국기술교육대'] },
  { region: '충북', clients: ['본정원'] },
  { region: '부산', clients: ['가내찬', '다조에프앤에스', '호성식품', '잼있는부엌', '대성문', '에스티엑스에프앤씨', '청정'] },
  { region: '울산', clients: ['한솔푸드', '명문'] },
  { region: '대구', clients: ['경북캐터링', '그린팜', '씨엠케이푸드', '아이비푸드', '후레쉬캐터링', '성림푸드', '지오푸드'] },
  { region: '경북', clients: ['더 건강한 푸드', '포항공과대학교복지회'] },
  { region: '경남', clients: ['모던캐터링', '사람과먹거리', '에이치에프앤에스', '와이로직스', '웰리브', '한솔', '씨엠'] },
  { region: '전북', clients: ['하림'] },
  { region: '제주', clients: ['제주대 등 다수'] }
];

const CateringSolution: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="flex-1 w-full">
        
        {/* Hero Section */}
        <div className="relative bg-slate-900 overflow-hidden border-b border-white/5 pt-[80px]">
           <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-16">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                 <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-white opacity-70">
                       <span className="text-green-400">6,000여</span> 식당에서 사용중인
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-green-400">
                          단체급식
                       </span>
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                          프로그램
                       </span>
                    </div>
                 </h1>
              </MotionDiv>
           </div>
        </div>

        {/* Pain Points Section */}
        <div className="bg-white pb-10 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                영양사님 지금 하고 있는 업무 불편하지 않으신가요?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {PAIN_POINTS.map((point, index) => (
                <div key={index} className="flex flex-col items-center">
                  
                  {/* 말풍선 */}
                  <MotionDiv 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative bg-[#003459] text-white px-6 py-4 rounded-[1.5rem] mb-8 shadow-xl text-lg font-bold w-full text-center leading-snug
                                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[12px] after:border-transparent after:border-t-[#003459]"
                  >
                    {point.bubble}
                  </MotionDiv>

                  {/* 3D 캐릭터 이미지 */}
                  <div
                    className={`relative w-full h-[250px] flex items-center justify-center mb-5 ${point.scale}`}
                  >
                    <img 
                      src={point.img} 
                      alt="3D Character Illustration"
                      className="w-full h-full object-contain drop-shadow-2xl rounded-2xl border-4 border-slate-200"
                    />
                  </div>

                  {/* 하단 회색 설명 박스 */}
                  <div className="w-full bg-[#f1f3f5] rounded-[1.5rem] p-6 border border-slate-200/50 shadow-sm min-h-[140px] flex items-center justify-center">
                    <p className="text-center text-[#495057] text-base md:text-lg font-bold leading-relaxed break-keep">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        
        {/* Solution Section */}
        <div className="bg-slate-50 py-10 md:py-14 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                  사장님은 사업만 하세요! 영양사님은 칼퇴 보장!
                </h2>
                <p className="text-lg text-slate-600 mx-auto mb-4">
                  23년간의 꾸준한 현장 테스트와 사용자의 요구로 이루어진
                </p>
                <p className="text-2xl md:text-3xl font-bold text-green-600 tracking-tight">
                  허브메카가 모두 해결해 드리겠습니다!
                </p>
              </MotionDiv>
            </div>
    
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <img
                src="https://image.hubpass.com:442/newhomepage/catering_ceo3.png"
                alt="HubMeka Solutions Team"
                className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-auto object-cover"
              />
            </MotionDiv>
          </div>
        </div>

        {/* Features Table Style Section (Added) */}
        <div className="bg-white py-14 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">주요 기능</h2>
                <p className="text-slate-500 mt-2 text-base">단체급식 업무 효율을 극대화하는 통합 관리 모듈을 제공합니다.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-sm">
                <CheckCircle2 size={16} />
                총 11개 핵심 모듈
              </div>
            </div>

            {/* Table Container - Row Height py-1.5 */}
            <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="hidden md:table-header-group">
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-4 font-bold text-base w-1/4 border-r border-slate-700">기능 분류</th>
                        <th className="px-6 py-4 font-bold text-base">상세 항목 및 기능 설명</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DETAILED_FEATURES.map((feature, idx) => (
                        <tr 
                          key={idx} 
                          className="group hover:bg-slate-50 transition-colors flex flex-col md:table-row"
                        >
                          <td className="px-6 py-2.5 md:border-r border-slate-200 border-b md:border-b-0 border-slate-100">
                            <div className="flex items-center gap-3">
                               <div className={`w-8 h-8 ${feature.bgColor} ${feature.color} rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100`}>
                                  <feature.icon size={16} />
                               </div>
                               <span className="text-base font-bold text-slate-900">{feature.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-2.5">
                             <div className="flex items-start gap-2.5">
                                <div className="mt-2 shrink-0">
                                   <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                </div>
                                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium break-keep">
                                   {feature.description}
                                </p>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Section */}
        <div className="bg-slate-50 py-14 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                구성도
              </h2>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden"
            >
              <img 
                src="https://image.hubpass.com:442/newhomepage/catering_diagram.png" 
                alt="bizmeka Food 구성도" 
                className="w-full h-auto block" 
              />
            </MotionDiv>
          </div>
        </div>

        {/* Clients Section */}
        <div className="bg-white py-14 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                주요 고객사
              </h2>
            </MotionDiv>

            <div className="h-auto overflow-hidden relative rounded-2xl border border-slate-200 bg-slate-50 shadow-inner p-6 md:p-10">
              <div className="text-base leading-relaxed text-slate-700 font-medium">
                {NEW_CLIENTS_DATA.map((group) => (
                  <span key={group.region} className="mr-3">
                    <strong className="text-slate-900 font-bold">[{group.region}]</strong>
                    <span className="ml-1.5">
                      {group.clients.join(', ')}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CateringSolution;