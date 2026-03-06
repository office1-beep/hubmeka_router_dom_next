import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-auto">
      {/* Container aligned with other pages (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Row: Links & Sitemap Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-3 mb-3 gap-3">
          <div className="flex gap-5 text-sm">
            <Link
              href="/agreement"
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              이용약관
            </Link>
            <Link
              href="/policy"
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              개인정보처리방침
            </Link>
          </div>

          <Link
            href="/sitemap"
            className="flex items-center gap-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs px-2.5 py-1 transition-colors rounded"
          >
            <Play size={8} className="fill-current" />
            사이트맵
          </Link>
        </div>

        {/* Info Text Section */}
        <div className="text-[13px] text-slate-500 space-y-1.5 font-normal tracking-tight leading-relaxed">
          <p className="flex flex-wrap items-center gap-x-1">
            <span>(주)허브메카 대표이사 박시현</span>
            <span className="text-slate-300">·</span>
            <span>개인정보관리책임자 기업본부 우태경</span>
            <span className="text-slate-300">·</span>
            <span>사업자등록번호 : 107-86-29961</span>
          </p>
          <p className="flex flex-wrap items-center gap-x-1">
            <span>
              152-789 서울시 구로구 디지털로 27길 36(구로3동 212-26번지)
            </span>
            <span className="ml-1">
              <a
                href="tel:02-868-3260"
                className="hover:text-slate-800 transition-colors"
              >
                TEL 02-868-3260
              </a>
            </span>
            <span className="text-slate-300 mx-1">·</span>
            <span>
              Copyright (c) 2014 - {new Date().getFullYear()} hubmeka corp, all
              rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
