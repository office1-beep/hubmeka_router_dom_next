import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Train, Building2, History, MapPin } from "lucide-react";
import { useRouter } from "next/router";

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const HISTORY_DATA = [
  {
    year: "2022",
    items: [
      "단체급식/식자재유통 솔루션 - 한화푸디스트 주문 전산 연동",
      "ASP 고객 10,000개 사업장 서비스 돌파",
    ],
  },
  {
    year: "2021",
    items: [
      "비즈메카푸드에서 허브메카푸드로 브랜드 명칭 변경",
      "솔루션 구축 용역 - 팀프레시",
    ],
  },
  {
    year: "2020",
    items: [
      "단체급식/식자재유통 솔루션 - 동원홈푸드 주문 전산 연동",
      "단체급식/식자재유통 솔루션 - CJ 프레시웨이 주문 전산 연동",
      "단체급식/식자재유통 솔루션 - 아워홈 주문 전산 연동",
    ],
  },
  {
    year: "2019",
    items: ["단체급식/식자재유통 솔루션 - 푸드머스 주문 전산 연동"],
  },
  {
    year: "2018",
    items: ["단체급식/식자재유통 솔루션 - 웰스토리(도레미) 주문 전산 연동"],
  },
  {
    year: "2017",
    items: [
      "솔루션 구축 용역 - 롯데푸드 식자재유통 솔루션",
      "식자재유통 솔루션 - 평화드림 전산 연동",
    ],
  },
  {
    year: "2016",
    items: ["단체급식/식자재유통 솔루션 - 현대그린푸드 주문 전산 연동"],
  },
  { year: "2014", items: ["유치원 납품용 식자재유통솔루션 서비스 개시"] },
  { year: "2012", items: ["솔루션 유지보수 용역 - 웰스토리 도래미"] },
  {
    year: "2011",
    items: [
      "KCP(한국사이버결제) PG사 결제 연동 서비스 (식자재유통 솔루션) 개시",
    ],
  },
  { year: "2009", items: ["기업부설연구소 설립"] },
  {
    year: "2008",
    items: [
      "솔루션 구축 용역 - 삼성에버랜드(도래미)",
      "ASP 고객 2,000개 사업장 서비스 돌파",
    ],
  },
  {
    year: "2007",
    items: [
      "친환경 인증 유통 프로그램 서비스",
      "병원용 급식 프로그램 서비스 (LMS)",
    ],
  },
  {
    year: "2006",
    items: [
      "기술혁신 우수기업 선정 - 이노비즈",
      "학교급식 발주 연동 프로그램 서비스 - NEIS",
    ],
  },
  {
    year: "2005",
    items: [
      "e-MarketPlace 서비스 개시",
      "Best ASP 기업 선정 - ASP 인증위원회",
      "식품정보코리아(주)와 협력사 체결",
    ],
  },
  {
    year: "2004",
    items: [
      "KT Bizmeka 위탁판매처 계약",
      "(주)푸드원택(HACCP 컨설팅)과 협력사 체결",
      "KT Wibro MOU 체결",
    ],
  },
  { year: "2003", items: ["(주)허브메카 법인 설립"] },
];

