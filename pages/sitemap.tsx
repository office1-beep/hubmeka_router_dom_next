import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Monitor,
  FileText,
  Building2,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const SiteMap: React.FC = () => {
  const SECTIONS = [
    {
      title: "서비스 소개",
      icon: Monitor,
      items: [
        {
          label: "단체급식프로그램",
          to: "/catering",
          desc: "대기업 연동 및 식단/레시피 관리 솔루션",
        },
        {
          label: "식자재유통프로그램",
          to: "/distribution",
          desc: "수발주 통합 관리 ERP 솔루션",
        },
      ],
    },
    {
      title: "회사소개",
      icon: Building2,
      items: [
        {
          label: "회사개요",
          to: "/company#intro",
          desc: "고객의 비즈니스 성공을 돕는 파트너",
        },
        {
          label: "연혁",
          to: "/company#history",
          desc: "(주)허브메카가 걸어온 성장 스토리",
        },
        {
          label: "오시는 길",
          to: "/company#location",
          desc: "본사 위치 및 교통편 안내",
        },
      ],
    },
    {
      title: "고객지원",
      icon: UserCheck,
      items: [
        {
          label: "서비스 이용안내",
          to: "/guide",
          desc: "서비스 가입 및 이용 방법",
        },
        { label: "상담신청", to: "/sales", desc: "도입 문의 및 견적 상담" },
        {
          label: "원격지원",
          href: "https://www.988.co.kr/hubmeka",
          external: true,
          desc: "전문 엔지니어 원격 기술 지원",
        },
      ],
    },
    {
      title: "약관 및 정책",
      icon: ShieldCheck,
      items: [
        {
          label: "서비스 이용약관",
          to: "/agreement",
          desc: "투명하고 공정한 서비스 이용규정",
        },
        {
          label: "개인정보처리방침",
          to: "/policy",
          desc: "고객님의 소중한 개인정보 보호정책",
        },
      ],
    },
    {
      title: "사이트맵",
      icon: Monitor, // Just using an icon for the list
      items: [{ label: "메인으로", to: "/", desc: "허브메카 홈페이지 메인" }],
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="flex-1 w-full">
        {/* Hero Section */}
        <div className="relative bg-slate-900 overflow-hidden border-b border-white/5 pt-[80px]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white opacity-70">
                  한눈에 보는 허브메카 서비스
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                    사이트
                  </span>
                  <span className="text-3xl md:text-5xl lg:text-6xl font-black text-purple-500">
                    맵
                  </span>
                </div>
              </h1>
            </MotionDiv>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTIONS.map((section, idx) => (
              <MotionDiv
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300"
              >
                {/* Section Header */}
                <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
                    <section.icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {section.title}
                  </h2>
                </div>

                {/* Links List */}
                <div className="p-2 flex-1 flex flex-col">
                  {section.items.map((item, itemIdx) =>
                    item.to ? (
                      <Link
                        key={itemIdx}
                        href={item.to}
                        className="group text-left p-4 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-4 w-full"
                      >
                        <div className="mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-bold text-slate-700 group-hover:text-purple-700 transition-colors text-lg">
                            {item.label}
                            <ChevronRight
                              size={16}
                              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />
                          </div>
                          <p className="text-sm text-slate-500 mt-1 font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <a
                        key={itemIdx}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group text-left p-4 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-4 w-full"
                      >
                        <div className="mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-bold text-slate-700 group-hover:text-purple-700 transition-colors text-lg">
                            {item.label}
                            <ExternalLink
                              size={14}
                              className="opacity-50 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <p className="text-sm text-slate-500 mt-1 font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ),
                  )}
                </div>
              </MotionDiv>
            ))}

            {/* Contact Info Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-slate-900 rounded-2xl border border-slate-700 shadow-lg overflow-hidden flex flex-col h-full text-white"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">고객센터 안내</h3>
                  <p className="text-slate-400 mb-8">
                    궁금하신 점이 있으시면 언제든 문의해주세요.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                        Customer Center
                      </p>
                      <p className="text-3xl font-black text-white">
                        02-868-3260
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                        Fax
                      </p>
                      <p className="text-xl font-bold text-slate-300">
                        02-868-3335
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                        Operating Hours
                      </p>
                      <p className="text-sm text-slate-300">
                        평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <Link
                    href="/sales"
                    className="w-full py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors block text-center"
                  >
                    온라인 문의하기
                  </Link>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
