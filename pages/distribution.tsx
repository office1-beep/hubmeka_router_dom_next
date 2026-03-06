import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Wallet,
  CheckCircle2,
  Settings,
  Box,
  BarChart2,
  FileText,
  Users,
  Zap,
  Briefcase,
  TrendingDown,
} from "lucide-react";

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const DETAILED_FEATURES = [
  {
    id: 0,
    title: "기초정보관리",
    description: "단가군, 분류등록, 상품등록, 거래처등록, 사용자관리",
    icon: Settings,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 1,
    title: "견적.단가관리",
    description:
      "매입단가등록, 매출단가등록, 매출단가생성, 매출단가복사, 견적등록",
    icon: FileText,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: 2,
    title: "주문.발주관리",
    description:
      "주문등록, 수발주현황조회, 발주조회, 각종출력(세금계산서, 거래명세서)",
    icon: ShoppingCart,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    id: 3,
    title: "창고재고관리",
    description: "창고입고등록, 재고등록, 각종출력물(수불명세서 등)",
    icon: Box,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    title: "금전관리",
    description: "미수금, 미지급금, 기타경비, 각종출력물",
    icon: Wallet,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 5,
    title: "통계관리",
    description: "부가서비스",
    icon: BarChart2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const BENEFITS = [
  {
    title: "신규영업 및 고객확보",
    description:
      "매출처 제안 시 인터넷 발주 시스템은 필수 사항으로 대두되고 있어 경쟁력을 강화합니다.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "신속한 고객대응",
    description:
      "장소와 시간에 구애받지 않고 언제 어디서든 실시간으로 발주를 확인하고 대응할 수 있습니다.",
    icon: Zap,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "본연의 업무에 집중",
    description:
      "주문 접수와 동시에 발주서 및 거래명세서 등 모든 출력물이 자동 생성되어 업무가 간소화됩니다.",
    icon: Briefcase,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "경비절감",
    description:
      "전화, 팩스 등 통신 비용과 불필요한 수기 작업에 드는 인건비를 획기적으로 절감할 수 있습니다.",
    icon: TrendingDown,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
];

const NEW_CLIENTS_DATA = [
  {
    region: "서울",
    clients: [
      "키컴",
      "성결에프엔씨",
      "제일에스엠",
      "싱싱유통",
      "쉐프푸드",
      "지성유통",
      "행복도시락 사회적협동조합",
      "도준푸드",
      "라온푸드",
      "더원탑글로벌",
      "서브엠",
      "라딕스",
      "리온푸드",
      "푸드힐",
      "메디이츠",
      "삼경푸드",
      "웰푸드(관악)",
      "가락식자재",
      "대경물산",
      "사계절팜스",
      "케이티에스씨",
      "하트웰",
      "더로하스푸드",
      "동대문키즈",
      "대경로하스",
      "다다푸드",
      "정성푸드서비스",
      "어썸에이치",
      "청밀(유통)",
      "창일농산",
      "오아시스 퍼처스",
      "팜트럭",
      "에네스푸드넷",
      "호 그린 푸드",
      "상호에프에스",
      "미소푸드유통",
      "엘아이지홈앤밀라인스",
      "엉클푸드",
      "삼일유통",
    ],
  },
  {
    region: "경기",
    clients: [
      "새날인스타푸드",
      "하나식품",
      "농업회사법인해담채",
      "주인푸드",
      "옵스그램",
      "아이맘2",
      "월드씨에스",
      "세중푸드시스템",
      "가온푸드서비스",
      "푸드콜",
      "찬누리",
      "산채원",
      "더오늘",
      "퓨어플러스",
      "대선에프에스",
      "에코홀푸드",
      "한강생명살림FM",
      "새싹농산",
      "처음",
      "피플푸드",
      "대호식품",
      "미호에프앤비",
      "싱싱플러스",
      "세명푸드",
      "메디원코리아",
      "비오씨",
      "미소유통",
      "태성푸드",
      "조은푸드",
      "그린홈푸드",
      "알트윈푸드",
      "미래에프에스",
      "농업회사법인본시",
      "하대원도매시장상인회",
      "휴먼푸드",
      "더존유통",
      "자연에프앤비",
      "비씨푸드",
      "헬스앤케어안산TMS",
      "썬푸드시스템",
      "하모니마트 비산점",
      "프라미스인",
      "자연애쿡",
      "성지유통",
      "그림유통",
      "케이엠종합서비스",
      "월푸드",
      "예은친환경",
      "디에스푸드",
      "제이플러스",
      "상승",
      "용천푸드서비스",
      "이우그린",
      "빅에바다",
      "동가푸드",
      "미사푸드",
      "한스",
      "힐링푸드",
      "이례푸드",
      "호 연",
      "다온푸드",
      "오아시스",
      "캐파맥스",
      "미래연 유통",
      "해오름",
      "비젼유통(하남)",
      "기백푸드",
      "아름상사",
      "피자브라더스",
      "디앤와이",
      "비티푸드(BTF)",
      "미단식품",
      "한마음종합식자재",
      "진컴퍼니",
    ],
  },
  {
    region: "인천",
    clients: [
      "수협 인천가공물류센터",
      "무공해맑은아이",
      "우신에프에스",
      "청정마켓",
      "짝궁",
      "해성에프에스",
      "팀앤제이",
    ],
  },
  {
    region: "강원",
    clients: [
      "태서식품",
      "우상",
      "고원농산영농조합법인",
      "그린아이팜",
      "그린유통",
    ],
  },
  {
    region: "대전",
    clients: ["피앤유컴퍼니", "올인원유통", "베리네이처", "디에프에스"],
  },
  {
    region: "부산",
    clients: [
      "유니온푸드",
      "영푸드",
      "늘찬유통",
      "우진푸드",
      "푸드마스터",
      "성진FS",
      "선진에프앤에스",
      "꿈꾸는 채소",
      "좋은아침",
      "장보고유통",
      "다솜채",
      "푸드테라피삼환",
      "상도유통",
      "주원",
      "더봄에프에스",
      "그린푸드(진구)",
      "패밀리식품",
      "에스에프에스",
      "동아",
      "지누푸드",
      "청년상회",
      "알뜰식품",
      "해미루",
      "일도FnC",
      "천하유통",
      "더존에프에스",
      "화신외식산업",
      "동국유통",
      "태현푸드",
      "그린푸드(해운대)",
      "세림글로벌",
      "프레시스",
      "동진FS",
      "예담에프엔비",
      "정성프레시",
      "우성유통",
      "한마음푸드",
      "에이비씨",
    ],
  },
  {
    region: "울산",
    clients: ["한맥물류유통", "레인보우유통", "경진상사", "대성푸드"],
  },
  { region: "대구", clients: ["성민식자재", "그린푸드", "비젼유통(수성)"] },
  {
    region: "경남",
    clients: [
      "동방씨엘에스",
      "선일푸드시스템",
      "이일종합식품",
      "신요푸드",
      "삼영유통",
      "인재유통",
      "신우종합식자재유통",
      "오성물산",
    ],
  },
  { region: "경북", clients: ["영남케터링"] },
  {
    region: "광주",
    clients: [
      "농업회사법인서림",
      "행복한푸드",
      "대홍케이터링",
      "중원푸드",
      "세호",
      "명장",
      "바이로컬",
      "남도맛집지원협동조합",
      "희망 영농조합법인",
      "청원",
      "하이원",
      "광주푸드시스템",
      "한두레농산",
      "엘에프에스",
      "포도원식자재",
      "도원푸드",
      "매일종합수산",
      "다옴ING",
      "준모",
      "제이앤에스",
      "자연사랑에프에스",
      "햇마루",
      "한아름에프에스",
      "기흥영농조합법인",
      "수연식품",
      "유림에프에스",
      "채소사랑영농조합법인",
      "아마존 유통",
      "라라유니버스",
      "트윈에프에스",
      "누리푸드시스템",
      "산밭푸드",
      "그린팜",
      "제이에프에스",
      "해밀유통",
      "엠엔푸드",
      "518민주화운동 식자재납품사업소",
      "하임푸드",
      "에코푸드",
      "용진푸드시스템",
      "햇살에프에스",
      "상상에프에스",
    ],
  },
  {
    region: "전남",
    clients: [
      "푸름애",
      "제이유통",
      "해빔",
      "청호유통급식사업부",
      "다농푸드",
      "퍼플팜",
      "신흥물류",
      "여천농협",
      "리치팜",
      "한빛케터링 서광지점",
      "가원에프앤비",
      "가락골유통",
      "나비",
    ],
  },
  {
    region: "전북",
    clients: [
      "더푸드시스템",
      "한미푸드",
      "에이비씨푸드서비스",
      "나눔에프앤비",
      "앤푸드",
      "자연머금",
      "웰푸드(익산)",
    ],
  },
  {
    region: "충남",
    clients: [
      "소망식품",
      "태승푸드",
      "케어네이션",
      "하나푸드",
      "웰푸드",
      "웰플러스",
      "공감",
      "소울푸드",
      "에스알키즈비",
    ],
  },
  {
    region: "충북",
    clients: ["케이투엘 솔루션", "태공식품", "사옹원", "온네이쳐", "오생"],
  },
  { region: "제주", clients: ["한백유통 등 다수"] },
];

const DistributionSolution: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="flex-1 w-full">
        {/* Hero Section */}
        <div className="relative bg-slate-900 overflow-hidden border-b border-white/5 pt-[80px]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white opacity-70">
                  인터넷 연결만으로 수발주업무가 가능한
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-black text-blue-400">
                    식자재유통
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
        <div className="bg-white py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                “수·발주를 전화 또는 팩스로 하고 계십니까?”
              </h2>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-slate-50/70 border border-slate-200 rounded-3xl p-8 md:p-10 text-left shadow-sm"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-5 h-5 flex-shrink-0 bg-green-500 rounded-md mt-1.5 border-2 border-green-600/50"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                  인력과 시간을 효율적으로 관리할 수 있는 인터넷 기반의 서비스
                </h3>
              </div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-9">
                중·소형 식품유통 업체들이 인터넷상에서 각 업체에게 필요한 기업
                전반적인 업무를 유기적으로 연결, 통합·공유할 수 있으며,
                시간/장소에 제한 없이 인터넷으로 업무를 처리하는 통합관리
                서비스입니다.
              </p>
            </MotionDiv>
          </div>
        </div>

        {/* Features Table Style Section */}
        <div className="bg-white py-14 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  주요 기능
                </h2>
                <p className="text-slate-500 mt-2 text-base">
                  식자재 유통 효율을 극대화하는 통합 수발주 모듈을 제공합니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-sm">
                <CheckCircle2 size={16} />총 6개 핵심 모듈
              </div>
            </div>

            {/* Table Container - Row Height py-1.5 */}
            <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="hidden md:table-header-group">
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 font-bold text-base w-1/4 border-r border-slate-700">
                        기능 분류
                      </th>
                      <th className="px-6 py-4 font-bold text-base">
                        상세 항목 및 기능 설명
                      </th>
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
                            <div
                              className={`w-8 h-8 ${feature.bgColor} ${feature.color} rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-slate-100`}
                            >
                              <feature.icon size={16} />
                            </div>
                            <span className="text-base font-bold text-slate-900">
                              {feature.title}
                            </span>
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
                src="https://image.hubpass.com:442/newhomepage/asp_diagram.png"
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
                    <strong className="text-slate-900 font-bold">
                      [{group.region}]
                    </strong>
                    <span className="ml-1.5">{group.clients.join(", ")}</span>
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

export default DistributionSolution;
