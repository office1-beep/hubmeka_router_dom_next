import React, { useState, useEffect } from "react";
import { PlayCircle, ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const SLIDES = [
  {
    id: "catering",
    tag: "Smart Catering Solution",
    title: "단체급식의 표준",
    description: "식단 작성, 단가비교 주문 - 대기업연동, 식자재비율 관리까지 ",
    color: "from-green-400 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "distribution",
    tag: "Food Distribution ERP",
    title: "식자재 유통에 특화된\n수발주시스템",
    description: "",
    color: "from-blue-400 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop",
  },
];

const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlideIndex];

  // Custom title rendering to handle specific highlighting and spacing requests
  const renderTitle = () => {
    if (slide.id === "catering") {
      return (
        <>
          단체급식의 <span className="text-emerald-400">표준</span>
        </>
      );
    } else if (slide.id === "distribution") {
      return (
        <>
          <span className="block">식자재 유통에 특화된</span>
          {/* Adjusted margin to match smaller text size */}
          <span className="block mt-4 text-emerald-400">수발주시스템</span>
        </>
      );
    }
    return slide.title;
  };

  return (
    <div className="h-full w-full bg-slate-900 pt-[80px] relative overflow-hidden">
      {/* Global Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url("${slide.image}")`,
          backgroundPosition: "center 40%",
        }}
      ></div>

      {/* Global Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Content Container - Adjusted to match Header and UserGuide (max-w-7xl) */}
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 lg:pb-0">
        <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-4">
          {/* Left Section - Program Shortcuts (25%) */}
          <div className="flex lg:col-span-1 flex-col justify-start lg:pt-16 lg:pr-6 z-20 order-2 lg:order-1 w-full items-center lg:items-start mt-auto lg:mt-0">
            <div className="w-full max-w-sm md:max-w-md lg:w-64 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Program Shortcuts */}
              <h3 className="text-white font-bold text-base mb-3 pl-1 border-l-4 border-primary-400 drop-shadow-sm">
                프로그램 바로가기
              </h3>
              <div className="space-y-2.5">
                <a
                  href="https://food.hubmeka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all group backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-sm group-hover:text-primary-300 transition-colors">
                    단체급식프로그램
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-slate-300 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.hubpass.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all group backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-sm group-hover:text-blue-300 transition-colors">
                    식자재유통프로그램
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-slate-300 group-hover:text-white transition-colors"
                  />
                </a>
              </div>

              {/* Divider & Program Proposals Wrapped to Hide on Mobile */}
              <div className="hidden lg:block">
                <div className="my-5 border-t border-white/10"></div>

                {/* Program Proposals */}
                <h3 className="text-white font-bold text-base mb-3 pl-1 border-l-4 border-yellow-400 drop-shadow-sm">
                  프로그램 제안서
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="https://www.hubmeka.com/images/main/cms.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all group backdrop-blur-sm"
                  >
                    <span className="text-white font-bold text-sm group-hover:text-yellow-300 transition-colors">
                      단체급식프로그램
                    </span>
                    <FileText
                      size={14}
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                  </a>
                  <a
                    href="https://www.hubmeka.com/images/main/pms.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all group backdrop-blur-sm"
                  >
                    <span className="text-white font-bold text-sm group-hover:text-yellow-300 transition-colors">
                      식자재유통프로그램
                    </span>
                    <FileText
                      size={14}
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content (75%) */}
          <div className="flex-1 lg:flex-auto lg:col-span-3 flex items-center order-1 lg:order-2 pt-16 lg:pt-0">
            <div className="w-full px-0 lg:pl-12">
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={slide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {/* Reduced font sizes significantly */}
                  <h1
                    className={`font-extrabold text-white leading-tight mb-6 drop-shadow-lg ${
                      slide.id === "distribution"
                        ? "text-4xl md:text-5xl lg:text-6xl"
                        : "text-5xl md:text-6xl lg:text-7xl"
                    }`}
                  >
                    {renderTitle()}
                  </h1>

                  {slide.description && (
                    <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed whitespace-pre-line">
                      {slide.description}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={
                        slide.id === "catering" ? "/catering" : "/distribution"
                      }
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2"
                    >
                      <PlayCircle size={18} />
                      자세히 보기
                    </Link>
                  </div>
                </MotionDiv>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex gap-2 mt-12">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlideIndex === idx
                        ? "w-8 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
