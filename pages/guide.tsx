import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { BookOpen, FileText, HelpCircle, ChevronDown } from "lucide-react"; // Sample icons for the nav

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const TABS = [
  { id: "guide1", label: "서비스별 이용요금", icon: BookOpen },
  { id: "guide2", label: "도입일정", icon: FileText },
  { id: "faq", label: "자주 묻는 질문", icon: HelpCircle },
];

const FAQ_DATA = [
  {
    q: "Hubmeka 란?",
    a: (
      <>
        FOOD 전문 IT 솔루션 서비스 제공
        <br />
        식품관련 전문 프로그램 제공서비스를 말하며, 현재 제공되는 서비스
        종류에는 [단체급식통합관리], [식자재유통통합관리] 시스템을 서비스 중에
        있습니다.
      </>
    ),
  },
  {
    q: "어떤 방식으로 서비스를 하나요?",
    a: (
      <>
        별도 프로그램 개발과 설치없이 기 개발된 프로그램을 인터넷접속만으로
        사용(ASP형) 본 서비스는 중소기업(급식,외식,식자재유통 관련업체)이 전산화
        도입에 대한 부담을 최소로 하며, 또 계속적인 관리를 유지함으로써 기
        전산화 도입에 대한 문제점(초기개발비 부담, 개발 후 관리 비용,
        업그레이드에 따른 부담 등)을 해결한 서비스 방식 입니다.
      </>
    ),
  },
  {
    q: "급식운영관리시스템 이란",
    a: (
      <>
        현재 지점별 수작업을 하거나, 워드관리, PC단위 프로그램,웹사용방식등을
        사용하고 있습니다, 하지만 영양사님이 식당(지점)단위로 관리되는 사항이
        본사 또는 거래처와 자동연계되어 하나의 시스템으로 연계되어 있지 않기
        때문에 업무의 비효율성이 있다는 부분과 데이터 및 프로그램 업그레이드에
        대 한 추가시 부담이 많다는 점입니다.
        <br />
        <br />
        <span className="font-bold">본 서비스 특징</span>
        <br />
        품목,단가,거래처수발주,매출,지점간 연계 등 본 시스템은 하나의
        시스템사용으로 인한 모든 업무가 통합되어 있습니다. 그렇기 때문에
        각지점에서 영양사고유의 업무(메뉴,레시피,발주,근태,운영일지,분석관리
        등)을 관리하며 또한 이모든 데이터가 본사 혹은 점포관리에게 자동으로
        통합되어 별도의 지점별 통계가 필요없으며 이로인한 거래처 통합발주가
        자동으로 이루어 지는 본사,지점,거래처간 자동 연계 프로그램이라 할 수
        있습니다.
      </>
    ),
  },
  {
    q: "식자재유통운영관리시스템 이란?",
    a: (
      <>
        현재 식자재유통 업체가 관리하고 있는
        매입,매출,단가,수발주,창고,재고,분석관리등을 수작업을
        하거나,워드관리,PC단위프로그램, 내부네트웍전산관리 등으로 운영하고
        있습니다, 이러한 운영관리의 문제점은 내부적인 운영관리에 따른 시스템
        유지관리, 내부와 외부(매입,매출처)간의 시스템 분리로 인한 이중 작업이 큰
        인건비의 소요 요인으로 볼 수 있습니다.
        <br />
        <br />
        <span className="font-bold">본 서비스 특징</span>
        <br />본 시스템은 내부적인 시스템관리가 전혀 필요없으므로 관리비용절감,
        내부시스템 뿐만아니라 외부(매입,매출처)간의 수발주가 자동연계되기 때문에
        식자재유통 업체가 관리해야하는 모든
        사항(품목,거래처별단가,수발주,창고,재고,분석 등)이 통합관리화
        되어있습니다.
      </>
    ),
  },
  {
    q: "[공통]사용하고자하면 어떻게 진행되나요?",
    a: (
      <>
        급식운영관리시스템 , 식자재유통관리시스템 동일
        <br />
        1. 먼저 도입에 대한 의사 업체결정 후 연락(02-868-3260 / 담당자:우태경
        부장)
        <br />
        2. 업체방문 후 시스템 컨설팅 및 데모(프리젠테이션)
        <br />
        3. 시스템 사용에 대한 의사결정(업체) 및 가입신청서 작성
        <br />
        4. 업체 프로그램 셋업(품목,거래처,단가) 후 시범운영
        <br />
        5. 서비스 개시
      </>
    ),
  },
  {
    q: "[급식]표준관리란 무엇인가요?",
    a: (
      <>
        [급식]현재 Hubmeka Food가 DB화 하여 제공되는 표준 Data입니다
        <br />
        1. 표준품목 : 3300 여가지
        <br />
        2. 표준메뉴 : 군(산업체,대학교,초,중,고,공장,병원)당 2500 여개
        <br />
        3. 표준레시피 : 표준메뉴당 레시피,영양성분
      </>
    ),
  },
  {
    q: "[급식]업체가 별도로 관리되는 품목이 있는 경우는?",
    a: (
      <>
        [급식] 별도코드 체계가 업체에 있거나,거래처가 대기업인 경우 입니다.
        <br />
        수발주가 자동연계 되기위해서는 별도의 품목코드를 갖고 있는 경우에는
        업체별 품목을 별도로 Upload하여 관리 할 수 있도록 셋업시 작업을
        하며,추후변동되는 단가를 업체담당 혹은 Hubmeka Food 담당자가 작업을하며
        영양사님은 별도의 품목,거래처,단가에 전혀 신경을 쓸필요가 없도록 합니다.
      </>
    ),
  },
  {
    q: "[유통]단가에 대한 관리방식은?",
    a: (
      <>
        급식운영관리시스템 , 식자재유통관리시스템 동일
        <br />
        1. 먼저 도입에 대한 의사 업체결정 후 연락(02-868-3260 / 담당자:우태경
        부장)
        <br />
        2. 업체방문 후 시스템 컨설팅 및 데모(프리젠테이션)
        <br />
        3. 시스템 사용에 대한 의사결정(업체) 및 가입신청서 작성
        <br />
        4. 업체 프로그램 셋업(품목,거래처,단가) 후 시범운영
        <br />
        5. 서비스 개시
      </>
    ),
  },
  {
    q: "[공통]보안은 어떻게 되나요?",
    a: (
      <>
        자동연계에 따라 각 업체간(본사,지점,거래처)데이터에 대한 보안은
        1차적으로 시스템관리자가 각 그룹별 프로그램권한을 분리하여 각 그룹별
        프로그램 (예: 거래처는 모든 단가에 대한 조회 프로그램 권한을 주지
        않으며, 로그인시좌측메뉴에 프로그램이 전혀 뜨지 않습니다) 권한관리
        2차적으로 사용자에 따른 아이디,패스워드를 수시 변경하여 관리하며,
        모든데이터는 IDC 방화벽을 통해 계약자 외는 접속 차단기능합니다.
      </>
    ),
  },
  {
    q: "[급식]위생관련한 사항은 있나요?",
    a: (
      <>
        개인위생,시설위생 점검표를 시스템에서 체크하여 관리되고 별도로
        출력하도록 되어있습니다. 또한 추후 조리,보관,검수,제공공정별 CCP,CP와
        연계하여 기록하고 보관하는 HACCP 기준관리를 도입 중입니다.
      </>
    ),
  },
  {
    q: "[유통]주문과 발주 연계성에 대하여?",
    a: (
      <>
        현재 서비스 되는 식자재 유통관리시스템은 품목별 거래처 관리가
        되어있기때문에 매출처에서 주문등록과 동시에 매입처로 별도 발주등록이
        없이 매입거래처별 발주 연계가 되어있습니다.
      </>
    ),
  },
  {
    q: "[공통]거래처별 수시변동 단가관리는?",
    a: (
      <>
        급식 또는 식자재유통이 관리해야 하는 중요한 관리상 단가에 대한 수시관리
        또는 주기적인 관리가 일어나며 그에 대한 대처변경 자료입력은 관리상
        쉽고,편리한 방법으로 구성되어있습니다. (단가 복사,Excel Upload,일괄변경
        등)
      </>
    ),
  },
  {
    q: "[공통]프로그램 이용시 가격은?",
    a: (
      <>
        <span className="text-blue-600 font-bold">* 급식운영관리시스템</span>
        <br />
        - 초기셋업비 : 300만원
        <br />
        - 월사용료 : 본사 (4만원) + 식당1개당(4만원)
        <br />
        &nbsp;&nbsp;예) 식당을 10개운영하는 급식사인 경우 : 4만원(본사) +
        (10개식당 * 4만원) = 44만원/월
        <br />
        <br />
        <span className="text-green-700 font-bold">
          * 식자재유통관리시스템(ASP)
        </span>
        <br />
        - 초기셋업비 : 50만원
        <br />
        - 월사용료 : 기본 5 User (4만원) + 추가 1 User 당(1만원)
        <br />
        - 기본구성: 품목,단가관리,수발주관리,창고재고관리,미수금,미지급금
        관리,지출경비관리, 출력관리
        <br />
        &nbsp;&nbsp;(거래명세서,세금계산서,라벨,발주서 기타등)
        <br />
        <br />
        <span className="text-emerald-700 font-bold">
          * 식자재유통관리시스템(패키지형)
        </span>
        <br />
        - 초기셋업비 : 300만원
        <br />
        - 월사용료 : 50만원(정액제)
        <br />
        - 사용대상 : ASP 형 기본구성외 업체만의 프로그램 맞춤형 개발요구시 →
        계속적인 프로그램이
        <br />
        &nbsp;&nbsp;요구사항대로 개발되어 지는형태
      </>
    ),
  },
  {
    q: "[공통]프로그램 추가요구시 비용은?",
    a: (
      <>
        별도로 프로그램 추가요구에 대한 비용은 없습니다.
        <br />
        단, 접수된 프로그램이 공통적으로 사용목적(타 업체에도 사용)이 있을
        경우는 제한이 없고, 개별업체에만 적용되는 프로그램인 경우는 분석 후
        적용한계를 정합니다.
      </>
    ),
  },
  {
    q: "[공통]사용자교육은 어떻게?",
    a: (
      <>
        - 초기셋업 후 2시간 사용자 교육
        <br />- 추후 담당자 변경 혹은 별도 교육을 원할 경우 상호일정 협의 후
        가능
      </>
    ),
  },
  {
    q: "[급식]현재 사용업체가 있나요?",
    a: (
      <>
        저희 서비스는 2000년도 시스템을 개발완료 하였으며 2001년 서비스를
        시작하였고 아벨라고메(학교/산업체), 이바돔(학교),제이제이(산업체/학교)등
        120개 급식사, 6000여개 지점이 사용중이며, 현 서비스 도입중인 급식사가
        20여개 있습니다.
      </>
    ),
  },
  {
    q: "[공통]데모용 혹은 실제 테스트 해볼 수 있나요?",
    a: (
      <>
        저희 담당자에게 연락을 주시면 테스트 아이디,패스워드를 가르쳐 드리고
        있습니다.
        <br />
        전화번호 : 02-868-3260 (담당자:우태경 부장)
      </>
    ),
  },
  {
    q: "[공통]요금 납부방법은?",
    a: (
      <>
        먼저 가입신청서를 작성한후 서비스가 개통이 되면 익월에 청구가 됩니다
        <br />
        납부방법은 1. 자동이체, 2. 가상계좌입금,3.신용카드 결제 방식이 있습니다.
      </>
    ),
  },
];

const UserGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState("guide1");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const scrollContainer = document.querySelector("main");

    if (element && scrollContainer) {
      // Offset calculation: Hero section height + SubNav + Extra spacing
      const headerOffset = 280;

      const elementRect = element.getBoundingClientRect();
      const offsetPosition =
        elementRect.top + scrollContainer.scrollTop - headerOffset;

      scrollContainer.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Handle scrolling to specific section if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      if (["guide1", "guide2", "faq"].includes(id)) {
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      }
    }
  }, [router.asPath]);

  // Track active section on scroll
  useEffect(() => {
    const scrollContainer = document.querySelector("main");

    const handleScroll = () => {
      if (!scrollContainer) return;

      const sections = ["guide1", "guide2", "faq"];
      const scrollPosition = scrollContainer.scrollTop + 200;

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (scrollContainer.scrollTop < 200) {
        setActiveSection("guide1");
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="sticky top-0 z-30 bg-slate-900 overflow-hidden border-b border-white/5 pt-[90px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
              <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  서비스
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-red-500">
                  이용안내
                </span>
              </div>
            </h1>
          </MotionDiv>
        </div>
      </div>

      {/* Mobile Sticky Sub Navigation */}
      <div className="md:hidden sticky top-[190px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-start gap-8 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`py-4 px-2 text-base font-bold border-b-[3px] transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                  activeSection === tab.id
                    ? "border-primary-600 text-primary-700"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                <tab.icon
                  size={18}
                  className={activeSection === tab.id ? "stroke-[2.5px]" : ""}
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 py-8 md:py-12 flex flex-col md:flex-row gap-8 lg:gap-12 items-start relative">
        {/* Desktop Sticky Left Sidebar Navigation */}
        <div className="hidden md:flex w-56 lg:w-64 shrink-0 sticky md:top-[242px] lg:top-[266px] z-40 bg-white shadow-sm border border-slate-200 rounded-2xl overflow-hidden py-4 flex-col">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-6 py-4 text-left text-base lg:text-lg font-bold border-l-[4px] transition-all duration-200 flex items-center gap-3 ${
                activeSection === tab.id
                  ? "border-primary-600 text-primary-700 bg-primary-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <tab.icon
                size={20}
                className={
                  activeSection === tab.id
                    ? "stroke-[2.5px] text-primary-600"
                    : "text-slate-400"
                }
              />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Container */}
        <div className="flex-1 min-w-0 w-full">
          <main className="flex flex-col space-y-20 lg:space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section id="guide1" className="scroll-mt-40">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    서비스별 이용요금
                  </h2>
                </div>
                <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm text-slate-900">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-100 pb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                        인건비, 시설투자비, 유지보수비 NO
                      </h3>
                      <p className="text-slate-600 text-base md:text-lg">
                        매출증대, 비용절감, 효율적인 고객관리를 원하신다면
                        허브메카 푸드 서비스를 선택하세요
                      </p>
                    </div>
                  </div>
                  <div className="text-left whitespace-nowrap text-sm text-slate-500">
                    * 서비스 이용요금은 부가세 별도입니다.
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm md:text-base whitespace-nowrap min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-center text-slate-900 font-bold">
                          <th className="py-4 px-6 border-r border-slate-200 w-[15%]">
                            구분
                          </th>
                          <th className="py-4 px-6 border-r border-slate-200 w-[42.5%]">
                            단체급식 통합관리 서비스
                          </th>
                          <th className="py-4 px-6 w-[42.5%]">
                            식품유통 통합관리 서비스
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {/* 1. 이용료기준 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 px-6 border-r border-slate-200 font-bold text-center bg-slate-50/30">
                            이용료기준
                          </td>
                          <td className="py-6 px-6 border-r border-slate-200">
                            <div className="mb-2">
                              <span className="font-bold text-red-500">
                                적용단위 - 식당기준
                              </span>
                            </div>
                            <div className="text-slate-600 space-y-1">
                              <p>
                                [기본] - 본사 1개(4만원) + 식당단위 1개(4만원)
                              </p>
                              <p className="font-bold text-slate-900">
                                = 8만원 / 월
                              </p>
                              <p className="mt-2 text-slate-900">
                                [추가] - 식당1개 추가당{" "}
                                <span className="font-bold">= 4만원 / 월</span>
                              </p>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="space-y-4">
                              <div>
                                <span className="font-bold text-red-500 block mb-1">
                                  [패키지]
                                </span>
                                <span className="text-slate-600">
                                  - 정액제 (사용자 아이디 무관)
                                </span>
                              </div>
                              <div>
                                <span className="font-bold text-red-500 block mb-1">
                                  [기본형]
                                </span>
                                <div className="text-slate-600 space-y-1">
                                  <p className="font-bold text-slate-900">
                                    - 기본 4만원 / 월 (5개 사용자 아이디)
                                  </p>
                                  <p>- 추가 1만원 / 월 (사용자 아이디 1개당)</p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        {/* 2. 초기셋업비 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 px-6 border-r border-slate-200 font-bold text-center bg-slate-50/30">
                            초기셋업비
                          </td>
                          <td className="py-6 px-6 border-r border-slate-200">
                            <div className="font-bold text-red-500 mb-2">
                              300만원
                            </div>
                            <div className="text-slate-600 space-y-1 font-medium">
                              <p>- 기초자료 : 품목,단가,거래처 일괄업로드</p>
                              <p>- 교육, 커스터마이징, 콜센터 등</p>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="space-y-4">
                              <div>
                                <div className="font-bold text-red-500 mb-1">
                                  50만원
                                </div>
                                <div className="text-slate-600 font-medium">
                                  - (ASP용-기본사용)
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-red-500 mb-1">
                                  300만원
                                </div>
                                <div className="text-slate-600 font-medium">
                                  - (패키지용-업체별별도관리)
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        {/* 3. Data보관 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 px-6 border-r border-slate-200 font-bold text-center bg-slate-50/30">
                            Data보관
                          </td>
                          <td className="py-6 px-6 border-r border-slate-200">
                            <div className="font-bold text-red-500 mb-2">
                              기준 2년간 보관
                            </div>
                            <div className="text-slate-600 space-y-1 font-medium">
                              <p>2년 후 Data가공 및 연속보관.</p>
                              <p>별도협의 후 결정</p>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="font-bold text-red-500 mb-2">
                              기준 2년간 보관
                            </div>
                            <div className="text-slate-600 space-y-1 font-medium">
                              <p>2년 후 Data가공 및 연속보관.</p>
                              <p>별도협의 후 결정</p>
                            </div>
                          </td>
                        </tr>

                        {/* 4. 10개 식당 운영시 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 px-6 border-r border-slate-200 font-bold text-center bg-slate-50/30">
                            10개 식당 운영시
                          </td>
                          <td className="py-6 px-6 border-r border-slate-200">
                            <div className="text-slate-700 font-medium space-y-1">
                              <p>본사(4만원) + 식당(4만원 × 10개 = 40만원)</p>
                              <p className="font-bold text-slate-900">
                                = 48만원/월
                              </p>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="font-bold text-red-500 mb-2">
                              [기본형]-10개 사용자 아이디 사용시
                            </div>
                            <div className="text-slate-700 font-medium space-y-1">
                              <p>기본 4만원(5개 사용자 아이디)</p>
                              <p>+ 추가 5만원(1만원 * 5)</p>
                              <p className="font-bold text-slate-900">
                                = 9 만원 / 월
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </MotionDiv>
            </section>

            <section id="guide2" className="scroll-mt-40">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    도입일정
                  </h2>
                </div>
                <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm text-slate-900">
                  <div className="rounded-xl border border-slate-200 shadow-sm mb-6 overflow-hidden">
                    <table className="w-full text-left text-sm md:text-base break-keep">
                      <thead>
                        <tr className="bg-[#a7b2e3] border-b border-black text-center text-slate-900 font-bold border-y-2">
                          <th
                            className="py-4 px-6 border-r border-black w-[40%] align-middle"
                            rowSpan={2}
                          >
                            업 무 구 분
                          </th>
                          <th
                            className="py-2 px-2 border-r border-b border-black w-[45%]"
                            colSpan={4}
                          >
                            M : 월
                          </th>
                          <th
                            className="py-4 px-4 w-[15%] align-middle"
                            rowSpan={2}
                          >
                            M + 1
                          </th>
                        </tr>
                        <tr className="bg-[#a7b2e3] border-b border-black text-center text-slate-900 font-bold">
                          <th className="py-2 px-2 border-r border-black w-[10%]">
                            1
                          </th>
                          <th className="py-2 px-2 border-r border-black w-[10%]">
                            2
                          </th>
                          <th className="py-2 px-2 border-r border-black w-[10%]">
                            3
                          </th>
                          <th className="py-2 px-2 border-r border-black w-[10%]">
                            4
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black">
                        {/* Row 1 */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 border-r border-black align-top font-bold text-slate-800">
                            ▶ 자료 Excel 정리 후 송부
                            <br />
                            <span className="font-normal text-slate-600 block pl-4 mt-1">
                              -. 품목, 단가, 거래처 등
                            </span>
                          </td>
                          <td className="py-4 px-1 border-r border-slate-300 relative h-[80px]">
                            {/* Arrow 1 */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-[-10px] h-10 bg-gradient-to-r from-green-800 to-green-500 z-10 flex items-center justify-end pr-1 shadow-md">
                              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[15px] border-l-green-500 border-b-[20px] border-b-transparent absolute -right-[15px]"></div>
                            </div>
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-black"></td>
                          <td className="py-4 px-2"></td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 border-r border-black align-top font-bold text-slate-800">
                            ▶ 프로그램 셋업 및 자료 Upload
                            <br />
                            <span className="font-normal text-slate-600 block pl-4 mt-1">
                              -. 프로그램 및 DB 초기화
                            </span>
                            <span className="font-normal text-slate-600 block pl-4">
                              -. Excel 자료 DB 화
                            </span>
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-1 border-r border-slate-300 relative h-[80px]">
                            {/* Arrow 2 */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-[-10px] h-10 bg-gradient-to-r from-red-900 to-red-500 z-10 flex items-center justify-end pr-1 shadow-md">
                              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[15px] border-l-red-500 border-b-[20px] border-b-transparent absolute -right-[15px]"></div>
                            </div>
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-black"></td>
                          <td className="py-4 px-2"></td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 border-r border-black align-top font-bold text-slate-800">
                            ▶ 시스템 관리자 교육
                            <br />▶ 사용자 교육
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-1 border-r border-slate-300 relative h-[80px]">
                            {/* Arrow 3 */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-[-5px] right-[25px] h-10 bg-gradient-to-r from-blue-900 to-blue-600 z-10 flex items-center justify-end pr-1 shadow-md">
                              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[15px] border-l-blue-600 border-b-[20px] border-b-transparent absolute -right-[15px]"></div>
                            </div>
                          </td>
                          <td className="py-4 px-2 border-r border-black"></td>
                          <td className="py-4 px-2"></td>
                        </tr>

                        {/* Row 4 */}
                        <tr className="hover:bg-slate-50 transition-colors text-slate-800">
                          <td className="py-4 px-4 border-r border-black align-top font-bold">
                            ▶ 시범운영 및 요구사항 반영
                            <br />
                            <span className="font-normal text-slate-600 block pl-4 mt-1">
                              -. 주문등록 및 발주 병행운영
                            </span>
                            <span className="font-normal text-slate-600 block pl-4">
                              -. 인터넷 수발주
                            </span>
                            <span className="font-normal text-slate-600 block pl-4">
                              -. 요구사항 수정 및 개발
                            </span>
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td
                            className="py-4 px-1 border-r border-black relative h-[100px]"
                            colSpan={2}
                          >
                            {/* Arrow 4 (spans 3 and 4) */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-[5px] right-2 h-12 bg-gradient-to-r from-amber-700 to-amber-500 z-10 flex items-center justify-end pr-1 shadow-md">
                              <div className="w-0 h-0 border-t-[24px] border-t-transparent border-l-[20px] border-l-amber-500 border-b-[24px] border-b-transparent absolute -right-[20px]"></div>
                            </div>
                          </td>
                          <td className="py-4 px-2"></td>
                        </tr>

                        {/* Row 5 */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 border-r border-black align-top font-bold text-slate-800">
                            ▶ 정상서비스 및 유지보수
                          </td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-slate-300"></td>
                          <td className="py-4 px-2 border-r border-black"></td>
                          <td className="py-4 px-1 relative h-[80px]">
                            {/* Arrow 5 */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-[10px] h-10 bg-gradient-to-r from-slate-600 to-blue-400 z-10 flex items-center justify-end pr-1 shadow-md">
                              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[15px] border-l-blue-400 border-b-[20px] border-b-transparent absolute -right-[15px]"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Warning Note */}
                  <div className="p-4 border border-red-300 border-dashed bg-red-50/30 rounded-lg text-red-600 space-y-1 font-bold text-sm md:text-base">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-red-400"></span>
                      위 일정표는 일반기준이며, 일정은 업무스팩에 따라 변동됨
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-red-400"></span>
                      요구하는 Excel 자료의 정합성에 따라 초기 업로드 작업이
                      전체기간 단축에 영향이 큽니다.
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-red-400"></span>
                      실제 시스템 가동 준비 기간은 1주일 ~ 3주일 소요됨
                    </p>
                  </div>
                </div>
              </MotionDiv>
            </section>

            <section id="faq" className="scroll-mt-40">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    자주 묻는 질문
                  </h2>
                </div>
                <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm text-slate-900">
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                      허브메카 푸드에 대한 FAQ
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg">
                      자주묻는 질문을 통해 허브메카 푸드에 대해 먼저 궁금증을
                      해결해 보세요
                    </p>
                  </div>

                  <div className="bg-slate-100 rounded-t-xl px-6 py-3 font-bold border-b border-slate-200 shadow-inner">
                    전체
                  </div>

                  <div className="divide-y divide-slate-100 border border-t-0 border-slate-200 rounded-b-xl overflow-hidden">
                    {FAQ_DATA.map((item, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div key={index} className="group">
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center w-6 h-6 rounded bg-red-600 text-white font-bold text-sm shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                Q
                              </div>
                              <span
                                className={`font-medium transition-colors ${
                                  isOpen
                                    ? "text-red-600 font-bold"
                                    : "text-slate-700 group-hover:text-red-600"
                                }`}
                              >
                                {index + 1}. {item.q}
                              </span>
                            </div>
                            <ChevronDown
                              size={20}
                              className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden bg-slate-50"
                              >
                                <div className="p-6 pt-2 pl-16 text-slate-600 border-t border-slate-100/50">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </MotionDiv>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