const CompanyIntro: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    // Important: We need to scroll the 'main' container, not the window, because App.tsx uses a scrollable main area.
    const scrollContainer = document.querySelector("main");

    if (element && scrollContainer) {
      // Offset calculation for perfect alignment:
      const headerOffset = 250;

      // element.getBoundingClientRect().top gives position relative to viewport
      // scrollContainer.scrollTop gives current scroll position
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
      if (["intro", "history", "location"].includes(id)) {
        // Small delay to ensure DOM is fully rendered
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

      const sections = ["intro", "history", "location"];
      const scrollPosition = scrollContainer.scrollTop + 200; // Trigger point offset

      // Find which section is currently active
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // We use offsetTop which is relative to the offsetParent (usually the container or body)
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
        setActiveSection("intro");
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const TABS = [
    { id: "intro", label: "회사개요", icon: Building2 },
    { id: "history", label: "연혁", icon: History },
    { id: "location", label: "오시는 길", icon: MapPin },
  ];

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
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-400">
                  (주)허브메카
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  회사소개
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
            {/* 1. Intro Section (Company Overview) */}
            <section id="intro" className="scroll-mt-[250px] pt-4 md:pt-0">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    회사 개요
                  </h2>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                  <dl className="divide-y divide-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-6 gap-4 hover:bg-slate-50 transition-colors">
                      <dt className="font-bold text-slate-900 text-base flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
                        대표이사
                      </dt>
                      <dd className="md:col-span-3 text-slate-700 text-base font-medium">
                        박시현
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-6 gap-4 hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <dt className="font-bold text-slate-900 text-base flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
                        설립일자
                      </dt>
                      <dd className="md:col-span-3 text-slate-700 text-base font-medium">
                        2003년 2월 3일
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-6 gap-4 hover:bg-slate-50 transition-colors">
                      <dt className="font-bold text-slate-900 text-base flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
                        연락처
                      </dt>
                      <dd className="md:col-span-3 text-slate-700 text-base font-medium">
                        <div className="flex flex-col sm:flex-row sm:gap-12 gap-2">
                          <span className="flex items-center">
                            <span className="text-slate-500 mr-3 w-10">
                              전화
                            </span>{" "}
                            02-868-3260
                          </span>
                          <span className="flex items-center">
                            <span className="text-slate-500 mr-3 w-10">
                              팩스
                            </span>{" "}
                            02-868-3335
                          </span>
                        </div>
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-6 gap-4 hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <dt className="font-bold text-slate-900 text-base flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
                        주요사업
                      </dt>
                      <dd className="md:col-span-3 text-slate-700 text-base font-medium">
                        ASP (Application Service Provider) 사업 -
                        단체급식프로그램, 식자재유통프로그램
                      </dd>
                    </div>
                  </dl>
                </div>
              </MotionDiv>
            </section>

            {/* 2. History Section */}
            <section
              id="history"
              className="scroll-mt-[250px] border-t border-slate-100 pt-16 md:pt-20"
            >
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-10 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    (주)허브메카가 걸어온 길
                  </h2>
                </div>

                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8 py-4">
                  {HISTORY_DATA.map((item, index) => (
                    <MotionDiv
                      key={item.year}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.05, duration: 0.4 }}
                      className="relative pl-8 md:pl-12"
                    >
                      {/* Dot */}
                      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-[3px] border-primary-600 box-content shadow-sm z-10"></div>

                      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10 group p-5 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100 hover:shadow-sm">
                        <div className="text-2xl font-black text-primary-700 w-20 shrink-0 tracking-tight">
                          {item.year}
                        </div>
                        <ul className="space-y-2 flex-1 pt-1.5">
                          {item.items.map((text, i) => (
                            <li
                              key={i}
                              className="text-base text-slate-700 leading-snug flex items-start gap-3"
                            >
                              <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>
            </section>

            {/* 3. Location Section */}
            <section
              id="location"
              className="scroll-mt-[250px] border-t border-slate-100 pt-16 md:pt-20"
            >
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-10 text-center md:text-left border-l-4 border-primary-500 pl-4 md:pl-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                    오시는 길
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Address Info */}
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-center">
                      <div className="space-y-6 text-slate-900">
                        <div>
                          <span className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                            Address
                          </span>
                          <span className="text-lg md:text-xl font-bold leading-relaxed block mb-1">
                            서울특별시 구로구 디지털로27길 36
                            <br />
                            (구로동) 이-스페이스 603-2호
                          </span>
                          <span className="text-sm text-slate-500">
                            지번: 서울시 구로구 구로동 212-26
                          </span>
                        </div>
                        <div className="border-t border-slate-100 pt-4">
                          <span className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                            Contact
                          </span>
                          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="w-10 h-6 bg-primary-100 text-primary-700 text-xs font-bold rounded flex items-center justify-center">
                                TEL
                              </span>
                              <span className="text-xl font-bold text-slate-800">
                                02-868-3260
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-10 h-6 bg-slate-100 text-slate-600 text-xs font-bold rounded flex items-center justify-center">
                                FAX
                              </span>
                              <span className="text-lg font-bold text-slate-600">
                                02-868-3335
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subway Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Namguro Station */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-200 flex flex-col gap-3 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#5d6520] flex items-center justify-center text-white shrink-0 shadow-sm border-2 border-[#5d6520]/20">
                          <Train size={20} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-[#5d6520] uppercase tracking-wider">
                            Subway Line 7
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            남구로역
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-1 text-sm mt-2">
                        <span className="inline-block font-bold text-slate-800 bg-yellow-100 px-1.5 py-0.5 rounded text-xs mb-1">
                          2번 출구
                        </span>
                        <br />
                        이마트 구로점 방향으로
                        <br />
                        <span className="font-semibold text-slate-900">
                          도보 약 5분
                        </span>
                      </p>
                    </div>

                    {/* Guro Digital Complex Station */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-200 flex flex-col gap-3 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#009D3E] flex items-center justify-center text-white shrink-0 shadow-sm border-2 border-[#009D3E]/20">
                          <Train size={20} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-[#009D3E] uppercase tracking-wider">
                            Subway Line 2
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            구로디지털단지역
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-1 text-sm mt-2">
                        <span className="inline-block font-bold text-slate-800 bg-green-100 px-1.5 py-0.5 rounded text-xs mb-1">
                          3번 출구
                        </span>
                        <br />
                        이마트 구로점 방향으로
                        <br />
                        <span className="font-semibold text-slate-900">
                          도보 약 15분
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map Iframe */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
                  <iframe
                    src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%20212-26%20%EC%9D%B4-%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-[450px] border-0 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                  {/* Overlay to intercept clicks if needed, or just let it be */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-3xl"></div>
                </div>
              </MotionDiv>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
