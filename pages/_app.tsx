import React, { useRef, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// 전역 스타일 추가
import "../index.css";

// Layout용 공통 컴포넌트 임포트
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 10);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // 라우트 변경마다 스크롤 최상단 리셋 및 헤더 원상복구 로직 유지
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsScrolled(false);
  }, [router.pathname]);

  return (
    <div className="relative h-screen w-full bg-white text-slate-900 overflow-hidden flex flex-col">
      <Header isScrolled={isScrolled} />
      <main
        ref={scrollRef}
        className="flex-1 w-full overflow-y-auto scroll-smooth"
      >
        <div className="min-h-full flex flex-col">
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
